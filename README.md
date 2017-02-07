# nuxt-auth0

> A simple example that shows how to use [Nuxt.js](https://nuxtjs.org) with [Auth0](https://auth0.com)

![nuxt-auth0](https://cloud.githubusercontent.com/assets/904724/22703834/d971838c-ed65-11e6-90f9-5ecf2a1be5f0.gif)

You can access a simple demo here: https://auth0.nuxtjs.org

## Credits

This example is inspired by [next.js-auth0](https://github.com/luisrudge/next.js-auth0) made by [Luís Rudge](https://github.com/luisrudge).

## Setup

* Create an account at Auth0 (https://auth0.com)
* Add your endpoints to your client's allowed urls like this ![nuxt-callbacks](https://cloud.githubusercontent.com/assets/904724/22703633/23f35724-ed65-11e6-83e4-227ad77c00ff.png)
* Add your logout endpoint to your account allowed urls like this ![nuxt-logout-cb](https://cloud.githubusercontent.com/assets/904724/22703768/9782bbbc-ed65-11e6-93b7-9c1e4d5d7984.png)

* Copy the file `config.sample.json` at the root folder, rename it as `config.json` and add your Auth0 keys

## Running Locally

```
git clone https://github.com/nuxt/example-auth0.git
cd example-auth0
npm install
npm run dev
```

