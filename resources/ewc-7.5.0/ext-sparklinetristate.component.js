import ElementParser from "./common/ElementParser.js";
import Ext_sparkline_TriState from "./Ext/sparkline/TriState.js";

export default class EWCSparklinetristate extends Ext_sparkline_TriState {
    constructor () {
        super( [], [] );
        this.xtype = "sparklinetristate";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sparklinetristate" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinetristate", ElementParser.withParsedCallback( EWCSparklinetristate ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sparklinetristate" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinetristate", EWCSparklinetristate );
    }
}
