define(['vue','text!./indexChart.html','highcharts'],function(vue,tpl){
	return vue.extend({
		template:tpl,
		props:['productName'],
		data: function(){
			return {
				'tabs':'one',
				'msg': 'this is one',
			}
		},
		methods:{
			charts: function(){
				this.msg = this.productName;
			}
		},
		watch:{
			'tabs':function(){
				switch(this.tabs){
					case 'one':
						this.charts();
					break;
					case 'two':
						this.msg = 'this is two';
					break;
					case 'three':
						this.msg = 'this is three';
					break;
					case 'four':
						this.msg = 'this is four';
					break;
					case 'five':
						this.msg = 'this is five';
					break;
				}
			},
			'productName': function(){
				this.tabs = 'one';
				this.charts();
			}
		}
	})
})
