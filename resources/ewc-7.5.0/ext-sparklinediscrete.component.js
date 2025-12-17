import ElementParser from "./common/ElementParser.js";
import Ext_sparkline_Discrete from "./Ext/sparkline/Discrete.js";

export default class EWCSparklinediscrete extends Ext_sparkline_Discrete {
    constructor () {
        super( [], [] );
        this.xtype = "sparklinediscrete";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sparklinediscrete" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinediscrete", ElementParser.withParsedCallback( EWCSparklinediscrete ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sparklinediscrete" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinediscrete", EWCSparklinediscrete );
    }
}
