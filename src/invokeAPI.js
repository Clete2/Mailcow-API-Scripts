import to from 'await-to-js';
import fetch from 'node-fetch';

const invokeAPI = async (method, type, filterFunction = () => true) => {
  const [error, result] = await to(fetch(`https://${process.env.MAILCOW_URL}/api/v1/${method}`, {
    headers: {
      'x-api-key': process.env.MAILCOW_API_KEY,
    },
  }));

  if (error) {
    console.error(`Error occurred checking ${type}: ${JSON.stringify(error)}`);
    throw error;
  }

  if (result.status !== 200) {
    const errorMessage = `Got status code ${result.status} when checking ${type}.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  const [jsonError, json] = await to(result.json());

  if (jsonError) {
    const errorMessage = `Got an empty response from the API when checking the ${type}: ${JSON.stringify(jsonError)}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return json.filter(filterFunction);
};

export default invokeAPI;
