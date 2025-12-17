import ElementParser from "./common/ElementParser.js";
import Ext_grid_Grid from "./Ext/grid/Grid.js";

export default class EWCGrid extends Ext_grid_Grid {
    constructor () {
        super( [], [] );
        this.xtype = "grid";
    }
}
try {
    if ( globalThis.customElements.get( "ext-grid" ) == undefined ) {
        globalThis.customElements.define( "ext-grid", ElementParser.withParsedCallback( EWCGrid ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-grid" ) == undefined ) {
        globalThis.customElements.define( "ext-grid", EWCGrid );
    }
}
