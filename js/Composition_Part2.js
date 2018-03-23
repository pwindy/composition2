// pro1 banner碎片化
( function () {
    var oLi1 = $('.pro1 #wrap .box li');
    var oImg1 = $('.pro1 #wrap .box li img');
    var oMask1 = $('.pro1 #wrap .mask').eq(0);
    var oSpan1 = $('.pro1 #wrap .tab span');
    var oP_prev = $('.pro1 #wrap .prev'),oP_next = $('.pro1 #wrap .next');
    var num = 0;
    var w_num = 6,h_num = 4;
    var w = oMask1.width()/w_num,h = oMask1.height()/h_num;//p标签对象的宽度和高度
    var src;
    var timer;
    var arr = [];//收集p标签

    //next点击事件
    oP_next.click(function(){
        src = oImg1.eq(num).attr('src');
        oSpan1.eq(num).removeClass('on');
        oLi1.eq(num).removeClass('on');
        fn();
        num++;
        if(num>3){num=0;}
        oSpan1.eq(num).addClass('on');
        oLi1.eq(num).addClass('on');
    });
    //prev点击事件
    oP_prev.click(function(){
        src = oImg1.eq(num).attr('src');
        oSpan1.eq(num).removeClass('on');
        oLi1.eq(num).removeClass('on');
        fn();
        num--;
        if(num<0){num=3;}
        oSpan1.eq(num).addClass('on');
        oLi1.eq(num).addClass('on');
    });

    //tab点击事件
    oSpan1.click(function(){
        src = oImg1.eq(num).attr('src');
        oSpan1.eq(num).removeClass('on');
        oLi1.eq(num).removeClass('on');
        fn();
        num = $(this).index();
        oSpan1.eq(num).addClass('on');
        oLi1.eq(num).addClass('on');
    });
    function fn() {
        clearInterval(timer);
        oMask1.empty();//碎片内容虽然fadeOut，但是还在页面中，所以需要清空
        for(var y=0;y<h_num;y++){
            for(var x=0;x<w_num;x++){
                var oP = $('<p></p>');
                oP.css({//给p标签加上css属性
                    width:w,
                    height:h,
                    transition:'1s',//重点！！！
                    backgroundImage:'url('+src+')',
                    backgroundPosition:'-'+w*x+'px -'+h*y+'px',
                });
                oMask1.append(oP);//把所有生成的p标签都加到遮罩层页面中
                oP.css({//给每个p标签加上绝对定位的left值和top值
                    left:oP.position().left,
                    top:oP.position().top
                });
                arr.push(oP);//把所有的p标签都放到arr数组中，方便对每个p操作，为之后的定时器左准备
            }
        }
        oMask1.find('p').each(function(index,val){
            $(val).css({position:'absolute'});
        });//防止p标签fadeOut后全部向左移动,给所有的p标签加上绝对定位,这样每个p标签在原位置fadeOut消失不见
        timer = setInterval(function(){
            var index = Math.floor( Math.random()*arr.length );
            $(arr[index]).css({
                transform:'translate('+(Math.random()*5*w-2.5*w) +'px,'+(Math.random()*5*h-2.5*h)+'px) rotate(-60deg) scale(0.2)'
            }).fadeOut(300);
            arr.splice(index,1);//fadeOut一个p标签后，就把这个p标签删除掉
            if(arr.length==0){clearInterval(timer);}//清除定时器
        },1000/60);//定时器：每隔1000/30ms就执行一遍里面的代码
    }
} ) ();

