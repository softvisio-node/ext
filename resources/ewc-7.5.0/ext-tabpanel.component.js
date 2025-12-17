import ElementParser from "./common/ElementParser.js";
import Ext_TabPanel from "./Ext/TabPanel.js";

export default class EWCTabpanel extends Ext_TabPanel {
    constructor () {
        super( [], [] );
        this.xtype = "tabpanel";
    }
}
try {
    if ( globalThis.customElements.get( "ext-tabpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-tabpanel", ElementParser.withParsedCallback( EWCTabpanel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-tabpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-tabpanel", EWCTabpanel );
    }
}
