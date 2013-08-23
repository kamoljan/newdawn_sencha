/*
 * @class Twitter.view.SearchBar
 * @extends Ext.Toolbar
 *
 * Contains the textfield required to perform twitter searchs.
 */
Ext.define('Twitter.view.SearchBar', {
    extend: 'Ext.Toolbar',
    xtype : 'searchbar',
    requires: ['Ext.field.Text', 'Ext.field.Search'],

    config: {
        ui: 'searchbar',
        layout: 'vbox',
        cls: 'big',
        height: '4.7em',

        items: [
            {
                xtype: 'title',
                title: 'YoGlam Search'
            },
            {
                xtype: 'searchfield',
                placeHolder: 'Search...'
            }
        ]
    }
});
