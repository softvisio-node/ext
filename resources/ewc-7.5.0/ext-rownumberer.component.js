import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_RowNumberer from "./Ext/grid/column/RowNumberer.js";

export default class EWCRownumberer extends Ext_grid_column_RowNumberer {
    constructor () {
        super( [], [] );
        this.xtype = "rownumberer";
    }
}
try {
    if ( globalThis.customElements.get( "ext-rownumberer" ) == undefined ) {
        globalThis.customElements.define( "ext-rownumberer", ElementParser.withParsedCallback( EWCRownumberer ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-rownumberer" ) == undefined ) {
        globalThis.customElements.define( "ext-rownumberer", EWCRownumberer );
    }
}
