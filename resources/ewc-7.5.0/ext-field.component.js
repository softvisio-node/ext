import ElementParser from "./common/ElementParser.js";
import Ext_form_Field from "./Ext/form/Field.js";

export default class EWCField extends Ext_form_Field {
    constructor () {
        super( [], [] );
        this.xtype = "field";
    }
}
try {
    if ( globalThis.customElements.get( "ext-field" ) == undefined ) {
        globalThis.customElements.define( "ext-field", ElementParser.withParsedCallback( EWCField ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-field" ) == undefined ) {
        globalThis.customElements.define( "ext-field", EWCField );
    }
}
