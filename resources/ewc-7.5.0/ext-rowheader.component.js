import ElementParser from "./common/ElementParser.js";
import Ext_grid_RowHeader from "./Ext/grid/RowHeader.js";

export default class EWCRowheader extends Ext_grid_RowHeader {
    constructor () {
        super( [], [] );
        this.xtype = "rowheader";
    }
}
try {
    if ( globalThis.customElements.get( "ext-rowheader" ) == undefined ) {
        globalThis.customElements.define( "ext-rowheader", ElementParser.withParsedCallback( EWCRowheader ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-rowheader" ) == undefined ) {
        globalThis.customElements.define( "ext-rowheader", EWCRowheader );
    }
}
