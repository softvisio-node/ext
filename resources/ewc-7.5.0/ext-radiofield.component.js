import ElementParser from "./common/ElementParser.js";
import Ext_form_Radio from "./Ext/form/Radio.js";

export default class EWCRadiofield extends Ext_form_Radio {
    constructor () {
        super( [], [] );
        this.xtype = "radiofield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-radiofield" ) == undefined ) {
        globalThis.customElements.define( "ext-radiofield", ElementParser.withParsedCallback( EWCRadiofield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-radiofield" ) == undefined ) {
        globalThis.customElements.define( "ext-radiofield", EWCRadiofield );
    }
}
