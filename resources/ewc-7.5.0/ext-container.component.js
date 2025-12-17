import ElementParser from "./common/ElementParser.js";
import Ext_container_Container from "./Ext/container/Container.js";

export default class EWCContainer extends Ext_container_Container {
    constructor () {
        super( [], [] );
        this.xtype = "container";
    }
}
try {
    if ( globalThis.customElements.get( "ext-container" ) == undefined ) {
        globalThis.customElements.define( "ext-container", ElementParser.withParsedCallback( EWCContainer ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-container" ) == undefined ) {
        globalThis.customElements.define( "ext-container", EWCContainer );
    }
}
