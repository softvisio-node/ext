import ElementParser from "./common/ElementParser.js";
import Ext_chart_SpaceFillingChart from "./Ext/chart/SpaceFillingChart.js";

export default class EWCSpacefilling extends Ext_chart_SpaceFillingChart {
    constructor () {
        super( [], [] );
        this.xtype = "spacefilling";
    }
}
try {
    if ( globalThis.customElements.get( "ext-spacefilling" ) == undefined ) {
        globalThis.customElements.define( "ext-spacefilling", ElementParser.withParsedCallback( EWCSpacefilling ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-spacefilling" ) == undefined ) {
        globalThis.customElements.define( "ext-spacefilling", EWCSpacefilling );
    }
}
