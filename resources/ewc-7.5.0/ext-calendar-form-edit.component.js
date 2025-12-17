import ElementParser from "./common/ElementParser.js";
import Ext_calendar_form_Edit from "./Ext/calendar/form/Edit.js";

export default class EWCCalendar_form_edit extends Ext_calendar_form_Edit {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-form-edit";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-form-edit" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-form-edit", ElementParser.withParsedCallback( EWCCalendar_form_edit ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-form-edit" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-form-edit", EWCCalendar_form_edit );
    }
}
