import ElementParser from "./common/ElementParser.js";
import Ext_dataview_ListItemPlaceholder from "./Ext/dataview/ListItemPlaceholder.js";

export default class EWCListitemplaceholder extends Ext_dataview_ListItemPlaceholder {
    constructor () {
        super( [], [] );
        this.xtype = "listitemplaceholder";
    }
}
try {
    if ( globalThis.customElements.get( "ext-listitemplaceholder" ) == undefined ) {
        globalThis.customElements.define( "ext-listitemplaceholder", ElementParser.withParsedCallback( EWCListitemplaceholder ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-listitemplaceholder" ) == undefined ) {
        globalThis.customElements.define( "ext-listitemplaceholder", EWCListitemplaceholder );
    }
}
