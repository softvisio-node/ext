import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Boolean from "./Ext/grid/column/Boolean.js";

export default class EWCBooleancolumn extends Ext_grid_column_Boolean {
    constructor () {
        super( [], [] );
        this.xtype = "booleancolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-booleancolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-booleancolumn", ElementParser.withParsedCallback( EWCBooleancolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-booleancolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-booleancolumn", EWCBooleancolumn );
    }
}
