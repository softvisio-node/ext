import ElementParser from "./common/ElementParser.js";
import Ext_d3_hierarchy_tree_HorizontalTree from "./Ext/d3/hierarchy/tree/HorizontalTree.js";

export default class EWCD3_tree extends Ext_d3_hierarchy_tree_HorizontalTree {
    constructor () {
        super( [], [] );
        this.xtype = "d3-tree";
    }
}
try {
    if ( globalThis.customElements.get( "ext-d3-tree" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-tree", ElementParser.withParsedCallback( EWCD3_tree ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-d3-tree" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-tree", EWCD3_tree );
    }
}
