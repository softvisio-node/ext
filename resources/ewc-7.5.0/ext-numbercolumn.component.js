import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Number from "./Ext/grid/column/Number.js";

export default class EWCNumbercolumn extends Ext_grid_column_Number {
    constructor () {
        super( [], [] );
        this.xtype = "numbercolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-numbercolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-numbercolumn", ElementParser.withParsedCallback( EWCNumbercolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-numbercolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-numbercolumn", EWCNumbercolumn );
    }
}
