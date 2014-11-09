({
    block : 'page',
    title : 'Reverbrain',
    favicon : 'favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        // initial inline styles for the moment when external css is not downloaded yet
        {
            elem: 'css',
            content: [
                '.page {',
                    'background: #366;',
                    'background: radial-gradient(ellipse at 70% 10%, #366 0%, #1c1e26 100%);',
                '}',
                '.section {',
                    'color: #eee;',
                '}',
                '.section_type_reverbrain {',
                    'text-align: center;',
                '}'
            ]
        },
        { elem : 'css', url : '_index.css' },
        { elem : 'css', url : '//fonts.googleapis.com/css?family=Open+Sans:700,400,300' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block: 'section',
            mods: { type: 'reverbrain' },
            content: [
                {
                    block: 'logo'
                },
                {
                    block: 'heading',
                    mods: { level: 2 },
                    content: 'Distributed Storage Systems'
                },
                {
                    elem: 'description',
                    content: [
                        'Technologies for building petabyte scale fault-tolerant clusters.',
                        { tag: 'br' },
                        'From couple of servers to hundreds of nodes with billions of objects.'
                    ]
                },
                {
                    block: 'overview',
                    content: [
                        {
                            elem: 'item',
                            elemMods: { tech: 'elliptics' },
                            content: {
                                block: 'link',
                                url: '#elliptics',
                                content: 'elliptics'
                            }
                        },
                        {
                            elem: 'item',
                            elemMods: { tech: 'eblob' },
                            content: {
                                block: 'link',
                                url: '#eblob',
                                content: 'eblob'
                            }
                        },
                        {
                            elem: 'item',
                            elemMods: { tech: 'rift' },
                            content: {
                                block: 'link',
                                url: '#rift',
                                content: 'rift/backrunner'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mods: { type: 'elliptics' },
            content: [
                {
                    block: 'heading',
                    mods: { level: 1 },
                    content: 'Elliptics'
                },
                {
                    block: 'heading',
                    mods: { level: 3 },
                    content: [
                        'Elliptics network is a fault tolerant distributed key/value storage.',
                        { tag: 'br' },
                        'With default key generation policy it implements hash table object storage.'
                    ]
                },
                {
                    elem: 'nav',
                    content: [
                        {
                            block: 'link',
                            url: 'http://doc.reverbrain.com/elliptics:elliptics',
                            content: 'docs'
                        },
                        {
                            block: 'link',
                            url: 'https://github.com/reverbrain/elliptics',
                            content: 'github'
                        },
                        {
                            block: 'link',
                            url: 'https://groups.google.com/forum/?fromgroups=#!forum/reverbrain',
                            content: 'discussion'
                        }
                    ]
                },
                {
                    elem: 'description',
                    content: [
                        {
                            tag: 'p',
                            content: 'The network does not use dedicated servers to maintain the metadata information, it supports redundant objects storage. Small to medium sized write benchmarks can be found on eblob page.'
                        },
                        {
                            tag: 'p',
                            content: 'Distributed hash table design allows not to use dedicated metadata servers which frequently become points of failure in the classical storages, instead user can connect to any server in the network and all requests will be forwarded to the needed nodes. One can lookup the needed server and connect there directly to get data.'
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mods: { type: 'eblob' },
            content: [
                {
                    block: 'heading',
                    mods: { level: 1 },
                    content: 'Eblob'
                },
                {
                    block: 'heading',
                    mods: { level: 3 },
                    content: [
                        'Eblob is an append-only low-level IO library, which saves data in blob files.'
                    ]
                },
                {
                    elem: 'nav',
                    content: [
                        {
                            block: 'link',
                            url: 'http://doc.reverbrain.com/eblob:eblob',
                            content: 'docs'
                        },
                        {
                            block: 'link',
                            url: 'https://github.com/reverbrain/eblob',
                            content: 'github'
                        },
                        {
                            block: 'link',
                            url: 'https://groups.google.com/forum/?fromgroups=#!forum/reverbrain',
                            content: 'discussion'
                        }
                    ]
                },
                {
                    elem: 'description',
                    content: [
                        {
                            tag: 'p',
                            content: 'Eblob is a low-level local append-overwrite (configurable) storage system. It combines fast read/write performance with configuration simplicity and rich feature set. Its main goal was to provide bullet-proof low-level backend for Elliptics distributed storage (this is default backend now).'
                        },
                        {
                            tag: 'p',
                            content: 'Eblob is an append-only low-level IO library, which saves data in blob files. Elliptics uses it as one of its low-level IO backends.'
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mods: { type: 'rift' },
            content: [
                {
                    block: 'heading',
                    mods: { level: 1 },
                    content: 'Rift/backrunner'
                },
                {
                    block: 'heading',
                    mods: { level: 3 },
                    content: [
                        'Rift is HTTP frontend to elliptics with excessive set of features like S3-like buckets, persistent caching and so on.'
                    ]
                },
                {
                    elem: 'nav',
                    content: [
                        {
                            block: 'link',
                            url: 'http://doc.reverbrain.com/rift:rift',
                            content: 'docs'
                        },
                        {
                            block: 'link',
                            url: 'https://github.com/bioothod/backrunner',
                            content: 'github'
                        },
                        {
                            block: 'link',
                            url: 'https://groups.google.com/forum/?fromgroups=#!forum/reverbrain',
                            content: 'discussion'
                        }
                    ]
                },
                {
                    elem: 'description',
                    content: [
                        {
                            tag: 'p',
                            content: 'It is built on top of thevoid HTTP framework. Although rift can be used as stand-alone web server, it is usually better to put it behind balancing web server like Nginx.'
                        },
                        {
                            tag: 'p',
                            content: 'You can check a small (a little bit outdated though) tutorial on how to setup former thevoid elliptics server behind Nginx.'
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mods: { type: 'about' },
            content: [
                {
                    block: 'heading',
                    mods: { level: 2 },
                    content: 'About'
                },
                {
                    block: 'heading',
                    mods: { level: 3 },
                    content: 'Mission'
                },
                {
                    elem: 'description',
                    content: [
                        {
                            tag: 'p',
                            content: 'Our mission is to create a true way solution for the wide variety of storage and computation problems we see every day. We created the whole stack of technologies ranging from the lowest level of data storage upto high-level processing pipeline.'
                        }
                    ]
                },
                {
                    block: 'heading',
                    mods: { level: 3 },
                    content: 'Vision'
                },
                {
                    elem: 'description',
                    content: [
                        {
                            tag: 'p',
                            content: [
                                'We see how requirements are changed and match them in our products.',
                                'Our data storage solutions grow with client’s business, we create frameworks to process stored and new data and design new systems to spread the horizons.'
                            ]
                        }
                    ]
                },
                {
                    block: 'heading',
                    mods: { level: 3 },
                    content: 'Contacts'
                },
                {
                    tag: 'p',
                    content: 'Find us here'
                },
                {
                    block: 'footer',
                    content: [
                        '© Reverbrain'
                    ]
                }
            ]
        }
    ]
})
