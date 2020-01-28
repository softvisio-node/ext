import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import ElementParser from './ElementParser.js';

export default class EWCListitemplaceholder extends Ext_dataview_ListItemPlaceholder {
  constructor() {
    super ([], []);
    this.xtype = 'listitemplaceholder';
  }
}
window.customElements.define('ext-listitemplaceholder', ElementParser.withParsedCallback(EWCListitemplaceholder));