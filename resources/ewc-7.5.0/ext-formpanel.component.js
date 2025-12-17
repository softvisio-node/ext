import ElementParser from "./common/ElementParser.js";
import Ext_form_FormPanel from "./Ext/form/FormPanel.js";

export default class EWCFormpanel extends Ext_form_FormPanel {
    constructor () {
        super( [], [] );
        this.xtype = "formpanel";
    }
}
try {
    if ( globalThis.customElements.get( "ext-formpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-formpanel", ElementParser.withParsedCallback( EWCFormpanel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-formpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-formpanel", EWCFormpanel );
    }
}
