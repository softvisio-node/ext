import ElementParser from "./common/ElementParser.js";
import Ext_d3_hierarchy_TreeMap from "./Ext/d3/hierarchy/TreeMap.js";

export default class EWCD3_treemap extends Ext_d3_hierarchy_TreeMap {
    constructor () {
        super( [], [] );
        this.xtype = "d3-treemap";
    }
}
try {
    if ( globalThis.customElements.get( "ext-d3-treemap" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-treemap", ElementParser.withParsedCallback( EWCD3_treemap ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-d3-treemap" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-treemap", EWCD3_treemap );
    }
}
