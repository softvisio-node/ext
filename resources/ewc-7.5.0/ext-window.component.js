import ElementParser from "./common/ElementParser.js";
import Ext_window_Window from "./Ext/window/Window.js";

export default class EWCWindow extends Ext_window_Window {
    constructor () {
        super( [], [] );
        this.xtype = "window";
    }
}
try {
    if ( globalThis.customElements.get( "ext-window" ) == undefined ) {
        globalThis.customElements.define( "ext-window", ElementParser.withParsedCallback( EWCWindow ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-window" ) == undefined ) {
        globalThis.customElements.define( "ext-window", EWCWindow );
    }
}
