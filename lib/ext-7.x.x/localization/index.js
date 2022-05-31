import locale from "../../locale.js";
import "./grid/menu/SortAsc.js";
import "./grid/menu/SortDesc.js";

if ( locale && locale.language !== "en" ) {
    try {
        await import( "./locale/" + locale.language + ".js" );
    }
    catch ( e ) {}
}
