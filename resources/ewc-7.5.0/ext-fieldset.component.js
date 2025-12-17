import ElementParser from "./common/ElementParser.js";
import Ext_form_FieldSet from "./Ext/form/FieldSet.js";

export default class EWCFieldset extends Ext_form_FieldSet {
    constructor () {
        super( [], [] );
        this.xtype = "fieldset";
    }
}
try {
    if ( globalThis.customElements.get( "ext-fieldset" ) == undefined ) {
        globalThis.customElements.define( "ext-fieldset", ElementParser.withParsedCallback( EWCFieldset ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-fieldset" ) == undefined ) {
        globalThis.customElements.define( "ext-fieldset", EWCFieldset );
    }
}
