require( "../share/ext-v7.2.0.60/ext.css" );
require( "../share/ext-v7.2.0.60/css-vars" );
const Ext = require( "../share/ext-v7.2.0.60/ext" );

module.exports = Ext;

// overrides
require( "./ext-v7/Ext.data.proxy.Softvisio" );

require( "./ext-v7/Ext.overrides.Container" );

require( "./ext-v7/Ext.overrides.data.AbstractStore" );
require( "./ext-v7/Ext.overrides.data.Model" );
require( "./ext-v7/Ext.overrides.data.operation.Operation" );
require( "./ext-v7/Ext.overrides.data.ProxyStore" );

require( "./ext-v7/Ext.overrides.field.ComboBox" );
require( "./ext-v7/Ext.overrides.field.Display" );
require( "./ext-v7/Ext.overrides.field.TextArea" );

require( "./ext-v7/Ext.overrides.util.Format" );
require( "./ext-v7/Ext.overrides.util.Sorter" );
