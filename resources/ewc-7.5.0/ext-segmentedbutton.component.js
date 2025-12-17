import ElementParser from "./common/ElementParser.js";
import Ext_button_Segmented from "./Ext/button/Segmented.js";

export default class EWCSegmentedbutton extends Ext_button_Segmented {
    constructor () {
        super( [], [] );
        this.xtype = "segmentedbutton";
    }
}
try {
    if ( globalThis.customElements.get( "ext-segmentedbutton" ) == undefined ) {
        globalThis.customElements.define( "ext-segmentedbutton", ElementParser.withParsedCallback( EWCSegmentedbutton ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-segmentedbutton" ) == undefined ) {
        globalThis.customElements.define( "ext-segmentedbutton", EWCSegmentedbutton );
    }
}
