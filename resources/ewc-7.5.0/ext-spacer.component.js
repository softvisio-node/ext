import ElementParser from "./common/ElementParser.js";
import Ext_Spacer from "./Ext/Spacer.js";

export default class EWCSpacer extends Ext_Spacer {
    constructor () {
        super( [], [] );
        this.xtype = "spacer";
    }
}
try {
    if ( globalThis.customElements.get( "ext-spacer" ) == undefined ) {
        globalThis.customElements.define( "ext-spacer", ElementParser.withParsedCallback( EWCSpacer ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-spacer" ) == undefined ) {
        globalThis.customElements.define( "ext-spacer", EWCSpacer );
    }
}
