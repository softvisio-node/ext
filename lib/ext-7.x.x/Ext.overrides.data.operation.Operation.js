Ext.define( "Ext.overrides.data.operation.Operation", {
    "override": "Ext.data.operation.Operation",

    getResult () {
        if ( this.hasException() ) {
            return this.getError();
        }
        else {
            return this.getResponse();
        }
    },

    toString () {
        return this.getResult()?.statusText;
    },
} );
