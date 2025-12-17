import ElementParser from "./common/ElementParser.js";
import Ext_field_Input from "./Ext/field/Input.js";

export default class EWCInputfield extends Ext_field_Input {
    constructor () {
        super( [], [] );
        this.xtype = "inputfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-inputfield" ) == undefined ) {
        globalThis.customElements.define( "ext-inputfield", ElementParser.withParsedCallback( EWCInputfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-inputfield" ) == undefined ) {
        globalThis.customElements.define( "ext-inputfield", EWCInputfield );
    }
}
