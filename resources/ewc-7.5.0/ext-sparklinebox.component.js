import ElementParser from "./common/ElementParser.js";
import Ext_sparkline_Box from "./Ext/sparkline/Box.js";

export default class EWCSparklinebox extends Ext_sparkline_Box {
    constructor () {
        super( [], [] );
        this.xtype = "sparklinebox";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sparklinebox" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinebox", ElementParser.withParsedCallback( EWCSparklinebox ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sparklinebox" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinebox", EWCSparklinebox );
    }
}
