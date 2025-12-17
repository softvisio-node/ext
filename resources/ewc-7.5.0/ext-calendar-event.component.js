import ElementParser from "./common/ElementParser.js";
import Ext_calendar_Event from "./Ext/calendar/Event.js";

export default class EWCCalendar_event extends Ext_calendar_Event {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-event";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-event" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-event", ElementParser.withParsedCallback( EWCCalendar_event ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-event" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-event", EWCCalendar_event );
    }
}
