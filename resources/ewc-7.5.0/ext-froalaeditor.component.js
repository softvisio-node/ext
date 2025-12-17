import ElementParser from "./common/ElementParser.js";
import Ext_froala_Editor from "./Ext/froala/Editor.js";

export default class EWCFroalaeditor extends Ext_froala_Editor {
    constructor () {
        super( [], [] );
        this.xtype = "froalaeditor";
    }
}
try {
    if ( globalThis.customElements.get( "ext-froalaeditor" ) == undefined ) {
        globalThis.customElements.define( "ext-froalaeditor", ElementParser.withParsedCallback( EWCFroalaeditor ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-froalaeditor" ) == undefined ) {
        globalThis.customElements.define( "ext-froalaeditor", EWCFroalaeditor );
    }
}
