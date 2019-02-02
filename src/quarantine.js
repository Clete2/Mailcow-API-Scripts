import to from 'await-to-js';
import invokeAPI from './invokeAPI';

export default async () => {
  const [error, result] = await to(invokeAPI('get/mailq/all', 'quarantine'));

  if (error) {
    console.error(`Error occurred checking quarantine: ${JSON.stringify(error)}`);
    throw error;
  }

  if (result.length > 0) {
    const message = `Messages are sitting in quarantine!\n${JSON.stringify(result, null, 2)}`;
    console.error(message);
    throw new Error(message);
  }
};
