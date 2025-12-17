import ElementParser from "./common/ElementParser.js";
import Ext_ux_colorpick_ColorPreview from "./Ext/ux/colorpick/ColorPreview.js";

export default class EWCColorpickercolorpreview extends Ext_ux_colorpick_ColorPreview {
    constructor () {
        super( [], [] );
        this.xtype = "colorpickercolorpreview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-colorpickercolorpreview" ) == undefined ) {
        globalThis.customElements.define( "ext-colorpickercolorpreview", ElementParser.withParsedCallback( EWCColorpickercolorpreview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-colorpickercolorpreview" ) == undefined ) {
        globalThis.customElements.define( "ext-colorpickercolorpreview", EWCColorpickercolorpreview );
    }
}
