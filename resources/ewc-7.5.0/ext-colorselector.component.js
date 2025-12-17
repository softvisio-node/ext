import ElementParser from "./common/ElementParser.js";
import Ext_ux_colorpick_Selector from "./Ext/ux/colorpick/Selector.js";

export default class EWCColorselector extends Ext_ux_colorpick_Selector {
    constructor () {
        super( [], [] );
        this.xtype = "colorselector";
    }
}
try {
    if ( globalThis.customElements.get( "ext-colorselector" ) == undefined ) {
        globalThis.customElements.define( "ext-colorselector", ElementParser.withParsedCallback( EWCColorselector ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-colorselector" ) == undefined ) {
        globalThis.customElements.define( "ext-colorselector", EWCColorselector );
    }
}
