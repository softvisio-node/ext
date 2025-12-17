import ElementParser from "./common/ElementParser.js";
import Ext_sparkline_Bar from "./Ext/sparkline/Bar.js";

export default class EWCSparklinebar extends Ext_sparkline_Bar {
    constructor () {
        super( [], [] );
        this.xtype = "sparklinebar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sparklinebar" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinebar", ElementParser.withParsedCallback( EWCSparklinebar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sparklinebar" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinebar", EWCSparklinebar );
    }
}
