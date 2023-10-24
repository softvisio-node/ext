Ext.define( null, {
    "override": "Ext.Dialog",

    "config": {
        "closable": true,
        "draggable": false,
        "maskTapHandler": "close",
    },

    handleFocus ( e ) {

        // do not handle focus on froala editor click
        if ( e.target.classList.contains( "fr-element" ) ) return;

        this.callParent( arguments );
    },
} );
