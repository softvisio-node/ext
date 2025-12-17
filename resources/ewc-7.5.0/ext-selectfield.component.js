import ElementParser from "./common/ElementParser.js";
import Ext_form_Select from "./Ext/form/Select.js";

export default class EWCSelectfield extends Ext_form_Select {
    constructor () {
        super( [], [] );
        this.xtype = "selectfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-selectfield" ) == undefined ) {
        globalThis.customElements.define( "ext-selectfield", ElementParser.withParsedCallback( EWCSelectfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-selectfield" ) == undefined ) {
        globalThis.customElements.define( "ext-selectfield", EWCSelectfield );
    }
}
