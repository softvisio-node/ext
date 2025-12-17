import ElementParser from "./common/ElementParser.js";
import Ext_MessageBox from "./Ext/MessageBox.js";

export default class EWCMessagebox extends Ext_MessageBox {
    constructor () {
        super( [], [] );
        this.xtype = "messagebox";
    }
}
try {
    if ( globalThis.customElements.get( "ext-messagebox" ) == undefined ) {
        globalThis.customElements.define( "ext-messagebox", ElementParser.withParsedCallback( EWCMessagebox ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-messagebox" ) == undefined ) {
        globalThis.customElements.define( "ext-messagebox", EWCMessagebox );
    }
}
