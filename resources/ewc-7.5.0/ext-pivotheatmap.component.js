import ElementParser from "./common/ElementParser.js";
import Ext_pivot_d3_HeatMap from "./Ext/pivot/d3/HeatMap.js";

export default class EWCPivotheatmap extends Ext_pivot_d3_HeatMap {
    constructor () {
        super( [], [] );
        this.xtype = "pivotheatmap";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotheatmap" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotheatmap", ElementParser.withParsedCallback( EWCPivotheatmap ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotheatmap" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotheatmap", EWCPivotheatmap );
    }
}
