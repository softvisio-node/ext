export default async function ( locale ) {
    await locale.add( language => import( "#resources/locales/" + language + ".po" ) );

    if ( locale.language !== "en" ) {
        try {
            await import( "./ext-7.x.x/locale/" + locale.language + ".js" );
        }
        catch ( e ) {}
    }
}
