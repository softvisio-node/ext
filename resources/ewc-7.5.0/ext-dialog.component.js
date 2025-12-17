import ElementParser from "./common/ElementParser.js";
import Ext_window_Window from "./Ext/window/Window.js";

export default class EWCDialog extends Ext_window_Window {
    constructor () {
        super( [], [] );
        this.xtype = "dialog";
    }
}
try {
    if ( globalThis.customElements.get( "ext-dialog" ) == undefined ) {
        globalThis.customElements.define( "ext-dialog", ElementParser.withParsedCallback( EWCDialog ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-dialog" ) == undefined ) {
        globalThis.customElements.define( "ext-dialog", EWCDialog );
    }
}
