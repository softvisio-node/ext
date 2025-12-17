import ElementParser from "./common/ElementParser.js";
import Ext_calendar_form_TimeField from "./Ext/calendar/form/TimeField.js";

export default class EWCCalendar_timefield extends Ext_calendar_form_TimeField {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-timefield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-timefield" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-timefield", ElementParser.withParsedCallback( EWCCalendar_timefield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-timefield" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-timefield", EWCCalendar_timefield );
    }
}
