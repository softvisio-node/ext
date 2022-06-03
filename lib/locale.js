import locale from "#vue/locale";

export default locale;

await locale.add( language => import( "#resources/locales/" + language + ".po" ) );
