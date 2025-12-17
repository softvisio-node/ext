import ElementParser from "./common/ElementParser.js";
import Ext_menu_Menu from "./Ext/menu/Menu.js";

export default class EWCMenu extends Ext_menu_Menu {
    constructor () {
        super( [], [] );
        this.xtype = "menu";
    }
}
try {
    if ( globalThis.customElements.get( "ext-menu" ) == undefined ) {
        globalThis.customElements.define( "ext-menu", ElementParser.withParsedCallback( EWCMenu ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-menu" ) == undefined ) {
        globalThis.customElements.define( "ext-menu", EWCMenu );
    }
}
