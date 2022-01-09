[![npm](https://img.shields.io/npm/v/get-package-manager.svg)](https://www.npmjs.com/package/get-package-manager) [![GitHub stars](https://img.shields.io/github/stars/julekgwa/get-package-manager.svg?style=social&label=Stars)](https://github.com/julekgwa/get-package-manager) [![gzip size](http://img.badgesize.io/https://unpkg.com/get-package-manager/dist/index.js?compression=gzip)](https://unpkg.com/get-package-manager/dist/index.js) ![npm](https://img.shields.io/npm/dm/get-package-manager) [![julekgwa](https://circleci.com/gh/julekgwa/get-package-manager.svg?style=shield)](https://github.com/julekgwa/get-package-manager) [![Coverage Status](https://coveralls.io/repos/github/julekgwa/get-package-manager/badge.svg?branch=main)](https://coveralls.io/github/julekgwa/get-package-manager?branch=main)

![toggle](images/aws-tf.png)

# Installation

```bash
npm i get-package-manager -g
```

or

```bash
yarn global add get-package-manager
```

# Setup AWS Account
<details>

  1. Create a new user in the IAM Section on AWS [here](https://console.aws.amazon.com/iam/home?region=us-east-1#/users).
  2. Select Programmatic access below and enter your user details.

   ![user](images/addUser.png)

  3. Click next and select the admin group.

   ![group](images/group.png)

  4. Continue with the steps until you reach the Create User section and confirm the user has been created. Once the user is created you will get an Access key ID and Secret access key.
  5. Open terminal and run ```$ aws configure```. Paste access key id and secret access key from step 4

  ![configure](images/aws-confgure.png)

   or create a file called instance.tf with the following code.

   ```
   provider "aws" {
    access_key = "ACCESS_KEY_HERE"
    secret_key = "SECRET_KEY_HERE"
   }
   ```

</details>

# Install terraform
Download Terraform [here](https://www.terraform.io/downloads.html) and follow the guide [here](https://www.terraform.io/intro/getting-started/install.html) on how to install Terraform on your specific system.

# Usage

To create a new lambda run the following command
```bash
get-package-manager
```

# Optional Arguments

| Argument           | Description            ||
|----------------|-------------------------------------------------------------------------------------------------------|---|
| -n, --new      | Creates a new project
| -a, --add        | Adds a new lambda. Use -a sfn to add a step function
| -h, --help       | Prints the usage guide
| -o, --org | Moves all your lambdas to one project [mono project]


# License

MIT
