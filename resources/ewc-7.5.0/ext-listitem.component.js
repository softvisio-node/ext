import ElementParser from "./common/ElementParser.js";
import Ext_dataview_component_ListItem from "./Ext/dataview/component/ListItem.js";

export default class EWCListitem extends Ext_dataview_component_ListItem {
    constructor () {
        super( [], [] );
        this.xtype = "listitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-listitem" ) == undefined ) {
        globalThis.customElements.define( "ext-listitem", ElementParser.withParsedCallback( EWCListitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-listitem" ) == undefined ) {
        globalThis.customElements.define( "ext-listitem", EWCListitem );
    }
}
