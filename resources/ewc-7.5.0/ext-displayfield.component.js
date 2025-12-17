import ElementParser from "./common/ElementParser.js";
import Ext_form_Display from "./Ext/form/Display.js";

export default class EWCDisplayfield extends Ext_form_Display {
    constructor () {
        super( [], [] );
        this.xtype = "displayfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-displayfield" ) == undefined ) {
        globalThis.customElements.define( "ext-displayfield", ElementParser.withParsedCallback( EWCDisplayfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-displayfield" ) == undefined ) {
        globalThis.customElements.define( "ext-displayfield", EWCDisplayfield );
    }
}
