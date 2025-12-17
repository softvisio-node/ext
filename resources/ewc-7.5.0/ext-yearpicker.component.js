import ElementParser from "./common/ElementParser.js";
import Ext_panel_YearPicker from "./Ext/panel/YearPicker.js";

export default class EWCYearpicker extends Ext_panel_YearPicker {
    constructor () {
        super( [], [] );
        this.xtype = "yearpicker";
    }
}
try {
    if ( globalThis.customElements.get( "ext-yearpicker" ) == undefined ) {
        globalThis.customElements.define( "ext-yearpicker", ElementParser.withParsedCallback( EWCYearpicker ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-yearpicker" ) == undefined ) {
        globalThis.customElements.define( "ext-yearpicker", EWCYearpicker );
    }
}
