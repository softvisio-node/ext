// framework

import "#ext/ext.css";
import "#ext/css-vars.js";
import "#ext/ext.js";

// styles
import "./1.css";
import "./froala.css";

// components
import "./Ext.Avatar.js";
import "./Ext.Date.js";
import "./Ext.data.field.BigInteger.js";
import "./Ext.data.proxy.Softvisio.js";
import "./Ext.data.validator.Custom.js";
import "./Ext.data.validator.PasswordStrength.js";
import "./Ext.dataview.plugin.AutoPaging.js";

// override
import "./Ext.override.Dialog.js";
import "./Ext.override.Progress.js";
import "./Ext.override.Video.js";
import "./Ext.override.data.AbstractStore.js";
import "./Ext.override.data.ProxyStore.js";
import "./Ext.override.data.Store.js";
import "./Ext.override.data.operation.Operation.js";
import "./Ext.override.data.virtual.Store.js";
import "./Ext.override.field.ComboBox.js";
import "./Ext.override.field.Date.js";
import "./Ext.override.field.Display.js";
import "./Ext.override.field.FieldGroupContainer.js";
import "./Ext.override.field.FileButton.js";
import "./Ext.override.field.Number.js";
import "./Ext.override.field.TextArea.js";
import "./Ext.override.field.Time.js";
import "./Ext.override.froala.Editor.js";
import "./Ext.override.froala.EditorField.js";
import "./Ext.override.panel.TimeView.js";
import "./Ext.override.util.Format.js";

Ext.manifest.material = Ext.manifest.material || {};
Ext.manifest.material.toolbar = Ext.manifest.material.toolbar || {};
Ext.manifest.material.toolbar.dynamic = true;
