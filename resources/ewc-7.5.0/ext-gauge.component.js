import ElementParser from "./common/ElementParser.js";
import Ext_ux_Gauge from "./Ext/ux/Gauge.js";

export default class EWCGauge extends Ext_ux_Gauge {
    constructor () {
        super( [], [] );
        this.xtype = "gauge";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gauge" ) == undefined ) {
        globalThis.customElements.define( "ext-gauge", ElementParser.withParsedCallback( EWCGauge ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gauge" ) == undefined ) {
        globalThis.customElements.define( "ext-gauge", EWCGauge );
    }
}
