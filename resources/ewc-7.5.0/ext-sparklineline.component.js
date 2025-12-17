import ElementParser from "./common/ElementParser.js";
import Ext_sparkline_Line from "./Ext/sparkline/Line.js";

export default class EWCSparklineline extends Ext_sparkline_Line {
    constructor () {
        super( [], [] );
        this.xtype = "sparklineline";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sparklineline" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklineline", ElementParser.withParsedCallback( EWCSparklineline ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sparklineline" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklineline", EWCSparklineline );
    }
}
