import ElementParser from "./common/ElementParser.js";
import Ext_form_Toggle from "./Ext/form/Toggle.js";

export default class EWCTogglefield extends Ext_form_Toggle {
    constructor () {
        super( [], [] );
        this.xtype = "togglefield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-togglefield" ) == undefined ) {
        globalThis.customElements.define( "ext-togglefield", ElementParser.withParsedCallback( EWCTogglefield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-togglefield" ) == undefined ) {
        globalThis.customElements.define( "ext-togglefield", EWCTogglefield );
    }
}
