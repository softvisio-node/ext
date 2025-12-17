import ElementParser from "./common/ElementParser.js";
import Ext_picker_Slot from "./Ext/picker/Slot.js";

export default class EWCPickerslot extends Ext_picker_Slot {
    constructor () {
        super( [], [] );
        this.xtype = "pickerslot";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pickerslot" ) == undefined ) {
        globalThis.customElements.define( "ext-pickerslot", ElementParser.withParsedCallback( EWCPickerslot ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pickerslot" ) == undefined ) {
        globalThis.customElements.define( "ext-pickerslot", EWCPickerslot );
    }
}
