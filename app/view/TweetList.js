/**
* The TweetList component is a simple dataview which is used to display the
* tweets returned by the twitter search. It also has a toolbar docked at the
* top which is used in phones to display a back button.
*
* The {@link #defaultType} is a tweetlistitem.
*/
Ext.define('Twitter.view.TweetList', {
    extend: 'Ext.dataview.List',
    xtype: 'tweetlist',
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging'
    ],

    config: {
        ui           : 'timeline',
        allowDeselect: false,
        useSimpleItems: true,
        variableHeights: true,
        infinite: true,
        emptyText: 'No tweets found.',

        itemTpl: [
            '<div class="tweet <tpl if=\'metadata && metadata.result_type && metadata.result_type == \"popular\"\'>popular</tpl>">',
                '<img class="avatar" src="http://sushi.yoglam.com/{image}" width="48px" height="48px" />',
                '<div class="username">{subject}</div>',
                '<div class="text">{price}</div>',
            '</div>'
        ],

        plugins: [
            'pullrefresh',
            {
                type: 'listpaging',
                autoPaging: true
            }
        ],

        items: [
            {
                docked: 'top',
                xtype : 'toolbar',
                hidden: true,
                ui    : 'searchbar',
                items: [
                    {
                        xtype: 'button',
                        ui   : 'back',
                        text : 'Searches'
                    }
                ]
            }
        ]
    }
});
