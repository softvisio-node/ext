import ElementParser from "./common/ElementParser.js";
import Ext_menu_RadioItem from "./Ext/menu/RadioItem.js";

export default class EWCMenuradioitem extends Ext_menu_RadioItem {
    constructor () {
        super( [], [] );
        this.xtype = "menuradioitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-menuradioitem" ) == undefined ) {
        globalThis.customElements.define( "ext-menuradioitem", ElementParser.withParsedCallback( EWCMenuradioitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-menuradioitem" ) == undefined ) {
        globalThis.customElements.define( "ext-menuradioitem", EWCMenuradioitem );
    }
}
