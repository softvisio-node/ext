Ext.define( "Ext.overrides.field.FileButton", {
    "override": "Ext.field.FileButton",

    clearFiles ( suspendEvents ) {
        if ( suspendEvents === undefined ) suspendEvents = true;

        if ( suspendEvents ) this.suspendEvent( "change" );

        this.setValue( "" );
        this.buttonElement.dom.value = "";

        if ( suspendEvents ) this.resumeEvent( "change" );
    },
} );
