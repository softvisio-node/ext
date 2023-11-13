import ExtGridColumn from "#ewc//Ext/grid/column/Number.js";
import ElementParser from "#ewc/common/ElementParser";

export default class EwcAvatarColumn extends ExtGridColumn {
    constructor () {
        super( [], [] );

        this.xtype = "avatarcolumn";
    }
}

try {
    if ( window.customElements.get( "ext-avatarcolumn" ) === undefined ) {
        window.customElements.define( "ext-avatarcolumn", ElementParser.withParsedCallback( EwcAvatarColumn ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-avatarcolumn" ) === undefined ) {
        window.customElements.define( "ext-avatarcolumn", EwcAvatarColumn );
    }
}
