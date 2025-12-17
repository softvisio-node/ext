import ElementParser from "./common/ElementParser.js";
import Ext_calendar_panel_Week from "./Ext/calendar/panel/Week.js";

export default class EWCCalendar_week extends Ext_calendar_panel_Week {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-week";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-week" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-week", ElementParser.withParsedCallback( EWCCalendar_week ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-week" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-week", EWCCalendar_week );
    }
}
