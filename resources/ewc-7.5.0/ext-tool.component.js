import ElementParser from "./common/ElementParser.js";
import Ext_panel_Tool from "./Ext/panel/Tool.js";

export default class EWCTool extends Ext_panel_Tool {
    constructor () {
        super( [], [] );
        this.xtype = "tool";
    }
}
try {
    if ( globalThis.customElements.get( "ext-tool" ) == undefined ) {
        globalThis.customElements.define( "ext-tool", ElementParser.withParsedCallback( EWCTool ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-tool" ) == undefined ) {
        globalThis.customElements.define( "ext-tool", EWCTool );
    }
}
