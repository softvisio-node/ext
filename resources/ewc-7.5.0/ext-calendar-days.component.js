import ElementParser from "./common/ElementParser.js";
import Ext_calendar_panel_Days from "./Ext/calendar/panel/Days.js";

export default class EWCCalendar_days extends Ext_calendar_panel_Days {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-days";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-days" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-days", ElementParser.withParsedCallback( EWCCalendar_days ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-days" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-days", EWCCalendar_days );
    }
}
