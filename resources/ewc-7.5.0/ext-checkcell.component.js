import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Check from "./Ext/grid/cell/Check.js";

export default class EWCCheckcell extends Ext_grid_cell_Check {
    constructor () {
        super( [], [] );
        this.xtype = "checkcell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-checkcell" ) == undefined ) {
        globalThis.customElements.define( "ext-checkcell", ElementParser.withParsedCallback( EWCCheckcell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-checkcell" ) == undefined ) {
        globalThis.customElements.define( "ext-checkcell", EWCCheckcell );
    }
}
