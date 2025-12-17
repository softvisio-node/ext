import ElementParser from "./common/ElementParser.js";
import Ext_dataview_Component from "./Ext/dataview/Component.js";

export default class EWCComponentdataview extends Ext_dataview_Component {
    constructor () {
        super( [], [] );
        this.xtype = "componentdataview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-componentdataview" ) == undefined ) {
        globalThis.customElements.define( "ext-componentdataview", ElementParser.withParsedCallback( EWCComponentdataview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-componentdataview" ) == undefined ) {
        globalThis.customElements.define( "ext-componentdataview", EWCComponentdataview );
    }
}
