import Locale from "#vue/locale";

export default await Locale.register( locale => import( "#resources/locales/" + locale + ".po" ) );
