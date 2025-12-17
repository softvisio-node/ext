import ElementParser from "./common/ElementParser.js";
import Ext_pivot_plugin_configurator_Container from "./Ext/pivot/plugin/configurator/Container.js";

export default class EWCPivotconfigcontainer extends Ext_pivot_plugin_configurator_Container {
    constructor () {
        super( [], [] );
        this.xtype = "pivotconfigcontainer";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotconfigcontainer" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotconfigcontainer", ElementParser.withParsedCallback( EWCPivotconfigcontainer ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotconfigcontainer" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotconfigcontainer", EWCPivotconfigcontainer );
    }
}
