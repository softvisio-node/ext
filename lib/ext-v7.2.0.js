require( "../share/ext-v7.2.0.55/ext.css" );
require( "../share/ext-v7.2.0.55/css-vars" );
const Ext = require( "../share/ext-v7.2.0.55/ext" );

module.exports = Ext;

// ext
require( "./ext-v7/Ext.data.proxy.Softvisio" );
require( "./ext-v7/Ext.overrides.data.Model" );
require( "./ext-v7/Ext.overrides.data.AbstractStore" );
require( "./ext-v7/Ext.overrides.util.Sorter" );
require( "./ext-v7/Ext.overrides.data.operation.Operation" );
require( "./ext-v7/Ext.overrides.util.Format" );
require( "./ext-v7/Ext.overrides.field.ComboBox" );
require( "./ext-v7/Ext.overrides.field.TextArea" );
require( "./ext-v7/Ext.overrides.data.ProxyStore" );
require( "./ext-v7/Ext.overrides.Container" );

// ewc
require( "./ewc-v7/Ext.form.TextArea" );
