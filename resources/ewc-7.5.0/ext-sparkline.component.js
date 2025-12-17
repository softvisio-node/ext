import ElementParser from "./common/ElementParser.js";
import Ext_sparkline_Base from "./Ext/sparkline/Base.js";

export default class EWCSparkline extends Ext_sparkline_Base {
    constructor () {
        super( [], [] );
        this.xtype = "sparkline";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sparkline" ) == undefined ) {
        globalThis.customElements.define( "ext-sparkline", ElementParser.withParsedCallback( EWCSparkline ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sparkline" ) == undefined ) {
        globalThis.customElements.define( "ext-sparkline", EWCSparkline );
    }
}
