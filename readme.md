# auth0-api-demo
An Auth0 2.0 API Server for Demonstration purposes, this repository does not include a client. Please use CURL or `fetch` to do CRUD. The purpose 
of this demo is to demonstrate how to right a real world ish api example with scopes and roles etc.

# How to set this up?

- Enable OAuth 2.0 API Authorization from Advanced Settings under Account settings.
- Visit [APIs Section](https://manage.auth0.com/#/apis)
- Create a new API and copy the identifier and domain for you auth0 api and add them to config.example.js then rename it to config.js
- Create a new Client (if you don't have one)
- Create the scopes under Scopes 
    - read:protected | Used to read the protected  
    - read:message   | Used to read the super secret admin message 
    - write:message  | Used to write the super secret admin message 
- If you are using lock to get the token you can find the relavent options in lock.js 
- Use fetch or curl to make the request. 
- To setup admin, add the rule.js to your [Rules](https://manage.auth0.com/#/rules)
- On the rules page, you'll need to add ADMIN_EMAIL to the settings, this email will be treated as admin

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.