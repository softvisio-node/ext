Ext.define( "Ext.overrides.Dialog", {
    "override": "Ext.Dialog",

    onModalMaskTap ( e ) {
        const handler = this.getMaskTapHandler();

        if ( handler ) {
            Ext.callback( handler, null, [this, e], 0, this );
        }
        else if ( this.getClosable() ) {
            if ( this.getCloseAction() === "destroy" ) {
                this.on( {
                    "hide": () => this.close(),
                    "single": true,
                } );
            }

            this.hide();
        }
    },
} );
