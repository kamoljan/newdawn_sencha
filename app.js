//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'Twitter',
    requires: ['Twitter.proxy.Twitter'],

    profiles: ['Phone', 'Tablet'],
    models: ['Search', 'Tweet'],
    stores: ['Searches'],

    startupImage: {
        '320x460': 'resources/startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },

    isIconPrecomposed: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@144.png'
    },

    launch: function() {

//        Ext.Viewport.add([
//            {
//                id: 'currentFPS',
//                xtype: 'component',
//                bottom: 0,
//                right: 0,
//                width: 50,
//                height: 50,
//                style: 'background-color: red; color: white;'
//            }, {
//                id: 'averageFPS',
//                xtype: 'component',
//                bottom: 0,
//                left: 0,
//                width: 50,
//                height: 50,
//                style: 'background-color: green; color: white;'
//            }
//        ]);
//
//        var fpsIndicator = Ext.getCmp('currentFPS'),
//            fpsAverage = Ext.getCmp('averageFPS'),
//            fpsCount = 0,
//            fpsSum = 0;
//
//
//        Ext.AnimationQueue.onFpsChanged = function(fps) {
//            fpsCount++;
//            fpsSum += fps;
//            fpsIndicator.setHtml(Math.round(fps));
//            fpsAverage.setHtml(Math.round(fpsSum / fpsCount));
//        };

        Ext.getBody().removeCls('loading');
    }
});

