import ElementParser from "./common/ElementParser.js";
import Ext_panel_Date from "./Ext/panel/Date.js";

export default class EWCDatepanel extends Ext_panel_Date {
    constructor () {
        super( [], [] );
        this.xtype = "datepanel";
    }
}
try {
    if ( globalThis.customElements.get( "ext-datepanel" ) == undefined ) {
        globalThis.customElements.define( "ext-datepanel", ElementParser.withParsedCallback( EWCDatepanel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-datepanel" ) == undefined ) {
        globalThis.customElements.define( "ext-datepanel", EWCDatepanel );
    }
}
