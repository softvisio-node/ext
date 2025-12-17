import ElementParser from "./common/ElementParser.js";
import Ext_dataview_ChipView from "./Ext/dataview/ChipView.js";

export default class EWCChipview extends Ext_dataview_ChipView {
    constructor () {
        super( [], [] );
        this.xtype = "chipview";
    }
}
try {
    if ( globalThis.customElements.get( "ext-chipview" ) == undefined ) {
        globalThis.customElements.define( "ext-chipview", ElementParser.withParsedCallback( EWCChipview ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-chipview" ) == undefined ) {
        globalThis.customElements.define( "ext-chipview", EWCChipview );
    }
}
