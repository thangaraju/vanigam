Ext.define('HV.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',

    title : 'All Products',
    
    store: 'Products',

    initComponent: function() {

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});
