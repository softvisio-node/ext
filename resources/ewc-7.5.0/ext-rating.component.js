import ElementParser from "./common/ElementParser.js";
import Ext_ux_rating_Picker from "./Ext/ux/rating/Picker.js";

export default class EWCRating extends Ext_ux_rating_Picker {
    constructor () {
        super( [], [] );
        this.xtype = "rating";
    }
}
try {
    if ( globalThis.customElements.get( "ext-rating" ) == undefined ) {
        globalThis.customElements.define( "ext-rating", ElementParser.withParsedCallback( EWCRating ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-rating" ) == undefined ) {
        globalThis.customElements.define( "ext-rating", EWCRating );
    }
}
