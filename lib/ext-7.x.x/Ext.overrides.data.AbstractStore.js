Ext.define( "Ext.overrides.data.AbstractStore", {
    "override": "Ext.data.AbstractStore",

    "config": {
        "pageSize": 100,
        "remoteSort": true,
        "remoteFilter": true,
        "autoLoadOnFilter": false,
    },

    onFilterEndUpdate () {
        this.callParent( arguments );

        const suppressNext = this.suppressNextFilter,
            filters = this.getFilters( false );

        if ( !filters || !this.getRemoteFilter() || suppressNext ) return;

        if ( this.getAutoLoadOnFilter() && !this.isLoaded() && !this.getAutoLoad() ) this.load();
    },
} );
