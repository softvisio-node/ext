import ElementParser from "./common/ElementParser.js";
import Ext_form_Hidden from "./Ext/form/Hidden.js";

export default class EWCHiddenfield extends Ext_form_Hidden {
    constructor () {
        super( [], [] );
        this.xtype = "hiddenfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-hiddenfield" ) == undefined ) {
        globalThis.customElements.define( "ext-hiddenfield", ElementParser.withParsedCallback( EWCHiddenfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-hiddenfield" ) == undefined ) {
        globalThis.customElements.define( "ext-hiddenfield", EWCHiddenfield );
    }
}
