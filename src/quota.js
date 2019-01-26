import to from 'await-to-js';
import invokeAPI from './invokeAPI';

const getQuota = async () => {
  const [error, result] = await to(invokeAPI('get/mailbox/all', 'quota', mailbox => mailbox.percent_in_use > 75));

  if (error) {
    console.error(`Error occurred checking quota: ${JSON.stringify(error)}`);
    throw error;
  }

  if (result.length > 0) {
    console.error(`Messages are sitting in quarantine!\n${JSON.stringify(result, null, 2)}`);
    return true;
  }
};

export default getQuota;
