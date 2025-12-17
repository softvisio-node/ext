import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_RowNumberer from "./Ext/grid/cell/RowNumberer.js";

export default class EWCRownumberercell extends Ext_grid_cell_RowNumberer {
    constructor () {
        super( [], [] );
        this.xtype = "rownumberercell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-rownumberercell" ) == undefined ) {
        globalThis.customElements.define( "ext-rownumberercell", ElementParser.withParsedCallback( EWCRownumberercell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-rownumberercell" ) == undefined ) {
        globalThis.customElements.define( "ext-rownumberercell", EWCRownumberercell );
    }
}
