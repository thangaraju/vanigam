Ext.define('HV.store.Products', {
    extend: 'Ext.data.Store',
    model: 'HV.model.Product',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/products/products.json',
            update: 'data/products/updateProducts.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});
