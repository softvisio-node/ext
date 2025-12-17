import ElementParser from "./common/ElementParser.js";
import Ext_pivot_cell_Cell from "./Ext/pivot/cell/Cell.js";

export default class EWCPivotgridcell extends Ext_pivot_cell_Cell {
    constructor () {
        super( [], [] );
        this.xtype = "pivotgridcell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotgridcell" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotgridcell", ElementParser.withParsedCallback( EWCPivotgridcell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotgridcell" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotgridcell", EWCPivotgridcell );
    }
}
