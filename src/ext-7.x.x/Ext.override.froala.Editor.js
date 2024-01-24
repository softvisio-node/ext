const ANCHOR = `<p data-f-id="pbf"`;

Ext.define( null, {
    "override": "Ext.froala.Editor",

    "config": {
        "defaultEditor": {
            "attribution": false, // removes "powered by froala"
            "charCounterCount": false,
            "iconsTemplate": "font_awesome_5",
            "placeholderText": null,
            "events": {

                // insert image as data url
                "image.beforeUpload": function ( files ) {
                    if ( files.length ) {

                        // create a File Reader.
                        var reader = new FileReader();

                        // set the reader to insert images when they are loaded.
                        reader.onload = e => {
                            var result = e.target.result;

                            this.image.insert( result, null, null, this.image.get() );
                        };

                        // read image as base64.
                        reader.readAsDataURL( files[ 0 ] );
                    }

                    this.popups.hideAll();

                    // stop default upload chain.
                    return false;
                },
            },
        },
    },

    onFroalaContentChanged () {
        this.setValue( this.clearValue( this.getEditor().html.get() ) );
    },

    updateValue ( value ) {
        const editor = this.getEditor();

        if ( editor && editor.isReady ) {
            const editorValue = this.clearValue( editor.html.get() );

            this.fireEvent( "change", this, value );

            if ( value !== editorValue ) editor.html.set( value );
        }
    },

    "privates": {
        clearValue ( value ) {
            const idx = value.length < 1000 ? value.indexOf( ANCHOR ) : value.lastIndexOf( ANCHOR );

            if ( idx >= 0 ) {
                value = value.substring( 0, idx ).trim();
            }

            return value;
        },
    },
} );
