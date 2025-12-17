import ElementParser from "./common/ElementParser.js";
import Ext_NavigationView from "./Ext/NavigationView.js";

export default class EWCNavigationview extends Ext_NavigationView {
    constructor () {
        super( [], [] );
        this.xtype = "navigationview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-navigationview" ) == undefined ) {
        globalThis.customElements.define( "ext-navigationview", ElementParser.withParsedCallback( EWCNavigationview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-navigationview" ) == undefined ) {
        globalThis.customElements.define( "ext-navigationview", EWCNavigationview );
    }
}
