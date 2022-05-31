import "./grid/menu/SortAsc.js";
import "./grid/menu/SortDesc.js";

const locale = "ru";

if ( locale !== "en" ) {
    try {
        await import( "./locale/" + locale + ".js" );
    }
    catch ( e ) {}
}
