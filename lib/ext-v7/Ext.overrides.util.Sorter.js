Ext.define( "Ext.overrides.util.Sorter", {
    "override": "Ext.util.Sorter",

    // setialize to Array
    serialize () {
        return [this.getProperty(), this.getDirection().toLowerCase()];
    },
} );
