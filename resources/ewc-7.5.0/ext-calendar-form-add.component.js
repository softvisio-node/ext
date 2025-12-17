import ElementParser from "./common/ElementParser.js";
import Ext_calendar_form_Add from "./Ext/calendar/form/Add.js";

export default class EWCCalendar_form_add extends Ext_calendar_form_Add {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-form-add";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-form-add" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-form-add", ElementParser.withParsedCallback( EWCCalendar_form_add ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-form-add" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-form-add", EWCCalendar_form_add );
    }
}
