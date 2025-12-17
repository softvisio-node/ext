import ElementParser from "./common/ElementParser.js";
import Ext_dataview_EmptyText from "./Ext/dataview/EmptyText.js";

export default class EWCEmptytext extends Ext_dataview_EmptyText {
    constructor () {
        super( [], [] );
        this.xtype = "emptytext";
    }
}
try {
    if ( globalThis.customElements.get( "ext-emptytext" ) == undefined ) {
        globalThis.customElements.define( "ext-emptytext", ElementParser.withParsedCallback( EWCEmptytext ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-emptytext" ) == undefined ) {
        globalThis.customElements.define( "ext-emptytext", EWCEmptytext );
    }
}
