import ElementParser from "./common/ElementParser.js";
import Ext_pivot_plugin_configurator_Column from "./Ext/pivot/plugin/configurator/Column.js";

export default class EWCPivotconfigfield extends Ext_pivot_plugin_configurator_Column {
    constructor () {
        super( [], [] );
        this.xtype = "pivotconfigfield";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotconfigfield" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotconfigfield", ElementParser.withParsedCallback( EWCPivotconfigfield ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotconfigfield" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotconfigfield", EWCPivotconfigfield );
    }
}
