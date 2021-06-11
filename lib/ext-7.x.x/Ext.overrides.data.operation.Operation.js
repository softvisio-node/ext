Ext.define( "Ext.overrides.data.operation.Operation", {
    "override": "Ext.data.operation.Operation",

    toString () {
        return this.getStatus() + " " + this.getStatusText();
    },

    // TODO
    // toResult () {
    //     return APP.getApplication().api.result( [this.getStatus(), this.getStatusText()] );
    // },

    getStatus () {
        if ( this.hasException() ) {
            var error = this.getError();

            if ( Ext.typeOf( error ) === "object" ) {
                return error.status;
            }
            else {

                // TODO get and return XHR status
                return 500;
            }
        }
        else {
            return this.getResponse().status;
        }
    },

    getStatusText () {
        if ( this.hasException() ) {
            var error = this.getError();

            if ( Ext.typeOf( error ) === "object" ) {
                return error.response.statusText;
            }
            else {
                return error;
            }
        }
        else {
            return this.getResponse().statusText;
        }
    },

    getFormErrors () {
        var error = this.getError();

        if ( Ext.typeOf( error ) === "object" && Ext.typeOf( error.error ) === "object" ) {
            return error.error;
        }
        else {
            return;
        }
    },
} );
