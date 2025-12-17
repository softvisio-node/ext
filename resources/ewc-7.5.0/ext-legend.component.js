import ElementParser from "./common/ElementParser.js";
import Ext_chart_Legend from "./Ext/chart/Legend.js";

export default class EWCLegend extends Ext_chart_Legend {
    constructor () {
        super( [], [] );
        this.xtype = "legend";
    }
}
try {
    if ( globalThis.customElements.get( "ext-legend" ) == undefined ) {
        globalThis.customElements.define( "ext-legend", ElementParser.withParsedCallback( EWCLegend ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-legend" ) == undefined ) {
        globalThis.customElements.define( "ext-legend", EWCLegend );
    }
}
