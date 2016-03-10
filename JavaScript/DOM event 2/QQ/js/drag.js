function getByClass(clsName,parent){//获取parent元素下所有类名为clsName的元素
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName('*');//获取oParent元素下的所有元素

  for(var i=0,l=elements.length;i<l;i++){//判断各元素是否与想要得到的类名一致，若一致，则加入数组。
    if(elements[i].className==clsName){
      eles.push(elements[i]);//push()方法是JavaScript中数组的方法，其可向数组添加元素，并改变数组的长度。
    }
  }
  return eles;
}

window.onload=drag;//当页面加载完成，执行函数drag

function drag(){
   var oTitle=getByClass('login_logo_webqq','loginPanel')[0];//获取目标元素
   // 拖曳
   oTitle.onmousedown=fnDown;//给目标元素添加鼠标按下事件，fnDown函数实现拖拽时位置的计算
   // 关闭
   var oClose=document.getElementById('ui_boxyClose');
   oClose.onclick=function(){
   	  document.getElementById('loginPanel').style.display='none';
   }
   // 切换状态
   var loginState=document.getElementById('loginState'),
       stateList=document.getElementById('loginStatePanel'),
       lis=stateList.getElementsByTagName('li'),
       stateTxt=document.getElementById('login2qq_state_txt'),
       loginStateShow=document.getElementById('loginStateShow');

   loginState.onclick=function(e){
   	 e = e || window.event;
     if(e.stopPropagation){
          e.stopPropagation();//阻止事件冒泡
     }else{
          e.cancelBubble=true;//IE8中阻止事件冒泡
     }
   	 stateList.style.display='block';//当鼠标点击登录状态时，使得状态列表显示
   }

   // 鼠标滑过、离开和点击状态列表时
   for(var i=0,l=lis.length;i<l;i++){
      lis[i].onmouseover=function(){
      	this.style.background='#567';
      }
      lis[i].onmouseout=function(){
      	this.style.background='#FFF';
      }
      lis[i].onclick=function(e){
      	e = e || window.event;
      	if(e.stopPropagation){
          e.stopPropagation();
      	}else{
          e.cancelBubble=true;
      	}
      	var id=this.id;
      	stateList.style.display='none';
        stateTxt.innerHTML=getByClass('stateSelect_text',id)[0].innerHTML;
        loginStateShow.className='';
        loginStateShow.className='login-state-show '+id;
      }
   }
   document.onclick=function(){
   	  stateList.style.display='none';
   }
}

function fnDown(event){
  event = event || window.event;
  var oDrag=document.getElementById('loginPanel'),
      // 光标按下时光标和面板之间的距离
      disX=event.clientX-oDrag.offsetLeft,
      disY=event.clientY-oDrag.offsetTop;
  // 移动
  document.onmousemove=function(event){
  	event = event || window.event;
  	fnMove(event,disX,disY);
  }
  // 释放鼠标
  document.onmouseup=function(){
  	document.onmousemove=null;
  	document.onmouseup=null;
  }
}

function fnMove(e,posX,posY){
  var oDrag=document.getElementById('loginPanel'),
      l=e.clientX-posX,
      t=e.clientY-posY,
      winW=document.documentElement.clientWidth || document.body.clientWidth,
      winH=document.documentElement.clientHeight || document.body.clientHeight,
      maxW=winW-oDrag.offsetWidth-10,
      maxH=winH-oDrag.offsetHeight;
  if(l<0){
    l=0;
  }else if(l>maxW){
    l=maxW;
  }
  if(t<0){
    t=10;
  }else if(t>maxH){
    t=maxH;
  }
  oDrag.style.left=l+'px';
  oDrag.style.top=t+'px';
}