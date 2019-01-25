import to from 'await-to-js';
import invokeAPI from './invokeAPI';

const getQueue = async () => {
  const [error, result] = await to(invokeAPI('get/mailq/all', 'quarantine'));

  if (error) {
    console.error(`Error occurred checking quarantine: ${JSON.stringify(error)}`);
    throw error;
  }

  if (result.length > 0) {
    console.error(`Messages are sitting in quarantine!\n${JSON.stringify(result, null, 2)}`);
  }
};

export default getQueue;
