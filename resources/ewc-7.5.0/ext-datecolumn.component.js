import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Date from "./Ext/grid/column/Date.js";

export default class EWCDatecolumn extends Ext_grid_column_Date {
    constructor () {
        super( [], [] );
        this.xtype = "datecolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-datecolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-datecolumn", ElementParser.withParsedCallback( EWCDatecolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-datecolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-datecolumn", EWCDatecolumn );
    }
}
