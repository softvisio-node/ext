Ext.define( "Ext.overrides.Progress", {
    "override": "Ext.Progress",

    updateValue ( newValue, oldValue ) {
        this.callParent( arguments );

        if ( newValue !== oldValue ) this.fireEvent( "change", this, newValue, oldValue );
    },

    setColor ( color ) {
        this.el.child( ".x-progress-bar", true ).style.backgroundColor = color || "";
    },
} );
