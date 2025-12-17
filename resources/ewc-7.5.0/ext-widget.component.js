import ElementParser from "./common/ElementParser.js";
import Ext_Gadget from "./Ext/Gadget.js";

export default class EWCWidget extends Ext_Gadget {
    constructor () {
        super( [], [] );
        this.xtype = "widget";
    }
}
try {
    if ( globalThis.customElements.get( "ext-widget" ) == undefined ) {
        globalThis.customElements.define( "ext-widget", ElementParser.withParsedCallback( EWCWidget ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-widget" ) == undefined ) {
        globalThis.customElements.define( "ext-widget", EWCWidget );
    }
}
