import ElementParser from "./common/ElementParser.js";
import Ext_dataview_pullrefresh_Spinner from "./Ext/dataview/pullrefresh/Spinner.js";

export default class EWCPullrefreshspinner extends Ext_dataview_pullrefresh_Spinner {
    constructor () {
        super( [], [] );
        this.xtype = "pullrefreshspinner";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pullrefreshspinner" ) == undefined ) {
        globalThis.customElements.define( "ext-pullrefreshspinner", ElementParser.withParsedCallback( EWCPullrefreshspinner ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pullrefreshspinner" ) == undefined ) {
        globalThis.customElements.define( "ext-pullrefreshspinner", EWCPullrefreshspinner );
    }
}
