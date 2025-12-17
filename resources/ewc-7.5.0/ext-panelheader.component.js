import ElementParser from "./common/ElementParser.js";
import Ext_panel_Header from "./Ext/panel/Header.js";

export default class EWCPanelheader extends Ext_panel_Header {
    constructor () {
        super( [], [] );
        this.xtype = "panelheader";
    }
}
try {
    if ( globalThis.customElements.get( "ext-panelheader" ) == undefined ) {
        globalThis.customElements.define( "ext-panelheader", ElementParser.withParsedCallback( EWCPanelheader ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-panelheader" ) == undefined ) {
        globalThis.customElements.define( "ext-panelheader", EWCPanelheader );
    }
}
