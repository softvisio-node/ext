Ext.define( "Ext.overrides.froala.Mixin", {
    "override": "Ext.froala.Mixin1",

    "config": {
        "defaultEditor": {
            "attribution": false, // removes "powered by froala"
            "charCounterCount": false,
            "iconsTemplate": "font_awesome_5",
            "placeholderText": null,
            "events": {

                // insert image as data url
                "image.beforeUpload": function ( files ) {
                    var editor = this;

                    if ( files.length ) {

                        // create a File Reader.
                        var reader = new FileReader();

                        // set the reader to insert images when they are loaded.
                        reader.onload = function ( e ) {
                            var result = e.target.result;

                            editor.image.insert( result, null, null, editor.image.get() );
                        };

                        // read image as base64.
                        reader.readAsDataURL( files[0] );
                    }
                    editor.popups.hideAll();

                    // stop default upload chain.
                    return false;
                },
            },
        },
    },

    onFroalaContentChanged () {
        this.setValue( this._clearValue( this.getEditor().html.get() ) );
    },

    updateValue ( value ) {
        var me = this,
            editor = this.getEditor(),
            editorValue;

        if ( editor && editor.isReady ) {
            editorValue = this._clearValue( editor.html.get() );
            me.fireEvent( "change", me, value );

            // The value won't change if it came from
            // onFroalaContentChanged. Otherwise, someone
            // ran setValue() on the component and the
            // editor's html has to reflect that.

            if ( value !== editorValue ) {
                editor.html.set( value );
            }
        }
    },

    "privates": {
        _clearValue ( value ) {
            return value.replace( /<p data-f-id="pbf".+?<\/p>$/, "" ).trim();
        },
    },
} );
