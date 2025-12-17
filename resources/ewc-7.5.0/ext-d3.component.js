import ElementParser from "./common/ElementParser.js";
import Ext_d3_svg_Svg from "./Ext/d3/svg/Svg.js";

export default class EWCD3 extends Ext_d3_svg_Svg {
    constructor () {
        super( [], [] );
        this.xtype = "d3";
    }
}
try {
    if ( globalThis.customElements.get( "ext-d3" ) == undefined ) {
        globalThis.customElements.define( "ext-d3", ElementParser.withParsedCallback( EWCD3 ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-d3" ) == undefined ) {
        globalThis.customElements.define( "ext-d3", EWCD3 );
    }
}
