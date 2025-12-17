import ElementParser from "./common/ElementParser.js";
import Ext_calendar_header_Weeks from "./Ext/calendar/header/Weeks.js";

export default class EWCCalendar_weeksheader extends Ext_calendar_header_Weeks {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-weeksheader";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-weeksheader" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-weeksheader", ElementParser.withParsedCallback( EWCCalendar_weeksheader ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-weeksheader" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-weeksheader", EWCCalendar_weeksheader );
    }
}
