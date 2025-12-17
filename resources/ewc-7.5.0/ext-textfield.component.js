import ElementParser from "./common/ElementParser.js";
import Ext_form_Text from "./Ext/form/Text.js";

export default class EWCTextfield extends Ext_form_Text {
    constructor () {
        super( [], [] );
        this.xtype = "textfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-textfield" ) == undefined ) {
        globalThis.customElements.define( "ext-textfield", ElementParser.withParsedCallback( EWCTextfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-textfield" ) == undefined ) {
        globalThis.customElements.define( "ext-textfield", EWCTextfield );
    }
}
