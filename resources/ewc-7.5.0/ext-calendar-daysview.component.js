import ElementParser from "./common/ElementParser.js";
import Ext_calendar_view_Days from "./Ext/calendar/view/Days.js";

export default class EWCCalendar_daysview extends Ext_calendar_view_Days {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-daysview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-daysview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-daysview", ElementParser.withParsedCallback( EWCCalendar_daysview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-daysview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-daysview", EWCCalendar_daysview );
    }
}
