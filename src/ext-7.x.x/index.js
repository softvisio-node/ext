// framework

import "#ext/ext.css";
import "#ext/css-vars.js";
import "#ext/ext.js";

// styles
import "./1.css";
import "./froala.css";

// components
import "./Ext.Date.js";
import "./Ext.data.field.BigInteger.js";
import "./Ext.data.proxy.Softvisio.js";
import "./Ext.data.validator.Custom.js";
import "./Ext.data.validator.PasswordStrength.js";
import "./Ext.dataview.plugin.AutoPaging.js";

// overrides
import "./Ext.overrides.Dialog.js";
import "./Ext.overrides.Progress.js";
import "./Ext.overrides.Video.js";
import "./Ext.overrides.data.AbstractStore.js";
import "./Ext.overrides.data.ProxyStore.js";
import "./Ext.overrides.data.Store.js";
import "./Ext.overrides.data.operation.Operation.js";
import "./Ext.overrides.data.virtual.Store.js";
import "./Ext.overrides.field.ComboBox.js";
import "./Ext.overrides.field.Date.js";
import "./Ext.overrides.field.Display.js";
import "./Ext.overrides.field.FieldGroupContainer.js";
import "./Ext.overrides.field.FileButton.js";
import "./Ext.overrides.field.Number.js";
import "./Ext.overrides.field.TextArea.js";
import "./Ext.overrides.field.Time.js";
import "./Ext.overrides.froala.Editor.js";
import "./Ext.overrides.froala.EditorField.js";
import "./Ext.overrides.panel.TimeView.js";
import "./Ext.overrides.util.Format.js";
import "./Ext.overrides.util.Sorter.js";

Ext.manifest.material = Ext.manifest.material || {};
Ext.manifest.material.toolbar = Ext.manifest.material.toolbar || {};
Ext.manifest.material.toolbar.dynamic = true;
