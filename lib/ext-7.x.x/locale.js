import locale from "#vue/locale";

export default locale;

await locale.add( language => import( /* webpackMode: "eager" */ "./locales/" + language + ".po" ), "ext" );
