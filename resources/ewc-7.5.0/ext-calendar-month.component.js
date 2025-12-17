import ElementParser from "./common/ElementParser.js";
import Ext_calendar_panel_Month from "./Ext/calendar/panel/Month.js";

export default class EWCCalendar_month extends Ext_calendar_panel_Month {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-month";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-month" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-month", ElementParser.withParsedCallback( EWCCalendar_month ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-month" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-month", EWCCalendar_month );
    }
}
