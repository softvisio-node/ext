import ElementParser from "./common/ElementParser.js";
import Ext_field_DatePicker from "./Ext/field/DatePicker.js";

export default class EWCDatefield extends Ext_field_DatePicker {
    constructor () {
        super( [], [] );
        this.xtype = "datefield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-datefield" ) == undefined ) {
        globalThis.customElements.define( "ext-datefield", ElementParser.withParsedCallback( EWCDatefield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-datefield" ) == undefined ) {
        globalThis.customElements.define( "ext-datefield", EWCDatefield );
    }
}
