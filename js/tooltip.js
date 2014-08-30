//插件名字：tooltips（标题提示效果）
//插件作者：蔡宝坚
//作者博客：http://caibaojian.com
//插件网站：http://caibaojian.com/tooltips
//使用协议：在保留头部版权的情况下，个人和商业均可免费使用
//使用范例：http://caibajian.com/demo/tooltips
;(function($) {
	$.fn.toolTip = function(options) {
		return this.each(function() {
			var defualts = {
				positionPro: "position",//标记位置的属性
				positionValue: null, //标记位置的值，默认是显示在右下角
				positionX:"10", //距离X轴的距离为10
				positionY: "20", //距离Y轴的距离为20
				tipEle : 'tooltip', //提示方式的元素组成
				tipText : 'title', //提示文字的标志
				tipFlag : true //是否显示提示，可以设为false不显示
			};
			//handle 为图片滚动方式
			var opts = $.extend({}, defualts, options),
				obj = $(this),
				winWidth = $(window).width(), //窗口宽度
				objHeight = obj.outerHeight(), //内容高度
				pos = obj.attr(opts.positionPro) != undefined ? obj.attr(opts.positionPro) : opts.positionValue, //标志位置的元素，可以自定义四个，分别为(top或者bottom，left或者right)，可以为(top left)
				posX = obj.attr("positionX") !=undefined ? obj.attr("positionX") : opts.positionX, //距离X轴距离，可以自定义，支持负值
				posY = obj.attr("positionY") !=undefined ? obj.attr("positionY") : opts.positionY, //距离Y轴距离，可以自定义，支持负值
				tipElement = opts.tipEle, //提示显示的元素可以自定义任意jquery对象
				tipTitle =  obj.attr(opts.tipText) //可以自定义显示提示的文字，默认是获取title内容，
				;
			if(opts.tipFlag == false) return ; //如果标志了不提示，则返回
			if(obj.attr(opts.tipText) == undefined) return ; //如果有自定义标题，但没有找到则返回
			obj.on("mouseover",function(e){
				var _this = $(this);
				this.title = '';
				if(tipTitle != undefined){
					var toolTip = "<div id='"+ tipElement +"'><p>"+ tipTitle +"</p></div>";
					$("body").append(toolTip);
				}
				tipCss(e);
			}).on("mouseout",function(e){
				this.title = tipTitle;
				$("#"+tipElement).remove();
			}).on("mousemove",function(e){
				tipCss(e);
			})
			//提示框的样式
			function tipCss(evt){
				//默认的情况下提示框是在右下角
				var tip = $("#"+tipElement);
				tip.css({
					"top":evt.pageY + parseInt(posY),
					"left":evt.pageX + parseInt(posX)

				}).show("fast");
				if(pos != null){
					if(pos.indexOf('left') >= 0){ //当位置设为左边时
						tip.css({
							"left":"auto",
							"right":winWidth - parseInt(evt.pageX) + parseInt(posX)
						})
					}
					if(pos.indexOf('top') >= 0){ //当位置设为上边时
						tip.css({
							"top": evt.pageY - parseInt(objHeight)  - parseInt(posY)
						})
					}
				}
				
			}

			
		});	
	};
})(jQuery);