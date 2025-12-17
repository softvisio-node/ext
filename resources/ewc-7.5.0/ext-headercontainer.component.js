import ElementParser from "./common/ElementParser.js";
import Ext_grid_HeaderContainer from "./Ext/grid/HeaderContainer.js";

export default class EWCHeadercontainer extends Ext_grid_HeaderContainer {
    constructor () {
        super( [], [] );
        this.xtype = "headercontainer";
    }
}
try {
    if ( globalThis.customElements.get( "ext-headercontainer" ) == undefined ) {
        globalThis.customElements.define( "ext-headercontainer", ElementParser.withParsedCallback( EWCHeadercontainer ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-headercontainer" ) == undefined ) {
        globalThis.customElements.define( "ext-headercontainer", EWCHeadercontainer );
    }
}
