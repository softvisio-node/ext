import ElementParser from "./common/ElementParser.js";
import Ext_sparkline_Pie from "./Ext/sparkline/Pie.js";

export default class EWCSparklinepie extends Ext_sparkline_Pie {
    constructor () {
        super( [], [] );
        this.xtype = "sparklinepie";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sparklinepie" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinepie", ElementParser.withParsedCallback( EWCSparklinepie ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sparklinepie" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinepie", EWCSparklinepie );
    }
}
