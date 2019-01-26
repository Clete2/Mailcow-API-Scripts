import quarantine from './quarantine';
import quota from './quota';

const isQuarantined = quarantine();
const isCloseToExceedingQuota = quota();

if (isQuarantined === true || isCloseToExceedingQuota === true) {
  console.log('A status check failed. Exiting with non-zero status code.');
  process.exit(1);
}
