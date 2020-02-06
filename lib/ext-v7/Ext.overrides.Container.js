Ext.define( "Ext.overrides.Container", {
    "override": "Ext.Container",

    add ( newItems ) {
        return this.callParent( arguments );
    },
} );
