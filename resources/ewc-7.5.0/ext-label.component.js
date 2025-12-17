import ElementParser from "./common/ElementParser.js";
import Ext_Label from "./Ext/Label.js";

export default class EWCLabel extends Ext_Label {
    constructor () {
        super( [], [] );
        this.xtype = "label";
    }
}
try {
    if ( globalThis.customElements.get( "ext-label" ) == undefined ) {
        globalThis.customElements.define( "ext-label", ElementParser.withParsedCallback( EWCLabel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-label" ) == undefined ) {
        globalThis.customElements.define( "ext-label", EWCLabel );
    }
}
