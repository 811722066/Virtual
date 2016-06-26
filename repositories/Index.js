define(['repository_base'
], function (base) {
    return new (base.extend({
        getTableData: function (condition) {
        	return  $.getJSON('./resources/Buy.json',function(result){
        		return result;
        	});
        }
    }))();
});