({
    block : 'page',
    title : 'Reverbrain',
    favicon : 'favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' },
        { elem : 'css', url : '//fonts.googleapis.com/css?family=Open+Sans:700,400,300' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content : {
        elem: 'inner',
        content : [
            [
                {
                    name : 'reverbrain',
                    title : 'Reverbrain',
                    shortDesc : 'Distributed Storage Systems',
                    description : [
                        'Technologies for building petabyte scale fault-tolerant clusters.',
                        { tag: 'br' },
                        'From couple of servers to hundreds of nodes with billions of objects.'
                    ],
                    nav : [
                        {
                            url: '#elliptics',
                            anchor: [
                                { block : 'logo', mods : { tech : 'elliptics' } },
                                'elliptics'
                            ]
                        },
                        {
                            url: '#eblob',
                            anchor: [
                                { block : 'logo', mods : { tech : 'eblob' } },
                                'eblob'
                            ]
                        },
                        {
                            url: '#rift',
                            anchor: [
                                { block : 'logo', mods : { tech : 'rift' } },
                                'rift/backrunner'
                            ]
                        }
                    ]
                },
                {
                    name : 'elliptics',
                    title : 'Elliptics',
                    shortDesc : 'Fault tolerant distributed storage for medium and large data.',
                    description : [
                        {
                            tag: 'p',
                            content: 'The network does not use dedicated servers to maintain the metadata information, it supports redundant objects storage. Small to medium sized write benchmarks can be found on eblob page.'
                        },
                        {
                            tag: 'p',
                            content: [
                                'Distributed hash table design allows not to use dedicated metadata servers which frequently become points of failure in the classical storages, instead user can connect to any server in the network and all requests will be forwarded to the needed nodes.',
                                'One can lookup the needed server and connect there directly to get data.'
                            ]
                        },
                        {
                            tag: 'p',
                            content: 'Elliptics can be called a cloud of losely connected equivalent nodes. Joining node will automatically connect to the needed servers according to the network topology, it can store data in different configurable backends like file IO storage, eblob backend. One can create own IO storage backend.'
                        },
                        {
                            tag: 'p',
                            content: 'Protocol allows to implement own data storage using specific features for the deploying project and generally extend data communication with infinite number of the extensions. One of the implemented examples is remote command execution, which can be used as a load balancing job manager.'
                        }
                    ],
                    nav : [
                        {
                            url: 'http://doc.reverbrain.com/elliptics:elliptics',
                            anchor: 'docs'
                        },
                        {
                            url: 'https://github.com/reverbrain/elliptics',
                            anchor: 'github'
                        },
                        {
                            url: 'https://groups.google.com/forum/?fromgroups=#!forum/reverbrain',
                            anchor: 'discussion'
                        }
                    ]
                },
                {
                    name : 'eblob',
                    title : 'Eblob',
                    shortDesc : 'High-performance low-level append storage.',
                    description : [
                        {
                            tag: 'p',
                            content: 'Eblob is a low-level local append-overwrite (configurable) storage system. It combines fast read/write performance with configuration simplicity and rich feature set. Its main goal was to provide bullet-proof low-level backend for Elliptics distributed storage (this is default backend now).'
                        },
                        {
                            tag: 'p',
                            content: 'Eblob is an append-only low-level IO library, which saves data in blob files. Elliptics uses it as one of its low-level IO backends.'
                        }
                    ],
                    nav : [
                        {
                            url: 'http://doc.reverbrain.com/eblob:eblob',
                            anchor: 'docs'
                        },
                        {
                            url: 'https://github.com/reverbrain/eblob',
                            anchor: 'github'
                        },
                        {
                            url: 'https://groups.google.com/forum/?fromgroups=#!forum/reverbrain',
                            anchor: 'discussion'
                        }
                    ]
                },
                {
                    name : 'rift',
                    title : 'Rift/backrunner',
                    shortDesc : 'Http proxy for elliptics distributed storage with ACL and streaming support.',
                    description : [
                        {
                            tag: 'p',
                            content: 'Rift is HTTP frontend to elliptics with excessive set of features like S3-like buckets (each can have own groups to store data and ACLs), persistent caching and so on. It is built on top of thevoid HTTP framework. Although rift can be used as stand-alone web server, it is usually better to put it behind balancing web server like Nginx. You can check a small (a little bit outdated though) tutorial on how to setup former thevoid elliptics server behind Nginx.'
                        },
                        {
                            tag: 'p',
                            content: 'Rift as well as thevoid is completely asynchronous and because of that server extensions might look complex to write, but actually they are not. Here is a documentation of the currently supported features. They are written as list of so called handlers - URI parts which are detected by the server, and then processed in the code.'
                        },
                        {
                            tag: 'p',
                            content: 'Backrunner is a new swiss-knife HTTP proxy for Elliptics distributed storage. It supports ACL, automatic bucket selection based on disk and network speed, errors, amount of free space, automatic defragmentation, header extension, local static files handling and provides simple REST API for clients.'
                        }
                    ],
                    nav : [
                        {
                            url: 'http://doc.reverbrain.com/rift:rift',
                            anchor: 'docs'
                        },
                        {
                            url: 'https://github.com/bioothod/backrunner',
                            anchor: 'github'
                        },
                        {
                            url: 'https://groups.google.com/forum/?fromgroups=#!forum/reverbrain',
                            anchor: 'discussion'
                        }
                    ]
                }
            ].map(function(section) {
                    return {
                        block: 'section',
                        mods: { type: section.name },
                        content: [
                            { block : 'logo', mods : { tech : section.name }, mix : { block : 'section', elem : 'watermark' } },
                            {
                                elem : 'inner',
                                content : [
                                    { block : 'logo', mods : { tech : section.name }, mix : { block : 'section', elem : 'logo' } },
                                    { block : 'heading', mods : { level : 1 }, content : section.title },
                                    { block : 'heading', mods : { level : 3 }, content : section.shortDesc },
                                    Array.isArray(section.nav) ? {
                                        elem : 'nav',
                                        content : section.nav.map(function(link) {
                                            return {
                                                elem : 'nav-item',
                                                content : link && { block : 'link', url : link.url, content : link.anchor }
                                            };
                                        })
                                    } : '',
                                    { elem : 'description', content : section.description }
                                ]
                            }
                        ]
                    };
                }),
            {
                block: 'section',
                mods: { type: 'about' },
                content: [
                    ['reverbrain', 'eblob', 'elliptics', 'rift'].map(function(value) {
                        return {
                            block : 'section', elem : 'watermark',
                            content : { block : 'logo', mods : { tech : value } }
                        };
                    }),
                    {
                        elem : 'inner',
                        content : [
                            {
                                block : 'heading',
                                mods : { level : 1 },
                                content : 'About'
                            },
                            {
                                block : 'heading',
                                mods : { level : 3 },
                                content : 'Mission'
                            },
                            {
                                elem : 'description',
                                content : [
                                    {
                                        tag : 'p',
                                        content : 'Our mission is to create a true way solution for the wide variety of storage and computation problems we see every day. We created the whole stack of technologies ranging from the lowest level of data storage upto high-level processing pipeline.'
                                    },
                                    {
                                        tag : 'p',
                                        content : 'Time moves on and we see how complex is to deal with massively increasing amounts of data. We provide solutions for true-way horizontal scaling with fair system complexity. Our storage appliances lay in the area where one has to host multi-millions to billions of small-to-medium objects upto huge data streaming systems.'
                                    },
                                    {
                                        tag : 'p',
                                        content : 'Your data should nost just lay in archive in the distributed system — realtime pipeline processing is our vision of how data has to be handled. We use them by ourself and want to provide the best experience for our customers.'
                                    }
                                ]
                            },
                            {
                                block : 'heading',
                                mods : { level : 3 },
                                content : 'Vision'
                            },
                            {
                                elem : 'description',
                                content : [
                                    {
                                        tag : 'p',
                                        content : 'Every day brings us more and more complex situations where our decisions are based on previous experience and current situation. We build our business on the ever growing demand for scalable storage and data processing solutions.'
                                    },
                                    {
                                        tag : 'p',
                                        content : [
                                            'We see how requirements are changed and match them in our products.',
                                            'Our data storage solutions grow with client’s business, we create frameworks to process stored and new data and design new systems to spread the horizons.'
                                        ]
                                    }
                                ]
                            },
                            {
                                block : 'heading',
                                mods : { level : 3 },
                                content : 'Contacts'
                            },
                            {
                                elem : 'description',
                                content : {
                                    block : 'link',
                                    url : 'mailto:info@reverbrain.com',
                                    content : 'info@reverbrain.com'
                                }
                            }
                        ]
                    },
                    {
                        elem : 'footer',
                        content : '© Reverbrain'
                    }
                ]
            },
            {
                elem : 'nav', elemMods : { prev : true }, attrs : { title : 'Previous slide' },
                content : { elem : 'text' }
            },
            {
                elem : 'nav', elemMods : { next : true }, attrs : { title : 'Next slide' },
                content : { elem : 'text' }
            }
        ]
    }
})
