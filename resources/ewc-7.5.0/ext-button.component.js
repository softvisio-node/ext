import ElementParser from "./common/ElementParser.js";
import Ext_Button from "./Ext/Button.js";

export default class EWCButton extends Ext_Button {
    constructor () {
        super( [], [] );
        this.xtype = "button";
    }
}
try {
    if ( globalThis.customElements.get( "ext-button" ) == undefined ) {
        globalThis.customElements.define( "ext-button", ElementParser.withParsedCallback( EWCButton ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-button" ) == undefined ) {
        globalThis.customElements.define( "ext-button", EWCButton );
    }
}
