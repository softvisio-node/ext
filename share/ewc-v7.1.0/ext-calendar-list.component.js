//import Ext_calendar_List from '@sencha/ext-runtime-base/dist/./Ext/calendar/List.js';
import Ext_calendar_List from './Ext/calendar/List.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_list extends Ext_calendar_List {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-list';
    }

}
window.customElements.define('ext-calendar-list', HTMLParsedElement.withParsedCallback(EWCCalendar_list));

