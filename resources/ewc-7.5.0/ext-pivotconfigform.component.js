import ElementParser from "./common/ElementParser.js";
import Ext_pivot_plugin_configurator_Form from "./Ext/pivot/plugin/configurator/Form.js";

export default class EWCPivotconfigform extends Ext_pivot_plugin_configurator_Form {
    constructor () {
        super( [], [] );
        this.xtype = "pivotconfigform";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotconfigform" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotconfigform", ElementParser.withParsedCallback( EWCPivotconfigform ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotconfigform" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotconfigform", EWCPivotconfigform );
    }
}
