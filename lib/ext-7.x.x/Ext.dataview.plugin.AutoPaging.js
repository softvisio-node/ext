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
            currentPage = store.currentPage,
            pageSize = store.getPageSize();

        if ( !total ) {
            return total <= currentPage * pageSize;
        }
        else {
            const count = store.getCount();

            return currentPage * pageSize > count;
        }
    },
} );
