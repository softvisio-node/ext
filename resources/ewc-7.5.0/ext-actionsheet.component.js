import ElementParser from "./common/ElementParser.js";
import Ext_ActionSheet from "./Ext/ActionSheet.js";

export default class EWCActionsheet extends Ext_ActionSheet {
    constructor () {
        super( [], [] );
        this.xtype = "actionsheet";
    }
}
try {
    if ( globalThis.customElements.get( "ext-actionsheet" ) == undefined ) {
        globalThis.customElements.define( "ext-actionsheet", ElementParser.withParsedCallback( EWCActionsheet ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-actionsheet" ) == undefined ) {
        globalThis.customElements.define( "ext-actionsheet", EWCActionsheet );
    }
}
