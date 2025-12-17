import ElementParser from "./common/ElementParser.js";
import Ext_field_RadioGroup from "./Ext/field/RadioGroup.js";

export default class EWCRadiogroup extends Ext_field_RadioGroup {
    constructor () {
        super( [], [] );
        this.xtype = "radiogroup";
    }
}
try {
    if ( globalThis.customElements.get( "ext-radiogroup" ) == undefined ) {
        globalThis.customElements.define( "ext-radiogroup", ElementParser.withParsedCallback( EWCRadiogroup ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-radiogroup" ) == undefined ) {
        globalThis.customElements.define( "ext-radiogroup", EWCRadiogroup );
    }
}
