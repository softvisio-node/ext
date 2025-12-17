import ElementParser from "./common/ElementParser.js";
import Ext_field_Time from "./Ext/field/Time.js";

export default class EWCTimefield extends Ext_field_Time {
    constructor () {
        super( [], [] );
        this.xtype = "timefield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-timefield" ) == undefined ) {
        globalThis.customElements.define( "ext-timefield", ElementParser.withParsedCallback( EWCTimefield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-timefield" ) == undefined ) {
        globalThis.customElements.define( "ext-timefield", EWCTimefield );
    }
}
