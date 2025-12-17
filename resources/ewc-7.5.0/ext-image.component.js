import ElementParser from "./common/ElementParser.js";
import Ext_Image from "./Ext/Image.js";

export default class EWCImage extends Ext_Image {
    constructor () {
        super( [], [] );
        this.xtype = "image";
    }
}
try {
    if ( globalThis.customElements.get( "ext-image" ) == undefined ) {
        globalThis.customElements.define( "ext-image", ElementParser.withParsedCallback( EWCImage ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-image" ) == undefined ) {
        globalThis.customElements.define( "ext-image", EWCImage );
    }
}
