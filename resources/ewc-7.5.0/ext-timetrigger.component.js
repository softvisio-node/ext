import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_Time from "./Ext/field/trigger/Time.js";

export default class EWCTimetrigger extends Ext_field_trigger_Time {
    constructor () {
        super( [], [] );
        this.xtype = "timetrigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-timetrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-timetrigger", ElementParser.withParsedCallback( EWCTimetrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-timetrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-timetrigger", EWCTimetrigger );
    }
}
