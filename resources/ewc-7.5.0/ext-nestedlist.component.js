import ElementParser from "./common/ElementParser.js";
import Ext_NestedList from "./Ext/NestedList.js";

export default class EWCNestedlist extends Ext_NestedList {
    constructor () {
        super( [], [] );
        this.xtype = "nestedlist";
    }
}
try {
    if ( globalThis.customElements.get( "ext-nestedlist" ) == undefined ) {
        globalThis.customElements.define( "ext-nestedlist", ElementParser.withParsedCallback( EWCNestedlist ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-nestedlist" ) == undefined ) {
        globalThis.customElements.define( "ext-nestedlist", EWCNestedlist );
    }
}
