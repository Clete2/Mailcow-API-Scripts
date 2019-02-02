import quarantine from './quarantine';
import quota from './quota';

Promise.all([quota(), quarantine()])
  .catch((error) => {
    console.error(`A status check failed. Exiting with non-zero status code. error=${JSON.stringify(error)}`);
    process.exit(1);
  });
