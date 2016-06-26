define([
	'presenter_base',
	'../repositories/Index',
	'vue',
	'../components/indexChart'
	], function (base, repository, vue, indexChart) {
    return base.extend(function () {
    	this.createViewModels();
        this.view.on('init', this.onInitPage.bind(this));
    }, {
        onInitPage: function () {
        },
        
        createViewModels:function(){
        	var that = this;
        	vue.config.debug = true;
        	this.vm = new vue({
        		el: 'body',
        		data: {
        			buys:[],
        			sales:[],
        			products:[],
        			selectBuy:5,
        			selectSale:5,
        			options:[
        			{
        				text:'显示5条',
        				value:'5',
        			},{
        				text:'显示10条',
        				value:'10',
        			},{
        				text:'显示15条',
        				value:'15',
        			}],
        			defaultOrder:'0',
        			orderOptions:[{
        				text: '默认排序',
        				value: '0'
        			},{
        				text: '按交易量排序',
        				value: 'C2'
        			},{
        				text: '按涨跌幅排序',
        				value: 'C3'
        			}],
        			shortName:'BTC'
        		},
        		created: function () {
		            this.getBuyData();
		            this.getSaleData();
		            this.getProductData();
		        },
		        components: {
		        	indexChart: indexChart
		        },
        		methods: {
        			getBuyData:function(){
        				$.getJSON('./json/Buy.json',function(result){
        					this.buys = result;
        					if(this.buys.length > this.selectBuy){
        						this.buys.length = this.selectBuy;
        					}
			        	}.bind(this));
			        },
			        getSaleData:function(){
			        	$.getJSON('./json/Sale.json',function(result){
			        		this.sales = result;
			        		if(this.sales.length > this.selectSale){
			        			this.sales.length = this.selectSale;
        					}
			        	}.bind(this));
			        },
			        getProductData:function(){
			        	$.getJSON('./json/Product.json',function(result){
        					this.products = result;
			        	}.bind(this));
        			},
        			/*details: function(val){
						this.productLogo = val;
					}*/
        		},
        		ready: function(){
                    //that.view.setContainerHeight();
                    that.view.root.find('body').removeClass('noReady');
                },
                watch: {
                	"selectBuy": function(){
                		this.getBuyData();
                	},
                	"selectSale": function(){
                		this.getSaleData();
                	},
                	"shortName": function(){
                		this.getBuyData();
		           		this.getSaleData();
                	}
                }
        	});
        }
    });
});
