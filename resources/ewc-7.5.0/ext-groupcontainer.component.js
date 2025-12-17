import ElementParser from "./common/ElementParser.js";
import Ext_field_FieldGroupContainer from "./Ext/field/FieldGroupContainer.js";

export default class EWCGroupcontainer extends Ext_field_FieldGroupContainer {
    constructor () {
        super( [], [] );
        this.xtype = "groupcontainer";
    }
}
try {
    if ( globalThis.customElements.get( "ext-groupcontainer" ) == undefined ) {
        globalThis.customElements.define( "ext-groupcontainer", ElementParser.withParsedCallback( EWCGroupcontainer ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-groupcontainer" ) == undefined ) {
        globalThis.customElements.define( "ext-groupcontainer", EWCGroupcontainer );
    }
}
