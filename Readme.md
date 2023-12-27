# Practice backend 

Welcome to the Project repository! This document provides information about the project and guidelines for contributors.

## Contribution Guidelines

### Do Not Push `node_modules` and `.env` to GitHub

Please be mindful not to push certain files and directories to the repository. Specifically, avoid including the following in your commits:

1. **node_modules:** The `node_modules` directory contains dependencies for the project and can be large. Including it in the repository is unnecessary, as dependencies can be installed using `npm install` or `yarn install` based on the `package.json` file.

2. **.env:** The `.env` file often contains sensitive information such as API keys, database credentials, and other configuration details. It should not be included in the repository to maintain the security of your application.

Before making commits or pushing changes, please ensure that you have added the following entries to your `.gitignore` file:

```plaintext
# .gitignore
node_modules/
.env