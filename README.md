# Overview
Scripts that will execute the Mailcow API and return useful results. The scripts are designed to be used with a monitoring solution. Thus, they will be silent if there is nothing to report.

# Running
1. Set environment variable MAILCOW_API_KEY to be your API key from the main Mailcow admin page
1. Set environment variable MAILCOW_URL to be your base url (mail.mydomain.com, for instance)
1. `yarn && yarn start`

# Features
Thus far:
1. Look for quarantined messages
1. Check quotas