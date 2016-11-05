# next.js-auth0
a simple example that shows how to use next.js with auth0

You can access a simple demo here: https://nextjs-auth0.now.sh

## Setup

* Install [yarn](https://yarnpkg.com/en/docs/install/)
* Create an account at Auth0 (https://auth0.com)
* Add your endpoints to your client's allowed urls like this ![](https://i.imgur.com/KmIc96g.png)
* Add your logout endpoint to your account allowed urls like this ![](https://i.imgur.com/5qZYSQ8.png)
* Add your Auth0 credentials to [this file](https://github.com/luisrudge/next.js-auth0/blob/master/utils/lock.js)

## Running Locally

```
git clone https://github.com/luisrudge/next.js-auth0.git
cd next.js-auth0
yarn
yarn dev
```

## Deploying to [now.sh](https://zeit.co/now/)
If you want to deploy to `now`, make sure you update your `package.json` file's `now.alias` configuration key to your own alias.
