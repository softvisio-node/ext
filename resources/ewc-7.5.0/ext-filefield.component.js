import ElementParser from "./common/ElementParser.js";
import Ext_field_File from "./Ext/field/File.js";

export default class EWCFilefield extends Ext_field_File {
    constructor () {
        super( [], [] );
        this.xtype = "filefield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-filefield" ) == undefined ) {
        globalThis.customElements.define( "ext-filefield", ElementParser.withParsedCallback( EWCFilefield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-filefield" ) == undefined ) {
        globalThis.customElements.define( "ext-filefield", EWCFilefield );
    }
}
