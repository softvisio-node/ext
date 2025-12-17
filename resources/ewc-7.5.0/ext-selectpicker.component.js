import ElementParser from "./common/ElementParser.js";
import Ext_picker_SelectPicker from "./Ext/picker/SelectPicker.js";

export default class EWCSelectpicker extends Ext_picker_SelectPicker {
    constructor () {
        super( [], [] );
        this.xtype = "selectpicker";
    }
}
try {
    if ( globalThis.customElements.get( "ext-selectpicker" ) == undefined ) {
        globalThis.customElements.define( "ext-selectpicker", ElementParser.withParsedCallback( EWCSelectpicker ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-selectpicker" ) == undefined ) {
        globalThis.customElements.define( "ext-selectpicker", EWCSelectpicker );
    }
}
