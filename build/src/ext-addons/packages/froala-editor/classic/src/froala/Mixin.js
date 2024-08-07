/**
 * Private class used by {@link Ext.froala.Editor} and {@link Ext.froala.EditorField}.
 * If you use this mixin, your class must override component methods handed here:
 * - doAddListener -> handleAddListener
 * - doRemoveListener -> handleRemoveListener
 * - updateValue
 * See source for Ext.froala.Editor or EditorField for examples.
 */
Ext.define('Ext.froala.Mixin', {
    extend: 'Ext.Mixin',

    twoWayBindable: ['value'],
    defaultBindProperty: 'value',

    config: {
        /**
         * @cfg {String} activationKey The Froala activation key. If specified, this
         * take precedence over the activation key configured in your application's
         * `app.json`.
         */
        activationKey: undefined,

        /**
         * @cfg {Object} defaultEditor The default Froala editor configs passed to the Froala
         * constructor. This value is merged with the {@link #editor} config you specify. This can
         * only be specified at time of creation and cannot be set later.
         */
        defaultEditor: {
            iconsTemplate: 'font_awesome_5'
        },

        /**
         * @cfg {String} value
         * The text content of the editor.
         */
        value: '',

        /**
         * A Froala config object as documented at
         * https://www.froala.com/wysiwyg-editor/docs/options
         * This config is set once, upon creation of the FroalaEditor and cannot be updated later.
         * The most commonly provided value is `toolbarButtons`, which defaults to
         * editor: {
         *    toolbarButtons: {
         *     'moreText': {
         *     'buttons': ['bold', 'italic', 'underline', 'strikeThrough',
         *       'subscript', 'superscript', 'fontFamily',
         *       'fontSize', 'textColor', 'backgroundColor', 'inlineClass',
         *       'inlineStyle', 'clearFormatting'
         *      ]
         *     },
         *     'moreParagraph': {
         *       'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight',
         *           'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle',
         *           'lineHeight', 'outdent', 'indent', 'quote'
         *        ]
         *     },
         *   'moreRich': {
         *     'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable',
         *       'emoticons', 'fontAwesome', 'specialCharacters', 'embedly',
         *       'insertFile', 'insertHR'
         *      ]
         *   },
         *   'moreMisc': {
         *     'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker',
         *       'selectAll', 'html', 'help'
         *      ],
         *     'align': 'right',
         *     'buttonsVisible': 2
         *   }
         * }
         * }
         */
        editor: {}
    },

    ariaRole: 'texteditor',

    /**
     * @property {Boolean} isFroalaEditor
     * Identifies this class and its subclasses.
     * @readonly
     */
    isFroalaEditor: true,

    /**
     * @property {Boolean} isReady
     * Flags whether the Froala editor instance has been initialized. Initialization
     * happens automatically when the component is created, but takes several milliseconds.
     * Upon initialization, the {@link #event-ready} event is fired.
     * @readonly
     */
    isReady: false,

    onFroalaContentChanged: function() {
        var me = this;

        if (Ext.isFunction(me.publishValue)) {
            me.publishValue();
        }
        else {
            me.setValue(me.getEditor().html.get());
        }
    },

    createFroalaEditor: function(config, froalaEl) {
        var me = this,
            defaultConfig = me.getDefaultEditor(),
            options,
            froalaEditor,
            value,
            key = Ext.manifest.froala,
            froalaEditorDomElement = froalaEl || me.getFroalaEditorDomElement(),
            bufferedChangedEvent = Ext.Function.createBuffered(me.onFroalaContentChanged, 50, me);

        // bufferedChangedEvent avoids running the change event more often than necessary.

        options = Ext.merge(me.getEditor(), defaultConfig);

        if (config.events) {
            options.events = config.events;
        }

        key = me.getActivationKey() || (key && key['activation-key']);

        if (key) {
            options.key = key;
        }

        froalaEditor = new FroalaEditor(froalaEditorDomElement, options, function() {
            value = config.value || me.getValue();
            froalaEditor.component = me;
            me.monitorConfiguredListeners();
            froalaEditor.isReady = true;
            me.fireEvent('ready', me, froalaEditor);
            froalaEditor.events.on('contentChanged', bufferedChangedEvent);
            froalaEditor.html.set(value);

            if (!me.activeErrorsTpl && me.xtype === 'froalaeditorfield') {
                me.activeErrorsTpl = me.htmlActiveErrorsTpl;
                me.setActiveError(config.activeError);
            }

            me.initialValue = me.originalValue = me.lastValue = value;
        });
        froalaEditor.isReady = false;

        return froalaEditor;
    },

    updateValue: function(value) {
        var me = this,
            editor = me.getEditor(),
            editorValue;

        if (editor && editor.isReady) {
            me.fireEvent('change', me, value);
            editorValue = editor.snapshot.get().html || editor.html.get();
            // The value won't change if it came from
            // onFroalaContentChanged. Otherwise, someone
            // ran setValue() on the component and the
            // editor's html has to reflect that.

            if (value !== editorValue) {
                editor.html.set(value);

                if (Ext.isFunction(me.publishValue)) {
                    me.publishValue();
                }
            }
        }
    },

    updateDisabled: function(disabled) {
        var editor = this.getEditor();

        if (editor) {
            editor.edit[disabled ? 'off' : 'on']();
        }
    },

    privates: {
        /**
         * Set up Froalaq events specified in the listeners:{} block. 
         * For non-Froala events, using listeners:{} works fine. But 
         * for Froala events, we have to wait until aftr the Froala 
         * instance is created before we can add listeners to it. This
         * method is run one time, immediately after the Froala 
         * instance has been created.
         */
        monitorConfiguredListeners: function(froalaEditor) {
            // Assert: froalaListenersConfig has been inialized with 
            // the original Froala event names (which may be camel-case).

            // By the time we get here, the ExtJS framework takes the
            // names from listeners:{} and puts then into hasListeners,
            // which are all lower case. froalaListenersConfigNames maps
            // the lowercase name to the original name

            var me = this,
                originalName,
                eventNames = Object.keys(me.hasListeners);

            eventNames.forEach(function(event) {
                if (me.isFroalaEvent(event)) {
                    originalName = me.froalaListenersConfigNames[event];
                    me.setupListener(originalName);
                }
            });
        },

        froalaNamePrefixRe: /froala\./,

        /**
         * @param {String} event - The event name being checked.
         * @returns {Boolean} true if the event is a Froala event.
         */
        isFroalaEvent: function(event) {
            return !!event.match(this.froalaNamePrefixRe);
        },

        translateFroalaEventName: function(event) {
            return event.replace(this.froalaNamePrefixRe, '');
        },

        setupListener: function(event) {
            var me = this,
                froalaEditor = me.getEditor(),
                translatedFroalaEventName,
                froalaEventsBeingMonitored;

            // This method is called from two places:
            // - When a listener is added procedurally, via on(), after the
            //   Froala editor instance exists.
            // - One time immediately after the Froala editor instance is
            //   created, in order to add the items in listeners:{}
            // 
            // Upon entry, the event has already been added to this Observable.
            // But for Froala events, we need to add a listener to the Froala
            // instance. If it's not a Froala event, just ignore it and the
            // event will get fired in the normal way. 

            if (!me.isFroalaEvent(event)) {
                return;
            }

            // Add the event to Froala, passing an event handler. The handler
            // simply fires the event via Observable. That means we only need
            // to setup the Froala event once. The flow is: Froala detects the
            // event, Froala calls the one event handler which then fires the
            // event, and Observable takes care of informing all listeners.

            froalaEventsBeingMonitored = me.getFroalaEventsBeingMonitored();

            if (!froalaEventsBeingMonitored[event]) {
                translatedFroalaEventName = me.translateFroalaEventName(event);
                froalaEditor.events.on(translatedFroalaEventName, createHandler(event, me));
                froalaEventsBeingMonitored[event] = true;
            }

            function createHandler(name) {
                // Return the froala event handler. The event handler simply
                // fires the component event via fireEventArgs(), using the
                // name in closure scope. This component is passed as the
                // first argument, followed by the Froala arguments.
                return function() {
                    var args = Array.prototype.slice.call(arguments);

                    args.unshift(me);
                    me.fireEventArgs(name, args);
                };
            }
        },

        handleAddListener: function(ename) {
            var me = this,
                froalaEditor,
                isBeingRunFromListenersConfig;

            if (!me.isFroalaEvent(ename)) {
                return;
            }

            // This method is called by the overridden doAddListener
            // from Editor or EditorField. It's run whenever a listener
            // is being added, either via a listeners:{} config or via
            // view.on(). If this is called after initialization (and
            // froalaEditor.isReady is true), then set up the Foala 
            // listener with the editor instance. But if it's run via 
            // the component config, and therefore, before the editor
            // exists, then we need to remember the event name and add
            // it later, after the editor is created. That's done in
            // monitorConfiguredListeners().

            froalaEditor = me.getEditor();
            isBeingRunFromListenersConfig = !(froalaEditor && froalaEditor.isReady);

            if (isBeingRunFromListenersConfig) {
                // ename may be camel-case. But when ExtJS initialized listeners:{}
                // and updates hasListeners, those events are changed to lowercase.
                // Therefore, save the lowercase name and associate it with the original
                // name.
                me.froalaListenersConfigNames[ename.toLowerCase()] = ename;
            }
            else {
                me.setupListener(ename);
            }
        },
        froalaListenersConfigNames: {},

        handleRemoveListener: function(ename) {
            var me = this,
                froalaEditor = me.getEditor();

            if (!(froalaEditor && froalaEditor.isReady)) {
                return;
            }

            // If this is an event we're monitoring on the Froala instance,
            // but there are no longer any listeners, then tell Froala to stop
            // monitored.
            if (me.isFroalaEvent(ename)) {
                if (!me.hasListeners[ename]) {
                    // TODO: A future release of Froala will have an "off()" event,
                    // used to remove an event listener. When that's addded, use
                    // this code to clean up listeners. This is un-tested code.

                    // froalaEditor.events.off(ename);
                    delete me.getFroalaEventsBeingMonitored()[ename];
                }
            }
        },

        getFroalaEventsBeingMonitored: function() {
            return (this.froalaEventsBeingMonitored = this.froalaEventsBeingMonitored || {});
        }
    },

    getFroalaEditorDomElement: function() {
        Ext.raise('getFroalaEditorDomElement must be overridden in the class using froala/Mixins');
    }
});
