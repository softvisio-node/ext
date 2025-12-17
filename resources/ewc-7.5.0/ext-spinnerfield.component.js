import ElementParser from "./common/ElementParser.js";
import Ext_form_Spinner from "./Ext/form/Spinner.js";

export default class EWCSpinnerfield extends Ext_form_Spinner {
    constructor () {
        super( [], [] );
        this.xtype = "spinnerfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-spinnerfield" ) == undefined ) {
        globalThis.customElements.define( "ext-spinnerfield", ElementParser.withParsedCallback( EWCSpinnerfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-spinnerfield" ) == undefined ) {
        globalThis.customElements.define( "ext-spinnerfield", EWCSpinnerfield );
    }
}
