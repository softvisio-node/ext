import ElementParser from "./common/ElementParser.js";
import Ext_tip_ToolTip from "./Ext/tip/ToolTip.js";

export default class EWCTooltip extends Ext_tip_ToolTip {
    constructor () {
        super( [], [] );
        this.xtype = "tooltip";
    }
}
try {
    if ( globalThis.customElements.get( "ext-tooltip" ) == undefined ) {
        globalThis.customElements.define( "ext-tooltip", ElementParser.withParsedCallback( EWCTooltip ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-tooltip" ) == undefined ) {
        globalThis.customElements.define( "ext-tooltip", EWCTooltip );
    }
}
