import ElementParser from "./common/ElementParser.js";
import Ext_panel_Title from "./Ext/panel/Title.js";

export default class EWCPaneltitle extends Ext_panel_Title {
    constructor () {
        super( [], [] );
        this.xtype = "paneltitle";
    }
}
try {
    if ( globalThis.customElements.get( "ext-paneltitle" ) == undefined ) {
        globalThis.customElements.define( "ext-paneltitle", ElementParser.withParsedCallback( EWCPaneltitle ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-paneltitle" ) == undefined ) {
        globalThis.customElements.define( "ext-paneltitle", EWCPaneltitle );
    }
}
