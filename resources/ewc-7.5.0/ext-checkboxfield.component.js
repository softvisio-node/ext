import ElementParser from "./common/ElementParser.js";
import Ext_form_Checkbox from "./Ext/form/Checkbox.js";

export default class EWCCheckboxfield extends Ext_form_Checkbox {
    constructor () {
        super( [], [] );
        this.xtype = "checkboxfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-checkboxfield" ) == undefined ) {
        globalThis.customElements.define( "ext-checkboxfield", ElementParser.withParsedCallback( EWCCheckboxfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-checkboxfield" ) == undefined ) {
        globalThis.customElements.define( "ext-checkboxfield", EWCCheckboxfield );
    }
}
