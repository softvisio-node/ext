import ElementParser from "./common/ElementParser.js";
import Ext_dataview_component_SimpleListItem from "./Ext/dataview/component/SimpleListItem.js";

export default class EWCSimplelistitem extends Ext_dataview_component_SimpleListItem {
    constructor () {
        super( [], [] );
        this.xtype = "simplelistitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-simplelistitem" ) == undefined ) {
        globalThis.customElements.define( "ext-simplelistitem", ElementParser.withParsedCallback( EWCSimplelistitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-simplelistitem" ) == undefined ) {
        globalThis.customElements.define( "ext-simplelistitem", EWCSimplelistitem );
    }
}
