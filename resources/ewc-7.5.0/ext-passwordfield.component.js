import ElementParser from "./common/ElementParser.js";
import Ext_form_Password from "./Ext/form/Password.js";

export default class EWCPasswordfield extends Ext_form_Password {
    constructor () {
        super( [], [] );
        this.xtype = "passwordfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-passwordfield" ) == undefined ) {
        globalThis.customElements.define( "ext-passwordfield", ElementParser.withParsedCallback( EWCPasswordfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-passwordfield" ) == undefined ) {
        globalThis.customElements.define( "ext-passwordfield", EWCPasswordfield );
    }
}
