import ElementParser from "./common/ElementParser.js";
import Ext_pivot_plugin_configurator_Settings from "./Ext/pivot/plugin/configurator/Settings.js";

export default class EWCPivotsettings extends Ext_pivot_plugin_configurator_Settings {
    constructor () {
        super( [], [] );
        this.xtype = "pivotsettings";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotsettings" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotsettings", ElementParser.withParsedCallback( EWCPivotsettings ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotsettings" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotsettings", EWCPivotsettings );
    }
}
