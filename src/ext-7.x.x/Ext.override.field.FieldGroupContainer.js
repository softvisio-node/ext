Ext.define( null, {
    "override": "Ext.field.FieldGroupContainer",

    "twoWayBindable": {
        "value": 1,
    },

    "publishes": {
        "value": 1,
    },

    "onGroupChange": function () {
        var newVal, oldVal;

        if ( this.isConfiguring || this.isDestructing() || this.suspendCheckChange ) {
            return;
        }

        newVal = this.getValue();
        oldVal = this.lastValue || this.originalValue;

        if ( !this.isEqual( newVal, oldVal ) ) {
            this.lastValue = newVal;

            // notify viewmodel
            this.publishState( "value", newVal );

            this.fireEvent( "change", this, newVal, oldVal );
            this.validate();
        }
    },
} );
