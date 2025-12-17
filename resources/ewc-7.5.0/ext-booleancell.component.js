import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Boolean from "./Ext/grid/cell/Boolean.js";

export default class EWCBooleancell extends Ext_grid_cell_Boolean {
    constructor () {
        super( [], [] );
        this.xtype = "booleancell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-booleancell" ) == undefined ) {
        globalThis.customElements.define( "ext-booleancell", ElementParser.withParsedCallback( EWCBooleancell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-booleancell" ) == undefined ) {
        globalThis.customElements.define( "ext-booleancell", EWCBooleancell );
    }
}
