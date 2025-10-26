import ElementParser from "#ewc/common/ElementParser";
import ExtImage from "#ewc/Ext/Image";

export default class EwcAvatar extends ExtImage {
    constructor () {
        super( [], [] );
        this.xtype = "avatar";
    }
}

try {
    if ( globalThis.customElements.get( "ext-avatar" ) === undefined ) {
        globalThis.customElements.define( "ext-avatar", ElementParser.withParsedCallback( EwcAvatar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-avatar" ) === undefined ) {
        globalThis.customElements.define( "ext-avatar", EwcAvatar );
    }
}
