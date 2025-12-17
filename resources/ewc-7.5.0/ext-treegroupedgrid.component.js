import ElementParser from "./common/ElementParser.js";
import Ext_grid_TreeGrouped from "./Ext/grid/TreeGrouped.js";

export default class EWCTreegroupedgrid extends Ext_grid_TreeGrouped {
    constructor () {
        super( [], [] );
        this.xtype = "treegroupedgrid";
    }
}
try {
    if ( globalThis.customElements.get( "ext-treegroupedgrid" ) == undefined ) {
        globalThis.customElements.define( "ext-treegroupedgrid", ElementParser.withParsedCallback( EWCTreegroupedgrid ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-treegroupedgrid" ) == undefined ) {
        globalThis.customElements.define( "ext-treegroupedgrid", EWCTreegroupedgrid );
    }
}
