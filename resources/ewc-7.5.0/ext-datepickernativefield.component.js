import ElementParser from "./common/ElementParser.js";
import Ext_form_DatePickerNative from "./Ext/form/DatePickerNative.js";

export default class EWCDatepickernativefield extends Ext_form_DatePickerNative {
    constructor () {
        super( [], [] );
        this.xtype = "datepickernativefield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-datepickernativefield" ) == undefined ) {
        globalThis.customElements.define( "ext-datepickernativefield", ElementParser.withParsedCallback( EWCDatepickernativefield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-datepickernativefield" ) == undefined ) {
        globalThis.customElements.define( "ext-datepickernativefield", EWCDatepickernativefield );
    }
}
