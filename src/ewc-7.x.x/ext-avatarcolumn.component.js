import ElementParser from "#ewc/common/ElementParser";
import ExtGridColumn from "#ewc/Ext/grid/column/Number.js";

export default class EwcAvatarColumn extends ExtGridColumn {
    constructor () {
        super( [], [] );

        this.xtype = "avatarcolumn";
    }
}

try {
    if ( globalThis.customElements.get( "ext-avatarcolumn" ) === undefined ) {
        globalThis.customElements.define( "ext-avatarcolumn", ElementParser.withParsedCallback( EwcAvatarColumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-avatarcolumn" ) === undefined ) {
        globalThis.customElements.define( "ext-avatarcolumn", EwcAvatarColumn );
    }
}
