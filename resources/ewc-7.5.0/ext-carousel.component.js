import ElementParser from "./common/ElementParser.js";
import Ext_Carousel from "./Ext/Carousel.js";

export default class EWCCarousel extends Ext_Carousel {
    constructor () {
        super( [], [] );
        this.xtype = "carousel";
    }
}
try {
    if ( globalThis.customElements.get( "ext-carousel" ) == undefined ) {
        globalThis.customElements.define( "ext-carousel", ElementParser.withParsedCallback( EWCCarousel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-carousel" ) == undefined ) {
        globalThis.customElements.define( "ext-carousel", EWCCarousel );
    }
}
