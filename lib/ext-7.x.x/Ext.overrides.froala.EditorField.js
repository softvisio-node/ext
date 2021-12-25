Ext.define( "Ext.overrides.froala.EditorField", {
    "override": "Ext.froala.EditorField",

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
                        reader.readAsDataURL( files[0] );
                    }

                    this.popups.hideAll();

                    // stop default upload chain.
                    return false;
                },
            },
        },
    },
} );
