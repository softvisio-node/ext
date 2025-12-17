import ElementParser from "./common/ElementParser.js";
import Ext_field_SingleSlider from "./Ext/field/SingleSlider.js";

export default class EWCSinglesliderfield extends Ext_field_SingleSlider {
    constructor () {
        super( [], [] );
        this.xtype = "singlesliderfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-singlesliderfield" ) == undefined ) {
        globalThis.customElements.define( "ext-singlesliderfield", ElementParser.withParsedCallback( EWCSinglesliderfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-singlesliderfield" ) == undefined ) {
        globalThis.customElements.define( "ext-singlesliderfield", EWCSinglesliderfield );
    }
}
