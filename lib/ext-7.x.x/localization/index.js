import locale from "../../locale.js";
import "./grid/menu/SortAsc.js";
import "./grid/menu/SortDesc.js";
import "./grid/menu/ShowInGroups.js";
import "./grid/menu/GroupByThis.js";

if ( locale && locale.language !== "en" ) {
    try {
        await import( "./locale/" + locale.language + ".js" );
    }
    catch ( e ) {}
}
