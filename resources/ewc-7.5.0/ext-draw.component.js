import ElementParser from "./common/ElementParser.js";
import Ext_draw_Component from "./Ext/draw/Component.js";

export default class EWCDraw extends Ext_draw_Component {
    constructor () {
        super( [], [] );
        this.xtype = "draw";
    }
}
try {
    if ( globalThis.customElements.get( "ext-draw" ) == undefined ) {
        globalThis.customElements.define( "ext-draw", ElementParser.withParsedCallback( EWCDraw ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-draw" ) == undefined ) {
        globalThis.customElements.define( "ext-draw", EWCDraw );
    }
}
