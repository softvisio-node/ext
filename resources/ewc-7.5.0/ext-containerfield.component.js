import ElementParser from "./common/ElementParser.js";
import Ext_field_Container from "./Ext/field/Container.js";

export default class EWCContainerfield extends Ext_field_Container {
    constructor () {
        super( [], [] );
        this.xtype = "containerfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-containerfield" ) == undefined ) {
        globalThis.customElements.define( "ext-containerfield", ElementParser.withParsedCallback( EWCContainerfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-containerfield" ) == undefined ) {
        globalThis.customElements.define( "ext-containerfield", EWCContainerfield );
    }
}
