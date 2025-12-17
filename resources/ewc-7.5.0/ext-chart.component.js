import ElementParser from "./common/ElementParser.js";
import Ext_chart_Chart from "./Ext/chart/Chart.js";

export default class EWCChart extends Ext_chart_Chart {
    constructor () {
        super( [], [] );
        this.xtype = "chart";
    }
}
try {
    if ( globalThis.customElements.get( "ext-chart" ) == undefined ) {
        globalThis.customElements.define( "ext-chart", ElementParser.withParsedCallback( EWCChart ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-chart" ) == undefined ) {
        globalThis.customElements.define( "ext-chart", EWCChart );
    }
}
