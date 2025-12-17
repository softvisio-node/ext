import ElementParser from "./common/ElementParser.js";
import Ext_pivot_plugin_rangeeditor_Panel from "./Ext/pivot/plugin/rangeeditor/Panel.js";

export default class EWCPivotrangeeditor extends Ext_pivot_plugin_rangeeditor_Panel {
    constructor () {
        super( [], [] );
        this.xtype = "pivotrangeeditor";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotrangeeditor" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotrangeeditor", ElementParser.withParsedCallback( EWCPivotrangeeditor ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotrangeeditor" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotrangeeditor", EWCPivotrangeeditor );
    }
}
