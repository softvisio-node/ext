import ElementParser from "./common/ElementParser.js";
import Ext_slider_Toggle from "./Ext/slider/Toggle.js";

export default class EWCToggleslider extends Ext_slider_Toggle {
    constructor () {
        super( [], [] );
        this.xtype = "toggleslider";
    }
}
try {
    if ( globalThis.customElements.get( "ext-toggleslider" ) == undefined ) {
        globalThis.customElements.define( "ext-toggleslider", ElementParser.withParsedCallback( EWCToggleslider ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-toggleslider" ) == undefined ) {
        globalThis.customElements.define( "ext-toggleslider", EWCToggleslider );
    }
}
