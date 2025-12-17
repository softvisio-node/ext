import ElementParser from "./common/ElementParser.js";
import Ext_dataview_pullrefresh_Bar from "./Ext/dataview/pullrefresh/Bar.js";

export default class EWCPullrefreshbar extends Ext_dataview_pullrefresh_Bar {
    constructor () {
        super( [], [] );
        this.xtype = "pullrefreshbar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pullrefreshbar" ) == undefined ) {
        globalThis.customElements.define( "ext-pullrefreshbar", ElementParser.withParsedCallback( EWCPullrefreshbar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pullrefreshbar" ) == undefined ) {
        globalThis.customElements.define( "ext-pullrefreshbar", EWCPullrefreshbar );
    }
}
