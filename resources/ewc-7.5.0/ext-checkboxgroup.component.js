import ElementParser from "./common/ElementParser.js";
import Ext_field_CheckboxGroup from "./Ext/field/CheckboxGroup.js";

export default class EWCCheckboxgroup extends Ext_field_CheckboxGroup {
    constructor () {
        super( [], [] );
        this.xtype = "checkboxgroup";
    }
}
try {
    if ( globalThis.customElements.get( "ext-checkboxgroup" ) == undefined ) {
        globalThis.customElements.define( "ext-checkboxgroup", ElementParser.withParsedCallback( EWCCheckboxgroup ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-checkboxgroup" ) == undefined ) {
        globalThis.customElements.define( "ext-checkboxgroup", EWCCheckboxgroup );
    }
}
