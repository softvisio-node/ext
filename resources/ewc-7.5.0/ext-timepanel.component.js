import ElementParser from "./common/ElementParser.js";
import Ext_panel_Time from "./Ext/panel/Time.js";

export default class EWCTimepanel extends Ext_panel_Time {
    constructor () {
        super( [], [] );
        this.xtype = "timepanel";
    }
}
try {
    if ( globalThis.customElements.get( "ext-timepanel" ) == undefined ) {
        globalThis.customElements.define( "ext-timepanel", ElementParser.withParsedCallback( EWCTimepanel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-timepanel" ) == undefined ) {
        globalThis.customElements.define( "ext-timepanel", EWCTimepanel );
    }
}
