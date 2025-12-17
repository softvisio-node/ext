import ElementParser from "./common/ElementParser.js";
import Ext_dataview_ItemHeader from "./Ext/dataview/ItemHeader.js";

export default class EWCItemheader extends Ext_dataview_ItemHeader {
    constructor () {
        super( [], [] );
        this.xtype = "itemheader";
    }
}
try {
    if ( globalThis.customElements.get( "ext-itemheader" ) == undefined ) {
        globalThis.customElements.define( "ext-itemheader", ElementParser.withParsedCallback( EWCItemheader ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-itemheader" ) == undefined ) {
        globalThis.customElements.define( "ext-itemheader", EWCItemheader );
    }
}
