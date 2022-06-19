import locale from "#vue/locale";

export default locale;

await locale.add( language => import( /* webpackChunkName: "locales/[request]" */ "./locales/" + language + ".po" ), "ext" );
