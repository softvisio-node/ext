import ElementParser from "./common/ElementParser.js";
import Ext_ux_colorpick_Button from "./Ext/ux/colorpick/Button.js";

export default class EWCColorbutton extends Ext_ux_colorpick_Button {
    constructor () {
        super( [], [] );
        this.xtype = "colorbutton";
    }
}
try {
    if ( globalThis.customElements.get( "ext-colorbutton" ) == undefined ) {
        globalThis.customElements.define( "ext-colorbutton", ElementParser.withParsedCallback( EWCColorbutton ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-colorbutton" ) == undefined ) {
        globalThis.customElements.define( "ext-colorbutton", EWCColorbutton );
    }
}
