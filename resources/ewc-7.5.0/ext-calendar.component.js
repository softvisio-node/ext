import ElementParser from "./common/ElementParser.js";
import Ext_calendar_panel_Panel from "./Ext/calendar/panel/Panel.js";

export default class EWCCalendar extends Ext_calendar_panel_Panel {
    constructor () {
        super( [], [] );
        this.xtype = "calendar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-calendar" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar", ElementParser.withParsedCallback( EWCCalendar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-calendar" ) == undefined ) {
        globalThis.customElements.define( "ext-calendar", EWCCalendar );
    }
}
