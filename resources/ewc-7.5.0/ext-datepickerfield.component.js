import ElementParser from "./common/ElementParser.js";
import Ext_field_DatePicker from "./Ext/field/DatePicker.js";

export default class EWCDatepickerfield extends Ext_field_DatePicker {
    constructor () {
        super( [], [] );
        this.xtype = "datepickerfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-datepickerfield" ) == undefined ) {
        globalThis.customElements.define( "ext-datepickerfield", ElementParser.withParsedCallback( EWCDatepickerfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-datepickerfield" ) == undefined ) {
        globalThis.customElements.define( "ext-datepickerfield", EWCDatepickerfield );
    }
}
