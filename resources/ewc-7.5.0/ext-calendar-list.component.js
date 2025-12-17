import ElementParser from "./common/ElementParser.js";
import Ext_calendar_List from "./Ext/calendar/List.js";

export default class EWCCalendar_list extends Ext_calendar_List {
    constructor () {
        super( [], [] );
        this.xtype = "calendar-list";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar-list" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-list", ElementParser.withParsedCallback( EWCCalendar_list ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar-list" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar-list", EWCCalendar_list );
    }
}
