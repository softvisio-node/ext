import ElementParser from "./common/ElementParser.js";
import Ext_dataview_component_DataItem from "./Ext/dataview/component/DataItem.js";

export default class EWCDataitem extends Ext_dataview_component_DataItem {
    constructor () {
        super( [], [] );
        this.xtype = "dataitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-dataitem" ) == undefined ) {
        globalThis.customElements.define( "ext-dataitem", ElementParser.withParsedCallback( EWCDataitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-dataitem" ) == undefined ) {
        globalThis.customElements.define( "ext-dataitem", EWCDataitem );
    }
}
