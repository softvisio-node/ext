import ElementParser from "./common/ElementParser.js";
import Ext_calendar_panel_Day from "./Ext/calendar/panel/Day.js";

export default class EWCCalendar_day extends Ext_calendar_panel_Day {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-day";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-day" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-day", ElementParser.withParsedCallback( EWCCalendar_day ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-day" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-day", EWCCalendar_day );
    }
}
