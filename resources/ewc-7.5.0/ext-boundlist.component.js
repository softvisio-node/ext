import ElementParser from "./common/ElementParser.js";
import Ext_dataview_BoundList from "./Ext/dataview/BoundList.js";

export default class EWCBoundlist extends Ext_dataview_BoundList {
    constructor () {
        super( [], [] );
        this.xtype = "boundlist";
    }
}
try {
    if ( globalThis.customElements.get( "ext-boundlist" ) == undefined ) {
        globalThis.customElements.define( "ext-boundlist", ElementParser.withParsedCallback( EWCBoundlist ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-boundlist" ) == undefined ) {
        globalThis.customElements.define( "ext-boundlist", EWCBoundlist );
    }
}
