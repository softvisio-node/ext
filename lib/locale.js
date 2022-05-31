import Locale from "#vue/locale";

await Locale.register( locale => import( "#resources/locales/" + locale + ".po" ) );
