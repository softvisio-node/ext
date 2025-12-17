import ElementParser from "./common/ElementParser.js";
import Ext_Map from "./Ext/Map.js";

export default class EWCGoogle_map extends Ext_Map {
    constructor () {
        super( [], [] );
        this.xtype = "google-map";
    }
}
try {
    if ( globalThis.customElements.get( "ext-google-map" ) == undefined ) {
        globalThis.customElements.define( "ext-google-map", ElementParser.withParsedCallback( EWCGoogle_map ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-google-map" ) == undefined ) {
        globalThis.customElements.define( "ext-google-map", EWCGoogle_map );
    }
}
