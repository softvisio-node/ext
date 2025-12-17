import ElementParser from "./common/ElementParser.js";
import Ext_calendar_view_Week from "./Ext/calendar/view/Week.js";

export default class EWCCalendar_weekview extends Ext_calendar_view_Week {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-weekview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-weekview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-weekview", ElementParser.withParsedCallback( EWCCalendar_weekview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-weekview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-weekview", EWCCalendar_weekview );
    }
}
