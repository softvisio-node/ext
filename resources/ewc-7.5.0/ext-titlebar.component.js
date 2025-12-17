import ElementParser from "./common/ElementParser.js";
import Ext_TitleBar from "./Ext/TitleBar.js";

export default class EWCTitlebar extends Ext_TitleBar {
    constructor () {
        super( [], [] );
        this.xtype = "titlebar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-titlebar" ) == undefined ) {
        globalThis.customElements.define( "ext-titlebar", ElementParser.withParsedCallback( EWCTitlebar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-titlebar" ) == undefined ) {
        globalThis.customElements.define( "ext-titlebar", EWCTitlebar );
    }
}
