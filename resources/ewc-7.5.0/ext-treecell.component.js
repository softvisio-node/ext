import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Tree from "./Ext/grid/cell/Tree.js";

export default class EWCTreecell extends Ext_grid_cell_Tree {
    constructor () {
        super( [], [] );
        this.xtype = "treecell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-treecell" ) == undefined ) {
        globalThis.customElements.define( "ext-treecell", ElementParser.withParsedCallback( EWCTreecell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-treecell" ) == undefined ) {
        globalThis.customElements.define( "ext-treecell", EWCTreecell );
    }
}
