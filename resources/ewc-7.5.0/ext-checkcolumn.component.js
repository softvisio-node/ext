import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Check from "./Ext/grid/column/Check.js";

export default class EWCCheckcolumn extends Ext_grid_column_Check {
    constructor () {
        super( [], [] );
        this.xtype = "checkcolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-checkcolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-checkcolumn", ElementParser.withParsedCallback( EWCCheckcolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-checkcolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-checkcolumn", EWCCheckcolumn );
    }
}
