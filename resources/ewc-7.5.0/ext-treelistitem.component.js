import ElementParser from "./common/ElementParser.js";
import Ext_list_TreeItem from "./Ext/list/TreeItem.js";

export default class EWCTreelistitem extends Ext_list_TreeItem {
    constructor () {
        super( [], [] );
        this.xtype = "treelistitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-treelistitem" ) == undefined ) {
        globalThis.customElements.define( "ext-treelistitem", ElementParser.withParsedCallback( EWCTreelistitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-treelistitem" ) == undefined ) {
        globalThis.customElements.define( "ext-treelistitem", EWCTreelistitem );
    }
}
