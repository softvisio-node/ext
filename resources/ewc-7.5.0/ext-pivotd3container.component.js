import ElementParser from "./common/ElementParser.js";
import Ext_pivot_d3_Container from "./Ext/pivot/d3/Container.js";

export default class EWCPivotd3container extends Ext_pivot_d3_Container {
    constructor () {
        super( [], [] );
        this.xtype = "pivotd3container";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotd3container" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotd3container", ElementParser.withParsedCallback( EWCPivotd3container ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotd3container" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotd3container", EWCPivotd3container );
    }
}
