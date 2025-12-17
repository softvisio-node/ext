import ElementParser from "./common/ElementParser.js";
import Ext_panel_DateTitle from "./Ext/panel/DateTitle.js";

export default class EWCDatetitle extends Ext_panel_DateTitle {
    constructor () {
        super( [], [] );
        this.xtype = "datetitle";
    }
}
try {
    if ( globalThis.customElements.get( "ext-datetitle" ) == undefined ) {
        globalThis.customElements.define( "ext-datetitle", ElementParser.withParsedCallback( EWCDatetitle ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-datetitle" ) == undefined ) {
        globalThis.customElements.define( "ext-datetitle", EWCDatetitle );
    }
}
