import ElementParser from "./common/ElementParser.js";
import Ext_DatePicker from "./Ext/DatePicker.js";

export default class EWCDatepicker extends Ext_DatePicker {
    constructor () {
        super( [], [] );
        this.xtype = "datepicker";
    }
}
try {
    if ( globalThis.customElements.get( "ext-datepicker" ) == undefined ) {
        globalThis.customElements.define( "ext-datepicker", ElementParser.withParsedCallback( EWCDatepicker ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-datepicker" ) == undefined ) {
        globalThis.customElements.define( "ext-datepicker", EWCDatepicker );
    }
}