//pro2 回形运动
( function() {
    var oLi = $('.pro2 #wrap .box li');
    var oImg = $('.pro2 #wrap .box li img');
    var oMask = $('.pro2 #wrap .mask').eq(0);
    var oSpan = $('.pro2 #wrap .tab span');
    var oP_prev = $('.pro2 #wrap .prev'),oP_next = $('.pro2 #wrap .next');
    var num = 0;
    var w_num = 9,h_num = 10;
    var w = oMask.width()/w_num,h = oMask.height()/h_num;//p标签对象的宽度和高度
    var src;
    var timer;
    var arr = [];//收集p标签
    //next点击事件
    oP_next.click(function(){
        src = oImg.eq(num).attr('src');
        oSpan.eq(num).removeClass('on');
        oLi.eq(num).removeClass('on');
        fn();
        num++;
        if(num>3){num=0;}
        oSpan.eq(num).addClass('on');
        oLi.eq(num).addClass('on');
    });
    //prev点击事件
    oP_prev.click(function(){
        src = oImg.eq(num).attr('src');
        oSpan.eq(num).removeClass('on');
        oLi.eq(num).removeClass('on');
        fn();
        num--;
        if(num<0){num=3;}
        oSpan.eq(num).addClass('on');
        oLi.eq(num).addClass('on');
    });
    //tab点击事件
    oSpan.click(function(){
        src = oImg.eq(num).attr('src');
        oSpan.eq(num).removeClass('on');
        oLi.eq(num).removeClass('on');
        fn();
        num = $(this).index();
        oSpan.eq(num).addClass('on');
        oLi.eq(num).addClass('on');
    });
    function fn() {
        clearInterval(timer);
        oMask.empty();//碎片内容虽然fadeOut，但是还在页面中，所以需要清空
        for(var y=0;y<h_num;y++){
            for(var x=0;x<w_num;x++){
                var oP = $('<p></p>');
                oP.css({//给p标签加上css属性
                    width:w,
                    height:h,
                    // transition:'1s',//重点！！！
                    backgroundImage:'url('+src+')',
                    backgroundPosition:'-'+w*x+'px -'+h*y+'px'
                });
                oMask.append(oP);//把所有生成的p标签都加到遮罩层页面中
                oP.css({//给每个p标签加上绝对定位的left值和top值
                    left:oP.position().left,
                    top:oP.position().top
                });
                arr.push(oP);//把所有的p标签都放到arr数组中，方便对每个p操作，为之后的定时器左准备
            }
        }
        oMask.find('p').each(function(index,val){
            $(val).css({position:'absolute'});
        });//防止p标签fadeOut后全部向左移动,给所有的p标签加上绝对定位,这样每个p标签在原位置fadeOut消失不见
        var x = 0,y = 0;
        var min = 0,w_max = w_num-1,h_max = h_num-1;
        timer = setInterval(function(){
            oMask.find('p').eq(y*w_num+x).css({
                transform:'scale(0.5)'
            }).fadeOut();//这里的text也可以换成html
            if(y==min&&x<w_max){x++;}
            else if(x==w_max&&y<h_max){y++;}
            else if(y==h_max&&x>min){x--;}
            else if(x==min&&y>min){y--;}
            if(y-1==min&&x==min){min++;w_max--;h_max--;}//在每一个拐点处改变max和min值
            if(y*w_num+x===w_num*h_num){ clearInterval(timer); }
        },1000/100);
    }
} ) ();


// pro3 上下折叠菜单
( function() {
    var oWrap = $('.pro3 #wrap');
    var oDiv = $('.pro3 div');
    var timer;
    var num = 0;//div的下标值
    var onoff = true;//取反开关

    //先执行向下运动，后执行向上运动
    oWrap.click(function(){
        if(onoff){//向下折叠
            timer = setInterval(function(){
                if(oDiv.hasClass('up')){//当有up属性值的时候，应该先去掉up属性值后再加上down属性值
                    $(oDiv[num]).removeClass('up');
                    $(oDiv[num]).addClass('down');
                }else{
                     $(oDiv[num]).addClass('down');
                }
                $(oDiv[num]).addClass('down');
                num++;
                if(num===oDiv.length){clearInterval(timer);}
            },1000/10);
        }else{//向上折叠
            timer = setInterval(function(){
                num--;
                if(oDiv.hasClass('down')){//当有down属性值的时候，应该先去掉down属性值后再加上up属性值
                    $(oDiv[num]).removeClass('down');
                    $(oDiv[num]).addClass('up');
                }else{
                     $(oDiv[num]).addClass('up');
                }
                if(num===0){clearInterval(timer);}
            },1000/10);
        }
        onoff = ! onoff;//取反
    });
} ) ();

