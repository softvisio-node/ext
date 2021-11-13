Ext.define( "Ext.dataview.plugin.AutoPaging", {
    "extend": "Ext.dataview.plugin.ListPaging",
    "alias": "plugin.autopaging",
    "alternateClassName": "Ext.plugin.AutoPaging",

    "config": {
        "autoPaging": true,
        "loadMoreText": "",
        "noMoreRecordsText": "",
    },

    storeFullyLoaded () {
        const store = this.cmp.getStore();

        if ( !store ) return false;

        const total = store.getTotalCount(),
            requestedRows = store.currentPage * store.getPageSize();

        if ( !total ) {
            return requestedRows > total;
        }
        else {
            const next = store.getMeta()?.next;

            if ( next == null ) return false;
            else return !next;
        }
    },
} );
