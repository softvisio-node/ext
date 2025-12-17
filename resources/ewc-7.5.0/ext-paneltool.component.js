import ElementParser from "./common/ElementParser.js";
import Ext_panel_Tool from "./Ext/panel/Tool.js";

export default class EWCPaneltool extends Ext_panel_Tool {
    constructor () {
        super( [], [] );
        this.xtype = "paneltool";
    }
}
try {
    if ( globalThis.customElements.get( "ext-paneltool" ) == undefined ) {
        globalThis.customElements.define( "ext-paneltool", ElementParser.withParsedCallback( EWCPaneltool ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-paneltool" ) == undefined ) {
        globalThis.customElements.define( "ext-paneltool", EWCPaneltool );
    }
}
