import ElementParser from "./common/ElementParser.js";
import Ext_Editor from "./Ext/Editor.js";

export default class EWCEditor extends Ext_Editor {
    constructor () {
        super( [], [] );
        this.xtype = "editor";
    }
}
try {
    if ( globalThis.customElements.get( "ext-editor" ) == undefined ) {
        globalThis.customElements.define( "ext-editor", ElementParser.withParsedCallback( EWCEditor ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-editor" ) == undefined ) {
        globalThis.customElements.define( "ext-editor", EWCEditor );
    }
}
