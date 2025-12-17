import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Group from "./Ext/grid/cell/Group.js";

export default class EWCGroupcell extends Ext_grid_cell_Group {
    constructor () {
        super( [], [] );
        this.xtype = "groupcell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-groupcell" ) == undefined ) {
        globalThis.customElements.define( "ext-groupcell", ElementParser.withParsedCallback( EWCGroupcell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-groupcell" ) == undefined ) {
        globalThis.customElements.define( "ext-groupcell", EWCGroupcell );
    }
}
