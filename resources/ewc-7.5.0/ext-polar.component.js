import ElementParser from "./common/ElementParser.js";
import Ext_chart_PolarChart from "./Ext/chart/PolarChart.js";

export default class EWCPolar extends Ext_chart_PolarChart {
    constructor () {
        super( [], [] );
        this.xtype = "polar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-polar" ) == undefined ) {
        globalThis.customElements.define( "ext-polar", ElementParser.withParsedCallback( EWCPolar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-polar" ) == undefined ) {
        globalThis.customElements.define( "ext-polar", EWCPolar );
    }
}
