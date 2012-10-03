Ext.define('HV.controller.Products', {
    extend: 'Ext.app.Controller',
    views: [
          'product.List',
          'product.Edit'
      ],
      stores: [
        'Products'
      ],
      models: [
        'Product'
      ],
    init: function() {
        debug('Initialized Products! This happens before the Application launch function is called');
        this.control({
            'viewport > grid': {
                render: this.onPanelRendered
            },
            'productlist': {
                itemdblclick: this.editProduct
            },
            'productedit button[action=save]': {
                click: this.updateProduct
            }
        });
    },
    onPanelRendered: function() {
        debug('The panel was rendered');
    },
    editProduct: function(grid, record) {
        debug('Double clicked on ' + record.get('name'));
        var view = Ext.widget('productedit');
        view.down('form').loadRecord(record);
    },
    updateProduct: function(button) {
      debug('clicked the Save button');
      var win    = button.up('window'),
          form   = win.down('form'),
          record = form.getRecord(),
          values = form.getValues();
      record.set(values);
      win.close();
      this.getProductsStore().sync();
    }
});

