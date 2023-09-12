# Nuxt 3 Stater

A nuxt3 SPA starter template with encrypted store and auth flow using PKCE.

Since this is focused on being a SPA, SSR is disabled to assist with better browser session management.

### Modules

- nuxt-icon
- @nuxt/image
- @nuxt/content
- @pinia/nuxt (with: @pinia-plugin-persistedstate/nuxt)
- @vueuse/nuxt

### Dependencies

- Tailwind CSS
- Heroicons
- Headless UI (vue)
- axios
- crypto-js
- oauth-pkce

## Install

```bash
# npm

git clone https://github.com/pdphilip/nuxt3-starter.git my-project
cd my-project
npm install

```

## Create an ENV file in the root `.env`

```dotenv
APP_NAME="My Secure SPA"
NUXT_PUBLIC_DEBUG=true
NUXT_PUBLIC_CLIENT_ID=XXXXXXXXX
NUXT_PUBLIC_REDIRECT_URI=http://localhost:3000/callback
NUXT_PUBLIC_AUTH_URI=https://api.xxxxx/oauth/authorize
NUXT_PUBLIC_TOKEN_URI=https://api.xxxxx/oauth/token
NUXT_PUBLIC_API_BASE_URI=https://api.xxxxx/v1
```

Notes:

- `APP_NAME` Name of your app, will be used in the title tag
- `NUXT_PUBLIC_DEBUG` is to show the current decrypted user store/state on screen
- `NUXT_PUBLIC_CLIENT_ID` is the client id for your oauth app
- `NUXT_PUBLIC_REDIRECT_URI` is the redirect uri for your oauth app
- `NUXT_PUBLIC_AUTH_URI` is the url to your oauth provider's authorization endpoint
- `NUXT_PUBLIC_TOKEN_URI` is the url to your oauth provider's token endpoint
- `NUXT_PUBLIC_API_BASE_URI` is the base url for your api

**`remember to restart dev server when changing env vars`**

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```
