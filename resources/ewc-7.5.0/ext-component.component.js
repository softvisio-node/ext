import ElementParser from "./common/ElementParser.js";
import Ext_Gadget from "./Ext/Gadget.js";

export default class EWCComponent extends Ext_Gadget {
    constructor () {
        super( [], [] );
        this.xtype = "component";
    }
}
try {
    if ( globalThis.customElements.get( "ext-component" ) == undefined ) {
        globalThis.customElements.define( "ext-component", ElementParser.withParsedCallback( EWCComponent ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-component" ) == undefined ) {
        globalThis.customElements.define( "ext-component", EWCComponent );
    }
}
