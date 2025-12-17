import ElementParser from "./common/ElementParser.js";
import Ext_form_Search from "./Ext/form/Search.js";

export default class EWCSearchfield extends Ext_form_Search {
    constructor () {
        super( [], [] );
        this.xtype = "searchfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-searchfield" ) == undefined ) {
        globalThis.customElements.define( "ext-searchfield", ElementParser.withParsedCallback( EWCSearchfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-searchfield" ) == undefined ) {
        globalThis.customElements.define( "ext-searchfield", EWCSearchfield );
    }
}
