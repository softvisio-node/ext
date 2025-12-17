import ElementParser from "./common/ElementParser.js";
import Ext_panel_Panel from "./Ext/panel/Panel.js";

export default class EWCPanel extends Ext_panel_Panel {
    constructor () {
        super( [], [] );
        this.xtype = "panel";
    }
}
try {
    if ( globalThis.customElements.get( "ext-panel" ) == undefined ) {
        globalThis.customElements.define( "ext-panel", ElementParser.withParsedCallback( EWCPanel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-panel" ) == undefined ) {
        globalThis.customElements.define( "ext-panel", EWCPanel );
    }
}
