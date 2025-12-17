import ElementParser from "./common/ElementParser.js";
import Ext_grid_LockedGrid from "./Ext/grid/LockedGrid.js";

export default class EWCLockedgrid extends Ext_grid_LockedGrid {
    constructor () {
        super( [], [] );
        this.xtype = "lockedgrid";
    }
}
try {
    if ( globalThis.customElements.get( "ext-lockedgrid" ) == undefined ) {
        globalThis.customElements.define( "ext-lockedgrid", ElementParser.withParsedCallback( EWCLockedgrid ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-lockedgrid" ) == undefined ) {
        globalThis.customElements.define( "ext-lockedgrid", EWCLockedgrid );
    }
}
