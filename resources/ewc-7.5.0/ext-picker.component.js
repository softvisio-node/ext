import ElementParser from "./common/ElementParser.js";
import Ext_Picker from "./Ext/Picker.js";

export default class EWCPicker extends Ext_Picker {
    constructor () {
        super( [], [] );
        this.xtype = "picker";
    }
}
try {
    if ( globalThis.customElements.get( "ext-picker" ) == undefined ) {
        globalThis.customElements.define( "ext-picker", ElementParser.withParsedCallback( EWCPicker ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-picker" ) == undefined ) {
        globalThis.customElements.define( "ext-picker", EWCPicker );
    }
}
