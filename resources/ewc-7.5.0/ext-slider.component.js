import ElementParser from "./common/ElementParser.js";
import Ext_slider_Slider from "./Ext/slider/Slider.js";

export default class EWCSlider extends Ext_slider_Slider {
    constructor () {
        super( [], [] );
        this.xtype = "slider";
    }
}
try {
    if ( globalThis.customElements.get( "ext-slider" ) == undefined ) {
        globalThis.customElements.define( "ext-slider", ElementParser.withParsedCallback( EWCSlider ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-slider" ) == undefined ) {
        globalThis.customElements.define( "ext-slider", EWCSlider );
    }
}
