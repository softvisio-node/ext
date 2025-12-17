import ElementParser from "./common/ElementParser.js";
import Ext_calendar_form_CalendarPicker from "./Ext/calendar/form/CalendarPicker.js";

export default class EWCCalendar_calendar_picker extends Ext_calendar_form_CalendarPicker {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-calendar-picker";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-calendar-picker" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-calendar-picker", ElementParser.withParsedCallback( EWCCalendar_calendar_picker ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-calendar-picker" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-calendar-picker", EWCCalendar_calendar_picker );
    }
}
