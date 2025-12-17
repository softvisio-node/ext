import ElementParser from "./common/ElementParser.js";
import Ext_pivot_plugin_configurator_Panel from "./Ext/pivot/plugin/configurator/Panel.js";

export default class EWCPivotconfigpanel extends Ext_pivot_plugin_configurator_Panel {
    constructor () {
        super( [], [] );
        this.xtype = "pivotconfigpanel";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotconfigpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotconfigpanel", ElementParser.withParsedCallback( EWCPivotconfigpanel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotconfigpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotconfigpanel", EWCPivotconfigpanel );
    }
}
