import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_Menu from "./Ext/field/trigger/Menu.js";

export default class EWCMenutrigger extends Ext_field_trigger_Menu {
    constructor () {
        super( [], [] );
        this.xtype = "menutrigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-menutrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-menutrigger", ElementParser.withParsedCallback( EWCMenutrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-menutrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-menutrigger", EWCMenutrigger );
    }
}
