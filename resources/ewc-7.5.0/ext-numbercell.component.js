import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Number from "./Ext/grid/cell/Number.js";

export default class EWCNumbercell extends Ext_grid_cell_Number {
    constructor () {
        super( [], [] );
        this.xtype = "numbercell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-numbercell" ) == undefined ) {
        globalThis.customElements.define( "ext-numbercell", ElementParser.withParsedCallback( EWCNumbercell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-numbercell" ) == undefined ) {
        globalThis.customElements.define( "ext-numbercell", EWCNumbercell );
    }
}
