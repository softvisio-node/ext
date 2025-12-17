import ElementParser from "./common/ElementParser.js";
import Ext_calendar_view_Multi from "./Ext/calendar/view/Multi.js";

export default class EWCCalendar_multiview extends Ext_calendar_view_Multi {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-multiview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-multiview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-multiview", ElementParser.withParsedCallback( EWCCalendar_multiview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-multiview" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-multiview", EWCCalendar_multiview );
    }
}
