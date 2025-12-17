import ElementParser from "./common/ElementParser.js";
import Ext_IndexBar from "./Ext/IndexBar.js";

export default class EWCIndexbar extends Ext_IndexBar {
    constructor () {
        super( [], [] );
        this.xtype = "indexbar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-indexbar" ) == undefined ) {
        globalThis.customElements.define( "ext-indexbar", ElementParser.withParsedCallback( EWCIndexbar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-indexbar" ) == undefined ) {
        globalThis.customElements.define( "ext-indexbar", EWCIndexbar );
    }
}
