import ElementParser from "./common/ElementParser.js";
import Ext_menu_Separator from "./Ext/menu/Separator.js";

export default class EWCMenuseparator extends Ext_menu_Separator {
    constructor () {
        super( [], [] );
        this.xtype = "menuseparator";
    }
}
try {
    if ( globalThis.customElements.get( "ext-menuseparator" ) == undefined ) {
        globalThis.customElements.define( "ext-menuseparator", ElementParser.withParsedCallback( EWCMenuseparator ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-menuseparator" ) == undefined ) {
        globalThis.customElements.define( "ext-menuseparator", EWCMenuseparator );
    }
}
