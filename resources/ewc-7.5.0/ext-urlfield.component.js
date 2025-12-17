import ElementParser from "./common/ElementParser.js";
import Ext_form_Url from "./Ext/form/Url.js";

export default class EWCUrlfield extends Ext_form_Url {
    constructor () {
        super( [], [] );
        this.xtype = "urlfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-urlfield" ) == undefined ) {
        globalThis.customElements.define( "ext-urlfield", ElementParser.withParsedCallback( EWCUrlfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-urlfield" ) == undefined ) {
        globalThis.customElements.define( "ext-urlfield", EWCUrlfield );
    }
}
