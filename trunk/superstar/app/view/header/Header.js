Ext.define('HV.view.header.Header' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.headernavigation',
    height: 100,
    bbar: [{
        text:'Dashboard',
        iconCls: 'dashboard-menu'
      }, {
        text:'Products',
        iconCls: 'products-menu',
        menu: {
          xtype: 'menu',
          plain: true,
          items: [{
              text: 'Product Manager',
              tooltip: 'Product Manager',
              iconCls: 'edit'
          },{
              text: 'Inventory Manager',
              tooltip: 'Inventory Manager',
              iconCls: 'edit'
          },{
              text: 'Manage Catalogs and Categories',
              tooltip: 'Manage Catalogs and Categories',
              iconCls: 'edit'
          },{
              text: 'Manage Products manufactures',
              tooltip: 'Manage Products manufactures',
              iconCls: 'edit'
          },{
              text: 'Import Products and Inventory',
              tooltip: 'Import Products and Inventory',
              iconCls: 'import'
          }]
        }
      }, {
        text:'Listed Online',
        iconCls: 'listed-menu',
        menu: {
          xtype: 'menu',
          plain: true,
          items: [{
              text: 'Listed online',
              tooltip: 'Listed online',
              iconCls: 'listed-online'
          },{
              text: 'eBay Listing Queue',
              tooltip: 'eBay Listing Queue',
              iconCls: 'listing-queue'
          }]
        }
      }, {
        text:'CRM',
        iconCls: 'crm-menu',
        menu: {
          xtype: 'menu',
          plain: true,
          items: [{
              text: 'Manage Customers',
              tooltip: 'Manage Customers',
              iconCls: 'edit'
          },{
              text: 'Manage Email templates',
              tooltip: 'Manage Email templates',
              iconCls: 'edit'
          }]
        }
      }, {
        text:'Orders management',
        iconCls: 'orders-menu',
        menu: {
          xtype: 'menu',
          plain: true,
          items: [{
              text: 'Manage Orders',
              tooltip: 'Manage Orders',
              iconCls: 'edit'
          },{
              text: 'Manage Order status',
              tooltip: 'Manage Order status',
              iconCls: 'edit'
          }]
        }
      }, {
        text:'Vendors',
        tooltip:'Vendors',
        iconCls: 'vendors-menu'
      }, {
        text:'Marketplaces',
        iconCls: 'orders-menu',
        menu: {
          xtype: 'menu',
          plain: true,
          items: [{
              text: 'Marketplaces setup',
              tooltip: 'Marketplaces setup',
              iconCls: 'edit'
          },{
              text: 'Pricing Rules',
              tooltip: 'Pricing Rules',
              iconCls: 'edit'
          },{
              text: 'Listing templates',
              tooltip: 'Listing templates',
              iconCls: 'edit'
          }]
        }
      }, {
        text:'Administration',
        iconCls: 'admin-menu',
        menu: {
          xtype: 'menu',
          plain: true,
          items: [{
              text: 'System Users',
              tooltip: 'System Users',
              iconCls: 'users-icon'
          },{
              text: 'Shipping rules',
              tooltip: 'Shipping rules',
              iconCls: 'shipping-icon'
          },{
              text: 'Payments and Collection',
              tooltip: 'Payments and Collection',
              iconCls: 'shipping-icon'
          },{
              text: 'Shipping carriers',
              tooltip: 'Shipping carriers',
              iconCls: 'shipping-icon'
          },{
              text: 'Seller accounts',
              tooltip: 'Seller accounts',
              iconCls: 'shipping-icon'
          },{
              text: 'Form Layouts',
              tooltip: 'Form Layouts',
              iconCls: 'layouts-icon'
          }]
        }
      }, {
        text:'Reports',
        iconCls: 'reports-menu',
        menu: {
          xtype: 'menu',
          plain: true,
          items: [{
              text: 'Dashboard',
              tooltip: 'Dashboard',
              iconCls: 'reports'
          },{
              text: 'Selling Now',
              tooltip: 'Selling Now',
              iconCls: 'edit'
          }]
        }
      }, {
        text:'Help',
        iconCls: 'orders-menu',
        menu: {
          xtype: 'menu',
          plain: true,
          items: [{
              text: 'Contact us',
              tooltip: 'Contact us',
              iconCls: 'contact-icon'
          },{
              text: 'Ticketing',
              tooltip: 'Ticketing',
              iconCls: 'ticketing-icon'
          }]
        }
      }
    ],
    
    items: [
    
    ],
    
    initComponent: function() {
      this.callParent(arguments);
    }
});

