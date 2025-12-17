import ElementParser from "./common/ElementParser.js";
import Ext_list_Tree from "./Ext/list/Tree.js";

export default class EWCTreelist extends Ext_list_Tree {
    constructor () {
        super( [], [] );
        this.xtype = "treelist";
    }
}
try {
    if ( globalThis.customElements.get( "ext-treelist" ) == undefined ) {
        globalThis.customElements.define( "ext-treelist", ElementParser.withParsedCallback( EWCTreelist ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-treelist" ) == undefined ) {
        globalThis.customElements.define( "ext-treelist", EWCTreelist );
    }
}
