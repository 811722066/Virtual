define([
    'view_base',
    '../presenters/Index',
], function (base, presenter) {
    var index = base.extend(function (options) {
        setTimeout(function () {
            typeof this.init === 'function' && this.init(options);
            this.emit('init');
        }.bind(this), 0);
    }, {
        creatView:function(data){
        	this.container.html(data.Demo);
        },
        handleLoading:function(){
        	console.dir('handleLoading');
        },
    });
    index.init = function () {
        new presenter(new this({
            root:$(document),
            container:$('.grid'),
        }));
    };
    return index;
});