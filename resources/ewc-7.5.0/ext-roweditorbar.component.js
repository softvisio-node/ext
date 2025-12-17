import ElementParser from "./common/ElementParser.js";
import Ext_grid_rowedit_Bar from "./Ext/grid/rowedit/Bar.js";

export default class EWCRoweditorbar extends Ext_grid_rowedit_Bar {
    constructor () {
        super( [], [] );
        this.xtype = "roweditorbar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-roweditorbar" ) == undefined ) {
        globalThis.customElements.define( "ext-roweditorbar", ElementParser.withParsedCallback( EWCRoweditorbar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-roweditorbar" ) == undefined ) {
        globalThis.customElements.define( "ext-roweditorbar", EWCRoweditorbar );
    }
}
