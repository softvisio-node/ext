import ElementParser from "./common/ElementParser.js";
import Ext_form_field_ComboBox from "./Ext/form/field/ComboBox.js";

export default class EWCCombobox extends Ext_form_field_ComboBox {
    constructor () {
        super( [], [] );
        this.xtype = "combobox";
    }
}
try {
    if ( globalThis.customElements.get( "ext-combobox" ) == undefined ) {
        globalThis.customElements.define( "ext-combobox", ElementParser.withParsedCallback( EWCCombobox ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-combobox" ) == undefined ) {
        globalThis.customElements.define( "ext-combobox", EWCCombobox );
    }
}
