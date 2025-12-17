import ElementParser from "./common/ElementParser.js";
import Ext_form_Email from "./Ext/form/Email.js";

export default class EWCEmailfield extends Ext_form_Email {
    constructor () {
        super( [], [] );
        this.xtype = "emailfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-emailfield" ) == undefined ) {
        globalThis.customElements.define( "ext-emailfield", ElementParser.withParsedCallback( EWCEmailfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-emailfield" ) == undefined ) {
        globalThis.customElements.define( "ext-emailfield", EWCEmailfield );
    }
}
