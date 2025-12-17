import ElementParser from "./common/ElementParser.js";
import Ext_calendar_view_Weeks from "./Ext/calendar/view/Weeks.js";

export default class EWCCalendar_weeksview extends Ext_calendar_view_Weeks {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-weeksview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-weeksview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-weeksview", ElementParser.withParsedCallback( EWCCalendar_weeksview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-weeksview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-weeksview", EWCCalendar_weeksview );
    }
}
