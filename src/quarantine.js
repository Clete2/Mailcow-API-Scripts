import to from 'await-to-js';
import fetch from 'node-fetch';

const getQueue = async () => {
  const [error, result] = await to(fetch(`https://${process.env.MAILCOW_URL}/api/v1/get/mailq/all`, {
    headers: {
      'x-api-key': process.env.MAILCOW_API_KEY
    }
  }));

  if (error) {
    console.error(`Error occurred checking quarantine: ${JSON.stringify(error)}`);
    throw error;
  }

  if (result.status !== 200) {
    const errorMessage = `Got status code ${result.status} when checking quarantine.`;
    console.error(errorMessage);
    throw new Error(errorMessage)
  }

  const [jsonError, json] = await to(result.json());

  if (jsonError) {
    const errorMessage = `Got an empty response from the API when checking the quarantine: ${JSON.stringify(jsonError)}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  if (json.length > 0) {
    console.error(`Messages are sitting in quarantine!\n${JSON.stringify(json, null, 2)}`);
  }
}

export default getQueue;