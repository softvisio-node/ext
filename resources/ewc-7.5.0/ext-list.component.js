import ElementParser from "./common/ElementParser.js";
import Ext_List from "./Ext/List.js";

export default class EWCList extends Ext_List {
    constructor () {
        super( [], [] );
        this.xtype = "list";
    }
}
try {
    if ( globalThis.customElements.get( "ext-list" ) == undefined ) {
        globalThis.customElements.define( "ext-list", ElementParser.withParsedCallback( EWCList ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-list" ) == undefined ) {
        globalThis.customElements.define( "ext-list", EWCList );
    }
}
