import ElementParser from "./common/ElementParser.js";
import Ext_picker_Tablet from "./Ext/picker/Tablet.js";

export default class EWCTabletpicker extends Ext_picker_Tablet {
    constructor () {
        super( [], [] );
        this.xtype = "tabletpicker";
    }
}
try {
    if ( globalThis.customElements.get( "ext-tabletpicker" ) == undefined ) {
        globalThis.customElements.define( "ext-tabletpicker", ElementParser.withParsedCallback( EWCTabletpicker ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-tabletpicker" ) == undefined ) {
        globalThis.customElements.define( "ext-tabletpicker", EWCTabletpicker );
    }
}
