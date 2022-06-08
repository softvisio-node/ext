import locale from "../locale.js";

import "./Date.js";
import "./Panel.js";
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

try {
    await import( "./locale/" + ( locale.country || "default" ) + ".js" );
}
catch ( e ) {}
