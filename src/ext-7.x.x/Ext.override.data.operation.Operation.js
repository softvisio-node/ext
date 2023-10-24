Ext.define( null, {
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
