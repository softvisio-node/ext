Ext.define( "Ext.data.field.BigInteger", {
    "extend": "Ext.data.field.Field",

    "alias": [ "data.field.bigint" ],

    "isNumeric": true,
    "isIntegerField": true,
    "numericType": "bigint",

    convert ( v ) {
        if ( typeof v === "bigint" ) {
            return v;
        }
        else if ( v == null ) {
            return this.allowNull
                ? null
                : 0n;
        }
        else {
            try {
                return BigInt( v );
            }
            catch {
                return this.allowNull
                    ? null
                    : NaN;
            }
        }
    },

    getType () {
        return this.numericType;
    },

    sortType ( s ) {

        // If allowNull, null values needed to be sorted last.
        if ( s == null ) {
            s = Infinity;
        }

        return s;
    },
} );
