import queue from './queue';
import quota from './quota';

Promise.all([quota(), queue()])
  .catch((error) => {
    console.error(`A status check failed. Exiting with non-zero status code. error=${JSON.stringify(error)}`);
    process.exit(1);
  });
