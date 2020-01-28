import Ext_calendar_Event from './Ext/calendar/Event.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_event extends Ext_calendar_Event {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-event';
  }
}
window.customElements.define('ext-calendar-event', ElementParser.withParsedCallback(EWCCalendar_event));