// pro4 弹性运动
( function() {
    var oWrap = document.querySelector('.pro4 #wrap');
    var oLi = document.querySelectorAll('.pro4 #wrap ul li');
    var oTag = document.querySelector('.pro4 #wrap .nav span');
    var aTab = document.querySelector('.pro4 #wrap .nav .tab');
    var oTab = document.querySelectorAll('.pro4 #wrap .nav .tab b');
    var w = oLi[0].offsetWidth;//一个li的宽度，为固定值
    var l_blk = (oWrap.offsetWidth-w*oLi.length/2)/2;//左边空白区域的宽度，为固定值
    var arr = [];//存放6个li的offsetLeft值
    var num = 0;//点击时，下标的变化，只有0和1两个值
    var timer;//定时器

    //用js写出静态布局页面，方便之后应用arr
    for(var i=0;i<oLi.length;i++){//布局
        if(i<oLi.length/2){
            arr[i] = l_blk + i*w;//存放前6个li的offsetLeft值
            oLi[i].style.left = arr[i] + 'px';//把这6个li放在页面可视位置
        }else{
            oLi[i].style.left = oWrap.offsetWidth + 'px';//把余下6个li放在页面不可视位置，即，wrap盒子的右边缘位置
        }
    }// console.log(arr); [100, 230, 360, 490, 620, 750]
    //两个tab的for循环
    for(var j=0;j<oTab.length;j++){
        oTab[j].index = j;
        oTab[j].onclick = function() {
            //点击两个tab，className的变化
            oTab[num].className = '';
            num = this.index;
            oTab[num].className = 'on';

            var oTag_int = oTag.offsetLeft;//每次点击，都会更新

            if(num){//点击右边tab
                //三角符号的弹性运动
                var oTag_tar = aTab.offsetLeft + oTab[0].offsetWidth + this.offsetWidth/2-oTag.offsetWidth/2;
                // animation(oTag,'left',oTag_tar,oTag_int);//三角符号的弹性运动

                //图片的弹性运动
                var x = 0;
                var time1 = 10;
                timer = setInterval(function(){
                        if(x<oLi.length/2){
                            animation(oLi[x],'left',-w,oLi[x].offsetLeft);
                        }else{
                            animation(oLi[x],'left',arr[x%6],oLi[x].offsetLeft);
                        }//x%6可以换成x-6
                        x++;
                        if(x==oLi.length){clearInterval(timer);}
                        time1 +=200;
                },time1);

            }else{//点击左边tab
                //三角符号的弹性运动
                var oTag_tar = aTab.offsetLeft + this.offsetWidth/2 -oTag.offsetWidth/2;
                // animation(oTag,'left',oTag_tar,oTag_int);//三角符号的弹性运动

                //图片的弹性运动
                var x = oLi.length-1;
                var time0 = 10;
                timer = setInterval(function(){
                        if(x>oLi.length/2-1){
                            animation(oLi[x],'left',oWrap.offsetWidth,oLi[x].offsetLeft);
                        }else{
                            animation(oLi[x],'left',arr[x],oLi[x].offsetLeft);
                        }
                        x--;
                        if(x<0){clearInterval(timer);}
                        time0 +=200;
                },time0);
            }
            animation(oTag,'left',oTag_tar,oTag_int);//三角符号的弹性运动
        }//onclick事件结束
    }//两个tab的for循环结束
    //弹性运动的封装
    function animation(obj,attr,target,init_tar) {
        var speed = 0;//速度的初始值为0
        clearInterval(timer);//每点击一个新的a标签的时候，会清除上一个点击对象的定时器
        var timer = setInterval(function(){
            speed += (target - init_tar)/20;//以target值为中点和弹性运动
            speed *= 0.8;//摩擦力，这个值越大，左右弹跳的幅度就越大，即，速度减小得越快
            init_tar += speed;//保存对象的位置
            if( Math.abs(target - init_tar)<1&&Math.abs(speed)<1 ){
                init_tar = target;//让obj停止精确
                clearInterval(timer);
            }
            obj.style[attr] = init_tar + 'px';
        },1000/100);//时间越大，左右弹跳就越趋向缓慢
    }
} ) ();

