import ElementParser from "./common/ElementParser.js";
import Ext_draw_Surface from "./Ext/draw/Surface.js";

export default class EWCSurface extends Ext_draw_Surface {
    constructor () {
        super( [], [] );
        this.xtype = "surface";
    }
}
try {
    if ( globalThis.customElements.get( "ext-surface" ) == undefined ) {
        globalThis.customElements.define( "ext-surface", ElementParser.withParsedCallback( EWCSurface ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-surface" ) == undefined ) {
        globalThis.customElements.define( "ext-surface", EWCSurface );
    }
}
