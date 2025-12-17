import ElementParser from "./common/ElementParser.js";
import Ext_calendar_view_Month from "./Ext/calendar/view/Month.js";

export default class EWCCalendar_monthview extends Ext_calendar_view_Month {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-monthview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-monthview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-monthview", ElementParser.withParsedCallback( EWCCalendar_monthview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-monthview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-monthview", EWCCalendar_monthview );
    }
}
