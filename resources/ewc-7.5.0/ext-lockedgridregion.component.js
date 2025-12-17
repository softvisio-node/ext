import ElementParser from "./common/ElementParser.js";
import Ext_grid_LockedGridRegion from "./Ext/grid/LockedGridRegion.js";

export default class EWCLockedgridregion extends Ext_grid_LockedGridRegion {
    constructor () {
        super( [], [] );
        this.xtype = "lockedgridregion";
    }
}
try {
    if ( globalThis.customElements.get( "ext-lockedgridregion" ) == undefined ) {
        globalThis.customElements.define( "ext-lockedgridregion", ElementParser.withParsedCallback( EWCLockedgridregion ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-lockedgridregion" ) == undefined ) {
        globalThis.customElements.define( "ext-lockedgridregion", EWCLockedgridregion );
    }
}
