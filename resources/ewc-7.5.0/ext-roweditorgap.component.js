import ElementParser from "./common/ElementParser.js";
import Ext_grid_rowedit_Gap from "./Ext/grid/rowedit/Gap.js";

export default class EWCRoweditorgap extends Ext_grid_rowedit_Gap {
    constructor () {
        super( [], [] );
        this.xtype = "roweditorgap";
    }
}
try {
    if ( globalThis.customElements.get( "ext-roweditorgap" ) == undefined ) {
        globalThis.customElements.define( "ext-roweditorgap", ElementParser.withParsedCallback( EWCRoweditorgap ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-roweditorgap" ) == undefined ) {
        globalThis.customElements.define( "ext-roweditorgap", EWCRoweditorgap );
    }
}
