import ElementParser from "./common/ElementParser.js";
import Ext_form_field_ComboBox from "./Ext/form/field/ComboBox.js";

export default class EWCComboboxfield extends Ext_form_field_ComboBox {
    constructor () {
        super( [], [] );
        this.xtype = "comboboxfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-comboboxfield" ) == undefined ) {
        globalThis.customElements.define( "ext-comboboxfield", ElementParser.withParsedCallback( EWCComboboxfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-comboboxfield" ) == undefined ) {
        globalThis.customElements.define( "ext-comboboxfield", EWCComboboxfield );
    }
}
