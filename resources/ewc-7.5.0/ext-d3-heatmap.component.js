import ElementParser from "./common/ElementParser.js";
import Ext_d3_HeatMap from "./Ext/d3/HeatMap.js";

export default class EWCD3_heatmap extends Ext_d3_HeatMap {
    constructor () {
        super( [], [] );
        this.xtype = "d3-heatmap";
    }
}
try {
    if ( globalThis.customElements.get( "ext-d3-heatmap" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-heatmap", ElementParser.withParsedCallback( EWCD3_heatmap ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-d3-heatmap" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-heatmap", EWCD3_heatmap );
    }
}
