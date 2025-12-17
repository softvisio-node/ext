import ElementParser from "./common/ElementParser.js";
import Ext_field_FileButton from "./Ext/field/FileButton.js";

export default class EWCFilebutton extends Ext_field_FileButton {
    constructor () {
        super( [], [] );
        this.xtype = "filebutton";
    }
}
try {
    if ( globalThis.customElements.get( "ext-filebutton" ) == undefined ) {
        globalThis.customElements.define( "ext-filebutton", ElementParser.withParsedCallback( EWCFilebutton ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-filebutton" ) == undefined ) {
        globalThis.customElements.define( "ext-filebutton", EWCFilebutton );
    }
}
