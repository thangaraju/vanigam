Ext.application({
    name: 'HV',
    appFolder: 'app',
    controllers: [
        'Products',
        'Header'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
              {
                region: 'north',
                xtype: 'headernavigation'
/*                ,height: 50,
                dockedItems: [{
                  xtype: 'toolbar',
                  dock: 'bottom',
                  items: [
                      { xtype: 'button', text: 'Button 1' }
                  ]
                }]*/
              }, {
                region: 'south',
                xtype: 'panel',
                height: 50,
                html: '<h1 class="x-panel-header">Footer links</h1>'
              }, {
                region: 'west',
                xtype: 'panel',
                autoHeight: true,
                width: 200,
                layout:'accordion',
                title: 'Navigation',
                collapsible: true,
                layoutConfig: {
                    // layout-specific configs go here
                    titleCollapse: false,
                    animate: true,
                    activeOnTop: true
                },
                items: [{
                    title: 'Panel 1',
                    html: 'Panel content!'
                },{
                    title: 'Panel 2',
                    html: 'Panel content!'
                },{
                    title: 'Panel 3',
                    html: 'Panel content!'
                }],
              }, {
                region: 'center',
                xtype: 'productlist',
                title: 'Giving Happiness to Retailers',
                html : 'List of retailer activities go here'
              }
            ]
        });
    }
});


function debug() {
  //return;
  if (console && console.log) {
    console.log(arguments);
  }
}
