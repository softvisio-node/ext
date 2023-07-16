import locale from "#vue/locale";

await locale.add( language => import( /* webpackChunkName: "locales/[request]" */ "./ext-7.x.x/locales/" + language + ".po" ), "ext" );
await import( /* webpackChunkName: "ext" */ "./ext-7.x.x/index.js" );
