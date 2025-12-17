import ElementParser from "./common/ElementParser.js";
import Ext_calendar_header_Days from "./Ext/calendar/header/Days.js";

export default class EWCCalendar_daysheader extends Ext_calendar_header_Days {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-daysheader";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-daysheader" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-daysheader", ElementParser.withParsedCallback( EWCCalendar_daysheader ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-daysheader" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-daysheader", EWCCalendar_daysheader );
    }
}
