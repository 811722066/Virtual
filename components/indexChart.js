define(['vue','text!./indexChart.html','highcharts'],function(vue,tpl){
	return vue.extend({
		template:tpl,
		data: function(){
			return {
				a: 'this is component'
			}
		}
	})
})
