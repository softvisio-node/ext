import ElementParser from "./common/ElementParser.js";
import Ext_calendar_panel_Weeks from "./Ext/calendar/panel/Weeks.js";

export default class EWCCalendar_weeks extends Ext_calendar_panel_Weeks {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-weeks";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-weeks" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-weeks", ElementParser.withParsedCallback( EWCCalendar_weeks ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-weeks" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-weeks", EWCCalendar_weeks );
    }
}
