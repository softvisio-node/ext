import ElementParser from "./common/ElementParser.js";
import Ext_BreadcrumbBar from "./Ext/BreadcrumbBar.js";

export default class EWCBreadcrumbbar extends Ext_BreadcrumbBar {
    constructor () {
        super( [], [] );
        this.xtype = "breadcrumbbar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-breadcrumbbar" ) == undefined ) {
        globalThis.customElements.define( "ext-breadcrumbbar", ElementParser.withParsedCallback( EWCBreadcrumbbar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-breadcrumbbar" ) == undefined ) {
        globalThis.customElements.define( "ext-breadcrumbbar", EWCBreadcrumbbar );
    }
}
