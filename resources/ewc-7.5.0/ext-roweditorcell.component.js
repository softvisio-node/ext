import ElementParser from "./common/ElementParser.js";
import Ext_grid_rowedit_Cell from "./Ext/grid/rowedit/Cell.js";

export default class EWCRoweditorcell extends Ext_grid_rowedit_Cell {
    constructor () {
        super( [], [] );
        this.xtype = "roweditorcell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-roweditorcell" ) == undefined ) {
        globalThis.customElements.define( "ext-roweditorcell", ElementParser.withParsedCallback( EWCRoweditorcell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-roweditorcell" ) == undefined ) {
        globalThis.customElements.define( "ext-roweditorcell", EWCRoweditorcell );
    }
}
