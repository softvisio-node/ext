import Ext_Video from './Ext/Video.js';
import ElementParser from './common/ElementParser.js';

export default class EWCVideo extends Ext_Video {
  constructor() {
    super ([], []);
    this.xtype = 'video';
  }
}
try {
  if (window.customElements.get('ext-video') == undefined) {
    window.customElements.define('ext-video', ElementParser.withParsedCallback(EWCVideo));
  }
}
catch(e) {
  if (window.customElements.get('ext-video') == undefined) {
    window.customElements.define('ext-video', EWCVideo);
  }
}
