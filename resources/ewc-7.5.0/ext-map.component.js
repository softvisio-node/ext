import ElementParser from "./common/ElementParser.js";
import Ext_Map from "./Ext/Map.js";

export default class EWCMap extends Ext_Map {
    constructor () {
        super( [], [] );
        this.xtype = "map";
    }
}
try {
    if ( globalThis.customElements.get( "ext-map" ) == undefined ) {
        globalThis.customElements.define( "ext-map", ElementParser.withParsedCallback( EWCMap ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-map" ) == undefined ) {
        globalThis.customElements.define( "ext-map", EWCMap );
    }
}
