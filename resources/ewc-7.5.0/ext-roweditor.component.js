import ElementParser from "./common/ElementParser.js";
import Ext_grid_rowedit_Editor from "./Ext/grid/rowedit/Editor.js";

export default class EWCRoweditor extends Ext_grid_rowedit_Editor {
    constructor () {
        super( [], [] );
        this.xtype = "roweditor";
    }
}
try {
    if ( globalThis.customElements.get( "ext-roweditor" ) == undefined ) {
        globalThis.customElements.define( "ext-roweditor", ElementParser.withParsedCallback( EWCRoweditor ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-roweditor" ) == undefined ) {
        globalThis.customElements.define( "ext-roweditor", EWCRoweditor );
    }
}
