import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Tree from "./Ext/grid/column/Tree.js";

export default class EWCTreecolumn extends Ext_grid_column_Tree {
    constructor () {
        super( [], [] );
        this.xtype = "treecolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-treecolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-treecolumn", ElementParser.withParsedCallback( EWCTreecolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-treecolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-treecolumn", EWCTreecolumn );
    }
}
