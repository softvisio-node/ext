import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Base from "./Ext/grid/cell/Base.js";

export default class EWCGridcellbase extends Ext_grid_cell_Base {
    constructor () {
        super( [], [] );
        this.xtype = "gridcellbase";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridcellbase" ) == undefined ) {
        globalThis.customElements.define( "ext-gridcellbase", ElementParser.withParsedCallback( EWCGridcellbase ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridcellbase" ) == undefined ) {
        globalThis.customElements.define( "ext-gridcellbase", EWCGridcellbase );
    }
}
