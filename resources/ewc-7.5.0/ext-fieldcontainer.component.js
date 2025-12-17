import ElementParser from "./common/ElementParser.js";
import Ext_field_Container from "./Ext/field/Container.js";

export default class EWCFieldcontainer extends Ext_field_Container {
    constructor () {
        super( [], [] );
        this.xtype = "fieldcontainer";
    }
}
try {
    if ( globalThis.customElements.get( "ext-fieldcontainer" ) == undefined ) {
        globalThis.customElements.define( "ext-fieldcontainer", ElementParser.withParsedCallback( EWCFieldcontainer ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-fieldcontainer" ) == undefined ) {
        globalThis.customElements.define( "ext-fieldcontainer", EWCFieldcontainer );
    }
}
