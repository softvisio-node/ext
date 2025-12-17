import ElementParser from "./common/ElementParser.js";
import Ext_SplitButton from "./Ext/SplitButton.js";

export default class EWCSplitbutton extends Ext_SplitButton {
    constructor () {
        super( [], [] );
        this.xtype = "splitbutton";
    }
}
try {
    if ( globalThis.customElements.get( "ext-splitbutton" ) == undefined ) {
        globalThis.customElements.define( "ext-splitbutton", ElementParser.withParsedCallback( EWCSplitbutton ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-splitbutton" ) == undefined ) {
        globalThis.customElements.define( "ext-splitbutton", EWCSplitbutton );
    }
}
