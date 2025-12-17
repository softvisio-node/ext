import ElementParser from "./common/ElementParser.js";
import Ext_pivot_d3_TreeMap from "./Ext/pivot/d3/TreeMap.js";

export default class EWCPivottreemap extends Ext_pivot_d3_TreeMap {
    constructor () {
        super( [], [] );
        this.xtype = "pivottreemap";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivottreemap" ) == undefined ) {
        globalThis.customElements.define( "ext-pivottreemap", ElementParser.withParsedCallback( EWCPivottreemap ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivottreemap" ) == undefined ) {
        globalThis.customElements.define( "ext-pivottreemap", EWCPivottreemap );
    }
}
