import ElementParser from "./common/ElementParser.js";
import Ext_Image from "./Ext/Image.js";

export default class EWCImg extends Ext_Image {
    constructor () {
        super( [], [] );
        this.xtype = "img";
    }
}
try {
    if ( globalThis.customElements.get( "ext-img" ) == undefined ) {
        globalThis.customElements.define( "ext-img", ElementParser.withParsedCallback( EWCImg ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-img" ) == undefined ) {
        globalThis.customElements.define( "ext-img", EWCImg );
    }
}
