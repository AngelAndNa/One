
//事件注册(事件绑定)
//参数：添加事件的DOM元素，事件类型(不加on)，处理函数，是否冒泡
function addEvent(dom,eventType,func,isBubble){
	if(dom.attachEvent){
		dom.attachEvent("on"+eventType,func);
	}else if(dom.addEventListener){
		dom.addEventListener(eventType,func,isBubble)
	}else{
		dom["on"+eventType]=func;
	}
}
//删除事件注册
//参数：要删除事件的DOM元素，事件类型(不加on)，处理函数
function removeEvent(dom,eventType,func){
	if(dom.detachEvent){
		dom.detachEvent("on"+eventType,func);
	}else{
		dom.removeEventListener(eventType,func);
	}
}
//取消浏览器默认行为的函数封装

function preventDefaultEvent(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}else{
		evt.returnValue = false;
	}
}

//阻止事件的冒泡行为
function stopBubble(event){
	if(event.cancelBubble){
		event.cancelBubble=true;
	}else{
		event.stopPropagation();
	}

}

