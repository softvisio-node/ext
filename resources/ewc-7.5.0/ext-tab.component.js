import ElementParser from "./common/ElementParser.js";
import Ext_Tab from "./Ext/Tab.js";

export default class EWCTab extends Ext_Tab {
    constructor () {
        super( [], [] );
        this.xtype = "tab";
    }
}
try {
    if ( globalThis.customElements.get( "ext-tab" ) == undefined ) {
        globalThis.customElements.define( "ext-tab", ElementParser.withParsedCallback( EWCTab ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-tab" ) == undefined ) {
        globalThis.customElements.define( "ext-tab", EWCTab );
    }
}
