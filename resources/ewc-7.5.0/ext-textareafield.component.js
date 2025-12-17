import ElementParser from "./common/ElementParser.js";
import Ext_form_TextArea from "./Ext/form/TextArea.js";

export default class EWCTextareafield extends Ext_form_TextArea {
    constructor () {
        super( [], [] );
        this.xtype = "textareafield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-textareafield" ) == undefined ) {
        globalThis.customElements.define( "ext-textareafield", ElementParser.withParsedCallback( EWCTextareafield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-textareafield" ) == undefined ) {
        globalThis.customElements.define( "ext-textareafield", EWCTextareafield );
    }
}
