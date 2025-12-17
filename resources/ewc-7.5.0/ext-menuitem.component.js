import ElementParser from "./common/ElementParser.js";
import Ext_menu_TextItem from "./Ext/menu/TextItem.js";

export default class EWCMenuitem extends Ext_menu_TextItem {
    constructor () {
        super( [], [] );
        this.xtype = "menuitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-menuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-menuitem", ElementParser.withParsedCallback( EWCMenuitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-menuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-menuitem", EWCMenuitem );
    }
}
