Ext.define( "Ext.overrides.data.Store", {
    "override": "Ext.data.Store",

    onProxyLoad ( operation ) {
        if ( this.destroyed ) return;

        const resultSet = operation.getResultSet(),
            successful = operation.wasSuccessful();

        // store last metadata before fire store "load" event
        if ( successful && resultSet?.metadata ) this.metadata = resultSet.metadata;

        this.callParent( arguments );
    },
} );
