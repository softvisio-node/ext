import ElementParser from "./common/ElementParser.js";
import Ext_form_Checkbox from "./Ext/form/Checkbox.js";

export default class EWCCheckbox extends Ext_form_Checkbox {
    constructor () {
        super( [], [] );
        this.xtype = "checkbox";
    }
}
try {
    if ( globalThis.customElements.get( "ext-checkbox" ) == undefined ) {
        globalThis.customElements.define( "ext-checkbox", ElementParser.withParsedCallback( EWCCheckbox ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-checkbox" ) == undefined ) {
        globalThis.customElements.define( "ext-checkbox", EWCCheckbox );
    }
}
