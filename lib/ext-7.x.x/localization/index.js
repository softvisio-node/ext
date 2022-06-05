import locale from "../../locale.js";

import "./grid/menu/AddGroup.js";
import "./grid/menu/Columns.js";
import "./grid/menu/GroupByThis.js";
import "./grid/menu/Groups.js";
import "./grid/menu/RemoveGroup.js";
import "./grid/menu/ShowInGroups.js";
import "./grid/menu/SortAsc.js";
import "./grid/menu/SortDesc.js";
import "./grid/plugin/ViewOptions.js";
import "./picker/Date.js";
import "./picker/Picker.js";
import "./Panel.js";

if ( locale && locale.language !== "en" ) {
    try {
        await import( "./locale/" + locale.language + ".js" );
    }
    catch ( e ) {}
}
