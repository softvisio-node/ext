import ElementParser from "./common/ElementParser.js";
import Ext_form_Number from "./Ext/form/Number.js";

export default class EWCNumberfield extends Ext_form_Number {
    constructor () {
        super( [], [] );
        this.xtype = "numberfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-numberfield" ) == undefined ) {
        globalThis.customElements.define( "ext-numberfield", ElementParser.withParsedCallback( EWCNumberfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-numberfield" ) == undefined ) {
        globalThis.customElements.define( "ext-numberfield", EWCNumberfield );
    }
}
