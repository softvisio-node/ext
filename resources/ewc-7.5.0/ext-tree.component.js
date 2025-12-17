import ElementParser from "./common/ElementParser.js";
import Ext_tree_Tree from "./Ext/tree/Tree.js";

export default class EWCTree extends Ext_tree_Tree {
    constructor () {
        super( [], [] );
        this.xtype = "tree";
    }
}
try {
    if ( globalThis.customElements.get( "ext-tree" ) == undefined ) {
        globalThis.customElements.define( "ext-tree", ElementParser.withParsedCallback( EWCTree ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-tree" ) == undefined ) {
        globalThis.customElements.define( "ext-tree", EWCTree );
    }
}