// pro5 桌面系统-选中拖拽排序
( function() {
    var $pro5 = $('.pro5').eq(0);
    var $ul = $('.pro5 ul').eq(0);
    var $li = $('.pro5 ul li');
    var length = $li.length;
    var liW = $li.outerWidth();
    var liH = $li.outerHeight();
    var num = 3;//一列放置num个图标
    var toH;//每个图标上下方向的间距
    //布局初始化
    ( function() {
        autoH();
        function autoH() {
            toH = ( $ul.outerHeight() - num*liH- 30 )/num;
            toH = Math.max(0,toH);//间距>=0
            $li.each( function(i){
                this.x = Math.floor( i/num);//x的坐标值
                this.y = i%num;//y的坐标值
                $(this).css( {
                    backgroundImage:'url('+'images/5-pic'+(i+1)+'.png'+')',//url('images/5-picx.png')
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'100%',
                    backgroundOrigin:'content-box',
                    left:this.x*(liW + 20) + 30 + 'px',
                    top:this.y*(liH + toH) + 30 + 'px'
                } );//$(this).css()结束
            } );//$li.each()结束
        }//autoH()结束
    } ) ();//布局初始化结束
    //拖拽
    ( function() {
        $li.mousedown( function(e){
            var xD = e.clientX;
            var yD = e.clientY;
            var leftArr = [],topArr = [];//创建空的数组，存放数据
            var hasOn = $(this).hasClass('on');//true或者false
            var $on = $(this);
            //保存$on中每个对象的初始位置值---开始
            $on.each( function(n) {
                leftArr[n] = this.x*(liW + 20) + 30;
                topArr[n] = this.y*(liH + toH) + 30;
            } );
            //保存$on中每个对象的初始位置值---结束
            var This = this;//保存this对象，下面可以使用
            $(document).mousemove( function(e){
                var xM = e.clientX;
                var yM = e.clientY;
                //移动中$on里面各对象的位置---开始
                $on.each( function(m) {
                    $(this).css( {
                        left : leftArr[m] + xM - xD + 'px',
                        top : topArr[m] + yM - yD + 'px'
                    } );//$(This).css()结束
                } );
                //移动中$on里面各对象的位置---结束
            } );//$(document).mousemove()结束
            $(document).mouseup( function(){
                $(this).off('mousemove');
                var xThis = [],yThis = [];//创建空的数组，存放数据
                //保存选中对象移动后的x和y轴上的坐标值---开始
                $on.each( function(i) {
                    xThis[i] = Math.round( ($(this).position().left - 30)/(liW + 20) );
                    yThis[i] = Math.round( ($(this).position().top - 30)/(liH + toH) );
                } );
                //保存选中对象移动后的x和y轴上的坐标值---结束
                //解决位置重合问题---开始
                    var onoff = true;
                    $on.each( function(r){
                        var $off= $li.not('.on');//没有被选中的对象集
                        for(var k=0;k<$off.length;k++) {
                            if(xThis[r]==$off[k].x && yThis[r]==$off[k].y ) {onoff = false;}
                            //xThis[r]==$off[k].x && yThis[r]==$off[k].y
                            //没有被选中的所有对象的x和y轴上的坐标值与被选中的所有对象的x和y轴上的坐标值相等
                        }
                    } );
                    if(onoff) {
                        $on.each( function(j) {
                            this.x = xThis[j];
                            this.y = yThis[j];
                        } );
                    }
                //解决位置重合问题---结束
                //放开鼠标后，$on对象中图标的最终位置---开始
                $on.each( function() {
                    $(this).css( {
                        left : this.x*(liW + 20) + 30 + 'px',
                        top : this.y*(liH + toH) + 30 + 'px',
                        // console.log($(this));
                    } );//$(This).css()结束
                } );
                //放开鼠标后，$on对象中图标的最终位置---结束
                $(this).off('mouseup');
            } );//$(document).mouseup()结束
            return false;//取消冒泡
        } );//$li.mousedown()结束
    } ) ();//拖拽结束
} ) ();
