import ElementParser from "./common/ElementParser.js";
import Ext_field_Panel from "./Ext/field/Panel.js";

export default class EWCFieldpanel extends Ext_field_Panel {
    constructor () {
        super( [], [] );
        this.xtype = "fieldpanel";
    }
}
try {
    if ( globalThis.customElements.get( "ext-fieldpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-fieldpanel", ElementParser.withParsedCallback( EWCFieldpanel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-fieldpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-fieldpanel", EWCFieldpanel );
    }
}
