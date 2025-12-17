import ElementParser from "./common/ElementParser.js";
import Ext_TabBar from "./Ext/TabBar.js";

export default class EWCTabbar extends Ext_TabBar {
    constructor () {
        super( [], [] );
        this.xtype = "tabbar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-tabbar" ) == undefined ) {
        globalThis.customElements.define( "ext-tabbar", ElementParser.withParsedCallback( EWCTabbar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-tabbar" ) == undefined ) {
        globalThis.customElements.define( "ext-tabbar", EWCTabbar );
    }
}
