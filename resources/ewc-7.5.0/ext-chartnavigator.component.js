import ElementParser from "./common/ElementParser.js";
import Ext_chart_navigator_Container from "./Ext/chart/navigator/Container.js";

export default class EWCChartnavigator extends Ext_chart_navigator_Container {
    constructor () {
        super( [], [] );
        this.xtype = "chartnavigator";
    }
}
try {
    if ( globalThis.customElements.get( "ext-chartnavigator" ) == undefined ) {
        globalThis.customElements.define( "ext-chartnavigator", ElementParser.withParsedCallback( EWCChartnavigator ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-chartnavigator" ) == undefined ) {
        globalThis.customElements.define( "ext-chartnavigator", EWCChartnavigator );
    }
}
