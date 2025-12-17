import ElementParser from "./common/ElementParser.js";
import Ext_DataView from "./Ext/DataView.js";

export default class EWCDataview extends Ext_DataView {
    constructor () {
        super( [], [] );
        this.xtype = "dataview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-dataview" ) == undefined ) {
        globalThis.customElements.define( "ext-dataview", ElementParser.withParsedCallback( EWCDataview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-dataview" ) == undefined ) {
        globalThis.customElements.define( "ext-dataview", EWCDataview );
    }
}
