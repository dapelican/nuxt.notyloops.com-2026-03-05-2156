# nuxt-boilerplate-2026-03-05-2105

## First commit: .gitignore + README.md

## project settings
- AGENTS.md
- .vscode

## useful maintenance scripts
```
{
  "type": "module",
  "scripts": {
    "check-new-packages": "npx npm-check-updates",
    "sort-package-json": "npx sort-package-json"
  },
  "engines": {
    "node": "24.x"
  }
}
```

## nuxt + nuxt ui
- Packages: `npm i nuxt @nuxt/ui tailwindcss`.
- Verification: `npm run local`.

Other alternatives for UI:
- daisyui
- primevue
- flowbite

More info: [https://npmtrends.com/@nuxt/ui-vs-daisyui-vs-primevue](https://npmtrends.com/@nuxt/ui-vs-daisyui-vs-primevue)

## eslint
- Packages: `npm i -D eslint @nuxt/eslint`.
- Verification: `npm run lint`.
- vscode: `> ESLint: Restart ESLint Server`.

## i18n
- Package: `npm i @nuxtjs/i18n`.

## authentication - backend

### nuxt-auth-utils
- Package: `npm i nuxt-auth-utils`.
- Use of the composable `useUserSession()` to log in and log out.

### server/database
- Packages: `npm i -D dotenv`, `npm i pg`.
- server/database/query.js.
- server/database/migrations.js.
- server/database/migrate.js.

## server/helpers
- Packages: `npm i ejs luxon uuid zod`.
Alternatives to zod: valibot, @regle/nuxt, yup, joi and superstruct: 
[https://npmtrends.com/@regle/nuxt-vs-joi-vs-superstruct-vs-valibot-vs-yup-vs-zod](https://npmtrends.com/@regle/nuxt-vs-joi-vs-superstruct-vs-valibot-vs-yup-vs-zod)
- sever/helpers/email-templates/*
- server/helpers/constants.js.
- server/helpers/get-subdomain.js.
- server/helpers/handle-backend-error.js.
- server/helpers/http-status-codes.js.
- server/helpers/validators.js.
- server/helpers/verify-session-and-return-user.js.

## server/migrations
- server/migrations/2026-02-21-1610-enable-uuid-and-updated_at.sql.
- server/migrations/2026-02-21-1611-create-table-logs.sql.
- server/migrations/2026-02-21-1612-create-table-users.sql.
- server/migrations/2026-02-21-1613-create-table-user_email_tokens.sql.
- server/migrations/2026-02-21-1614-create-table-user_session_tokens.sql.

## sever/plugins
- server/plugins/01.migrations.js.

## server/routes
- Packages: `npm i bcrypt`.
- server/route/a/*.
- server/routes/monitoring/*.

## server/services
- Packages: `npm i axios`.
- server/services/emailable/verify-email.js.
- server/services/smtp2go/send-email.js.

## tests
- Packages: `npm i -D vitest @vitest/coverage-v8`.
- server/tests/seeds/*.
- server/tests/vitest/*.
- vitest.config.js.
- docker-compose.yml

## package.json

## authentication - frontend
- app/components/HeaderElement.vue.
- app/composables/handleFrontendError.js.
- app/pages/a/sign-up-1.vue.
- app/pages/a/sign-up-2/[token_to_validate_email].vue.
- app/pages/manage-notes/page/1.vue (CONNECTED_USER_LANDING_PAGE).
- app/pages/a/log-in.vue.
- app/pages/account/information.vue.
- app/pages/a/password-forgotten.vue.
