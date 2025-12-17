import ElementParser from "./common/ElementParser.js";
import Ext_LoadMask from "./Ext/LoadMask.js";

export default class EWCLoadmask extends Ext_LoadMask {
    constructor () {
        super( [], [] );
        this.xtype = "loadmask";
    }
}
try {
    if ( globalThis.customElements.get( "ext-loadmask" ) == undefined ) {
        globalThis.customElements.define( "ext-loadmask", ElementParser.withParsedCallback( EWCLoadmask ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-loadmask" ) == undefined ) {
        globalThis.customElements.define( "ext-loadmask", EWCLoadmask );
    }
}
