import ElementParser from "./common/ElementParser.js";
import Ext_menu_CheckItem from "./Ext/menu/CheckItem.js";

export default class EWCMenucheckitem extends Ext_menu_CheckItem {
    constructor () {
        super( [], [] );
        this.xtype = "menucheckitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-menucheckitem" ) == undefined ) {
        globalThis.customElements.define( "ext-menucheckitem", ElementParser.withParsedCallback( EWCMenucheckitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-menucheckitem" ) == undefined ) {
        globalThis.customElements.define( "ext-menucheckitem", EWCMenucheckitem );
    }
}
