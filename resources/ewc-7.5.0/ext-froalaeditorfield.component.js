import ElementParser from "./common/ElementParser.js";
import Ext_froala_EditorField from "./Ext/froala/EditorField.js";

export default class EWCFroalaeditorfield extends Ext_froala_EditorField {
    constructor () {
        super( [], [] );
        this.xtype = "froalaeditorfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-froalaeditorfield" ) == undefined ) {
        globalThis.customElements.define( "ext-froalaeditorfield", ElementParser.withParsedCallback( EWCFroalaeditorfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-froalaeditorfield" ) == undefined ) {
        globalThis.customElements.define( "ext-froalaeditorfield", EWCFroalaeditorfield );
    }
}
