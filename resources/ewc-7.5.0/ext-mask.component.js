import ElementParser from "./common/ElementParser.js";
import Ext_Mask from "./Ext/Mask.js";

export default class EWCMask extends Ext_Mask {
    constructor () {
        super( [], [] );
        this.xtype = "mask";
    }
}
try {
    if ( globalThis.customElements.get( "ext-mask" ) == undefined ) {
        globalThis.customElements.define( "ext-mask", ElementParser.withParsedCallback( EWCMask ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-mask" ) == undefined ) {
        globalThis.customElements.define( "ext-mask", EWCMask );
    }
}
