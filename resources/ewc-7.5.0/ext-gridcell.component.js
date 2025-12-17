import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Cell from "./Ext/grid/cell/Cell.js";

export default class EWCGridcell extends Ext_grid_cell_Cell {
    constructor () {
        super( [], [] );
        this.xtype = "gridcell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridcell" ) == undefined ) {
        globalThis.customElements.define( "ext-gridcell", ElementParser.withParsedCallback( EWCGridcell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridcell" ) == undefined ) {
        globalThis.customElements.define( "ext-gridcell", EWCGridcell );
    }
}
