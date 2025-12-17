import ElementParser from "./common/ElementParser.js";
import Ext_viewport_Default from "./Ext/viewport/Default.js";

export default class EWCViewport extends Ext_viewport_Default {
    constructor () {
        super( [], [] );
        this.xtype = "viewport";
    }
}
try {
    if ( globalThis.customElements.get( "ext-viewport" ) == undefined ) {
        globalThis.customElements.define( "ext-viewport", ElementParser.withParsedCallback( EWCViewport ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-viewport" ) == undefined ) {
        globalThis.customElements.define( "ext-viewport", EWCViewport );
    }
}
