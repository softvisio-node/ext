import ElementParser from "./common/ElementParser.js";
import Ext_Toolbar from "./Ext/Toolbar.js";

export default class EWCToolbar extends Ext_Toolbar {
    constructor () {
        super( [], [] );
        this.xtype = "toolbar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-toolbar" ) == undefined ) {
        globalThis.customElements.define( "ext-toolbar", ElementParser.withParsedCallback( EWCToolbar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-toolbar" ) == undefined ) {
        globalThis.customElements.define( "ext-toolbar", EWCToolbar );
    }
}
