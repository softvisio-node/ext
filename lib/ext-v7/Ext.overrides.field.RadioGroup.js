Ext.define( "Ext.overrides.field.RadioGroup", {
    "override": "Ext.field.RadioGroup",

    "twoWayBindable": {
        "value": 1,
    },

    "publishes": {
        "value": 1,
    },

    "onGroupChange": function () {
        var me = this,
            newVal,
            oldVal;

        if ( me.isConfiguring || me.isDestructing() || me.suspendCheckChange ) {
            return;
        }

        newVal = me.getValue();
        oldVal = me.lastValue || me.originalValue;

        if ( !me.isEqual( newVal, oldVal ) ) {
            me.lastValue = newVal;

            // notify viewmodel
            me.publishState( "value", newVal );

            me.fireEvent( "change", me, newVal, oldVal );
            me.validate();
        }
    },
} );
