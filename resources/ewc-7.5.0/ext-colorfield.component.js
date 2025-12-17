import ElementParser from "./common/ElementParser.js";
import Ext_ux_colorpick_Field from "./Ext/ux/colorpick/Field.js";

export default class EWCColorfield extends Ext_ux_colorpick_Field {
    constructor () {
        super( [], [] );
        this.xtype = "colorfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-colorfield" ) == undefined ) {
        globalThis.customElements.define( "ext-colorfield", ElementParser.withParsedCallback( EWCColorfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-colorfield" ) == undefined ) {
        globalThis.customElements.define( "ext-colorfield", EWCColorfield );
    }
}
