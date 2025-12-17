import ElementParser from "./common/ElementParser.js";
import Ext_slider_Thumb from "./Ext/slider/Thumb.js";

export default class EWCThumb extends Ext_slider_Thumb {
    constructor () {
        super( [], [] );
        this.xtype = "thumb";
    }
}
try {
    if ( globalThis.customElements.get( "ext-thumb" ) == undefined ) {
        globalThis.customElements.define( "ext-thumb", ElementParser.withParsedCallback( EWCThumb ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-thumb" ) == undefined ) {
        globalThis.customElements.define( "ext-thumb", EWCThumb );
    }
}
