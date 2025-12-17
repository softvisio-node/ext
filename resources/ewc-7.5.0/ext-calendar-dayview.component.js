import ElementParser from "./common/ElementParser.js";
import Ext_calendar_view_Day from "./Ext/calendar/view/Day.js";

export default class EWCCalendar_dayview extends Ext_calendar_view_Day {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-dayview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-dayview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-dayview", ElementParser.withParsedCallback( EWCCalendar_dayview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-dayview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-dayview", EWCCalendar_dayview );
    }
}
