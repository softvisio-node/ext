import ElementParser from "./common/ElementParser.js";
import Ext_Indicator from "./Ext/Indicator.js";

export default class EWCIndicator extends Ext_Indicator {
    constructor () {
        super( [], [] );
        this.xtype = "indicator";
    }
}
try {
    if ( globalThis.customElements.get( "ext-indicator" ) == undefined ) {
        globalThis.customElements.define( "ext-indicator", ElementParser.withParsedCallback( EWCIndicator ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-indicator" ) == undefined ) {
        globalThis.customElements.define( "ext-indicator", EWCIndicator );
    }
}
