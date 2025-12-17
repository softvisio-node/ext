import ElementParser from "./common/ElementParser.js";
import Ext_form_Slider from "./Ext/form/Slider.js";

export default class EWCSliderfield extends Ext_form_Slider {
    constructor () {
        super( [], [] );
        this.xtype = "sliderfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sliderfield" ) == undefined ) {
        globalThis.customElements.define( "ext-sliderfield", ElementParser.withParsedCallback( EWCSliderfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sliderfield" ) == undefined ) {
        globalThis.customElements.define( "ext-sliderfield", EWCSliderfield );
    }
}
