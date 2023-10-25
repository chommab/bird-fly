System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,o,n,e,r,s,a,p,h,u,c;return{setters:[function(i){t=i.applyDecoratedDescriptor,o=i.inheritsLoose,n=i.initializerDefineProperty,e=i.assertThisInitialized},function(i){r=i.cclegacy,s=i._decorator,a=i.CCFloat,p=i.Animation,h=i.Vec3,u=i.tween,c=i.Component}],execute:function(){var l,d,f,m,y,b,g;r._RF.push({},"b06f1lcV4VA4oShrZ6SMlex","Bird",void 0);var v=s.ccclass,w=s.property;i("Bird",(l=v("Bird"),d=w({type:a,tooltip:"how high does he fly?"}),f=w({type:a,tooltip:"how long does he fly?"}),l((b=t((y=function(i){function t(){for(var t,o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return t=i.call.apply(i,[this].concat(r))||this,n(t,"jumpHeight",b,e(t)),n(t,"jumpDuration",g,e(t)),t.birdAnimation=void 0,t.birdLocation=void 0,t.hitSomething=void 0,t}o(t,i);var r=t.prototype;return r.onLoad=function(){this.resetBird(),this.birdAnimation=this.getComponent(p)},r.resetBird=function(){this.birdLocation=new h(0,0,0),this.node.setPosition(this.birdLocation),this.hitSomething=!1},r.fly=function(){var i=this;this.birdAnimation.stop(),u(this.node.position).to(this.jumpDuration,new h(this.node.position.x,this.node.position.y+this.jumpHeight,0),{easing:"smooth",onUpdate:function(t,o){i.node.position=t}}).start(),this.birdAnimation.play()},t}(c)).prototype,"jumpHeight",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),g=t(y.prototype,"jumpDuration",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),m=y))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/BirdAudio.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,r,t,o,n,u,c,a,l;return{setters:[function(e){i=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,u=e._decorator,c=e.AudioClip,a=e.AudioSource,l=e.Component}],execute:function(){var p,s,d,f,y,h,b;n._RF.push({},"d8eb6EH1t9MtbW3UIrunYjS","BirdAudio",void 0);var A=u.ccclass,v=u.property;e("BirdAudio",(p=A("BirdAudio"),s=v({type:[c],tooltip:"place audio clip here"}),d=v({type:a,tooltip:"place audio node here"}),p((h=i((y=function(e){function i(){for(var i,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return i=e.call.apply(e,[this].concat(n))||this,t(i,"clips",h,o(i)),t(i,"audioSource",b,o(i)),i}return r(i,e),i.prototype.onAudioQueue=function(e){var i=this.clips[e];this.audioSource.playOneShot(i)},i}(l)).prototype,"clips",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=i(y.prototype,"audioSource",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Results.ts","./Bird.ts","./PipePool.ts","./BirdAudio.ts"],(function(e){"use strict";var t,i,r,o,n,s,u,a,l,p,c,d,h,f,b,y,m,g,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,s=e._decorator,u=e.Component,a=e.CCInteger,l=e.director,p=e.input,c=e.Input,d=e.Node,h=e.KeyCode,f=e.Collider2D,b=e.Contact2DType},function(e){y=e.Results},function(e){m=e.Bird},function(e){g=e.PipePool},function(e){v=e.BirdAudio}],execute:function(){var C,A,w,G,O,S,P,B,z,T,_,Q,D,R,E,K,k;n._RF.push({},"9b3d81zoTxJsbmHHRSCorfq","GameCtrl",void 0);var L=s.ccclass,H=s.property;e("GameCtrl",(C=L("GameCtrl"),A=H({type:u,tooltip:"Add ground prefab owner here"}),w=H({type:a,tooltip:"Change the speed of ground"}),G=H({type:a,tooltip:"Change the speed of pipes"}),O=H({type:y,tooltip:"Add results here"}),S=H({type:m,tooltip:"Add Bird node"}),P=H({type:g,tooltip:"Add canvas here"}),B=H({type:v,tooltip:"add audio controller"}),C((_=t((T=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return t=e.call.apply(e,[this].concat(n))||this,r(t,"ground",_,o(t)),r(t,"speed",Q,o(t)),r(t,"pipeSpeed",D,o(t)),r(t,"result",R,o(t)),r(t,"bird",E,o(t)),r(t,"pipeQueue",K,o(t)),r(t,"clip",k,o(t)),t.isOver=void 0,t}i(t,e);var n=t.prototype;return n.onLoad=function(){this.initListener(),this.result.resetScore(),this.isOver=!0,l.pause()},n.initListener=function(){var e=this;p.on(c.EventType.KEY_DOWN,this.onKeyDown,this),this.node.on(d.EventType.TOUCH_START,(function(){1==e.isOver&&(e.resetGame(),e.bird.resetBird(),e.startGame()),0==e.isOver&&(e.bird.fly(),e.clip.onAudioQueue(0))}))},n.onKeyDown=function(e){switch(e.keyCode){case h.KEY_A:this.gameOver();break;case h.KEY_P:this.result.addScore();break;case h.KEY_Q:this.resetGame(),this.bird.resetBird()}},n.gameOver=function(){this.result.showResult(),this.isOver=!0,this.clip.onAudioQueue(3),l.pause()},n.resetGame=function(){this.result.resetScore(),this.pipeQueue.reset(),this.isOver=!1,this.startGame()},n.startGame=function(){this.result.hideResult(),l.resume()},n.passPipe=function(){this.result.addScore(),this.clip.onAudioQueue(1)},n.createPipe=function(){this.pipeQueue.addPool()},n.contactGroundPipe=function(){var e=this.bird.getComponent(f);e&&e.on(b.BEGIN_CONTACT,this.onBeginContact,this)},n.onBeginContact=function(e,t,i){this.bird.hitSomething=!0,this.clip.onAudioQueue(2)},n.birdStruck=function(){this.contactGroundPipe(),1==this.bird.hitSomething&&this.gameOver()},n.update=function(){0==this.isOver&&this.birdStruck()},t}(u)).prototype,"ground",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=t(T.prototype,"speed",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),D=t(T.prototype,"pipeSpeed",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),R=t(T.prototype,"result",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=t(T.prototype,"bird",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=t(T.prototype,"pipeQueue",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=t(T.prototype,"clip",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=T))||z));n._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameCtrl.ts"],(function(t){"use strict";var o,i,n,e,r,a,s,d,h,p,u,c,g;return{setters:[function(t){o=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Node,d=t.Vec3,h=t.UITransform,p=t.director,u=t.Canvas,c=t.Component},function(t){g=t.GameCtrl}],execute:function(){var m,l,S,L,f,w,C,x,y;r._RF.push({},"d4e78IM2BxCXa7cH14nPYw6","Ground",void 0);var v=a.ccclass,W=a.property;t("Ground",(m=v("Ground"),l=W({type:s,tooltip:"First ground"}),S=W({type:s,tooltip:"Second ground"}),L=W({type:s,tooltip:"Third ground"}),m((C=o((w=function(t){function o(){for(var o,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return o=t.call.apply(t,[this].concat(r))||this,n(o,"ground1",C,e(o)),n(o,"ground2",x,e(o)),n(o,"ground3",y,e(o)),o.groundWidth1=void 0,o.groundWidth2=void 0,o.groundWidth3=void 0,o.tempStartLocation1=new d,o.tempStartLocation2=new d,o.tempStartLocation3=new d,o.gameCtrlSpeed=new g,o.gameSpeed=void 0,o}i(o,t);var r=o.prototype;return r.onLoad=function(){this.startUp()},r.startUp=function(){this.groundWidth1=this.ground1.getComponent(h).width,this.groundWidth2=this.ground2.getComponent(h).width,this.groundWidth3=this.ground3.getComponent(h).width,this.tempStartLocation1.x=0,this.tempStartLocation2.x=this.groundWidth1,this.tempStartLocation3.x=this.groundWidth1+this.groundWidth2,this.ground1.setPosition(this.tempStartLocation1),this.ground2.setPosition(this.tempStartLocation2),this.ground3.setPosition(this.tempStartLocation3)},r.update=function(t){this.gameSpeed=this.gameCtrlSpeed.speed,this.tempStartLocation1=this.ground1.position,this.tempStartLocation2=this.ground2.position,this.tempStartLocation3=this.ground3.position,this.tempStartLocation1.x-=this.gameSpeed*t,this.tempStartLocation2.x-=this.gameSpeed*t,this.tempStartLocation3.x-=this.gameSpeed*t;var o=p.getScene().getComponentInChildren(u);this.tempStartLocation1.x<=0-this.groundWidth1&&(this.tempStartLocation1.x=o.getComponent(h).width),this.tempStartLocation2.x<=0-this.groundWidth2&&(this.tempStartLocation2.x=o.getComponent(h).width),this.tempStartLocation3.x<=0-this.groundWidth3&&(this.tempStartLocation3.x=o.getComponent(h).width),this.ground1.setPosition(this.tempStartLocation1),this.ground2.setPosition(this.tempStartLocation2),this.ground3.setPosition(this.tempStartLocation3)},o}(c)).prototype,"ground1",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=o(w.prototype,"ground2",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=o(w.prototype,"ground3",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=w))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/kk.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.director,c=t.Component}],execute:function(){var i;n._RF.push({},"37557FDejtKCroKppAy5qvN","kk",void 0);var u=o.ccclass;o.property,t("kk",u("kk")(i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.loadinggame=function(){r.loadScene("Scene")},o.update=function(t){},n}(c))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/loading.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,n,r,i;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,r=t.director,i=t.Component}],execute:function(){o._RF.push({},"a712bQQiopCCa4F5uMWPbaN","loading",void 0);n.ccclass,n.property,t("GameCtrl",function(t){function o(){return t.apply(this,arguments)||this}return e(o,t),o.prototype.loadinggame=function(){r.loadScene("loadinggame")},o}(i));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./BirdAudio.ts","./GameCtrl.ts","./Ground.ts","./PipePool.ts","./Pipes.ts","./Results.ts","./kk.ts","./loading.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PipePool.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var o,i,t,r,p,l,n,a,s,c,u;return{setters:[function(e){o=e.applyDecoratedDescriptor,i=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){p=e.cclegacy,l=e._decorator,n=e.Prefab,a=e.Node,s=e.NodePool,c=e.instantiate,u=e.Component}],execute:function(){var P,h,f,d,b,y,v;p._RF.push({},"b0eb73P2/ZFfZvXzYZhGxUT","PipePool",void 0);var m=l.ccclass,g=l.property;e("PipePool",(P=m("PipePool"),h=g({type:n,tooltip:"The prefab of pipes"}),f=g({type:a,tooltip:"Where the new pipes go"}),P((y=o((b=function(e){function o(){for(var o,i=arguments.length,p=new Array(i),l=0;l<i;l++)p[l]=arguments[l];return o=e.call.apply(e,[this].concat(p))||this,t(o,"prefabPipes",y,r(o)),t(o,"pipePoolHome",v,r(o)),o.pool=new s,o.createPipe=null,o}i(o,e);var p=o.prototype;return p.initPool=function(){for(var e=0;e<3;e++){var o=c(this.prefabPipes);0==e?this.pipePoolHome.addChild(o):this.pool.put(o)}},p.addPool=function(){this.pool.size()>0?this.createPipe=this.pool.get():this.createPipe=c(this.prefabPipes),this.pipePoolHome.addChild(this.createPipe)},p.reset=function(){this.pipePoolHome.removeAllChildren(),this.pool.clear(),this.initPool()},o}(u)).prototype,"prefabPipes",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=o(b.prototype,"pipePoolHome",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=b))||d));p._RF.pop()}}}));

System.register("chunks:///_virtual/Pipes.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,o,p,s,n,a,r,h,c,m,P;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,p=t.assertThisInitialized},function(t){s=t.cclegacy,n=t._decorator,a=t.Node,r=t.Vec3,h=t.screen,c=t.find,m=t.UITransform,P=t.Component}],execute:function(){var l,d,u,S,w,L,y;s._RF.push({},"78c53FlHKtIXqCC734YoQ+3","Pipes",void 0);var f=n.ccclass,g=n.property,b=function(t,i){return Math.random()*(i-t)+t};t("Pipes",(l=f("Pipes"),d=g({type:a,tooltip:"Top Pipe"}),u=g({type:a,tooltip:"Bottom Pipe"}),l((L=i((w=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return i=t.call.apply(t,[this].concat(s))||this,o(i,"topPipe",L,p(i)),o(i,"bottomPipe",y,p(i)),i.tempStartLocationUp=new r(0,0,0),i.tempStartLocationDown=new r(0,0,0),i.scene=h.windowSize,i.game=void 0,i.pipeSpeed=void 0,i.tempSpeed=void 0,i.isPass=void 0,i}e(i,t);var s=i.prototype;return s.onLoad=function(){this.game=c("GameCtrl").getComponent("GameCtrl"),this.pipeSpeed=this.game.pipeSpeed,this.initPos(),this.isPass=!1},s.initPos=function(){this.tempStartLocationUp.x=this.topPipe.getComponent(m).width+this.scene.width,this.tempStartLocationDown.x=this.bottomPipe.getComponent(m).width+this.scene.width;var t=b(90,100),i=b(0,450);this.tempStartLocationUp.y=i,this.tempStartLocationDown.y=i-10*t,this.topPipe.setPosition(this.tempStartLocationUp.x,this.tempStartLocationUp.y),this.bottomPipe.setPosition(this.tempStartLocationDown.x,this.tempStartLocationDown.y)},s.update=function(t){this.tempSpeed=this.pipeSpeed*t,this.tempStartLocationDown=this.bottomPipe.position,this.tempStartLocationUp=this.topPipe.position,this.tempStartLocationDown.x-=this.tempSpeed,this.tempStartLocationUp.x-=this.tempSpeed,this.bottomPipe.setPosition(this.tempStartLocationDown),this.topPipe.setPosition(this.tempStartLocationUp),0==this.isPass&&this.topPipe.position.x<=0&&(this.isPass=!0,this.game.passPipe()),this.topPipe.position.x<0-this.scene.width&&(this.game.createPipe(),this.destroy())},i}(P)).prototype,"topPipe",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=i(w.prototype,"bottomPipe",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=w))||S));s._RF.pop()}}}));

System.register("chunks:///_virtual/Results.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,o,c,n,s,a;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){c=e.cclegacy,n=e._decorator,s=e.Label,a=e.Component}],execute:function(){var l,u,h,p,S,d,g,f,b;c._RF.push({},"da04d+s6pRF551SP+Jrfunc","Results",void 0);var y=n.ccclass,v=n.property;e("Results",(l=y("Results"),u=v({type:s,tooltip:"Current Score"}),h=v({type:s,tooltip:"High Score"}),p=v({type:s,tooltip:"Try Again?"}),l((g=t((d=function(e){function t(){for(var t,r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return t=e.call.apply(e,[this].concat(c))||this,i(t,"scoreLabel",g,o(t)),i(t,"highScore",f,o(t)),i(t,"resultEnd",b,o(t)),t.maxScore=0,t.currentScore=void 0,t}r(t,e);var c=t.prototype;return c.updateScore=function(e){this.currentScore=e,this.scoreLabel.string=""+this.currentScore},c.resetScore=function(){this.updateScore(0),this.hideResult(),this.scoreLabel.string=""+this.currentScore},c.addScore=function(){this.updateScore(this.currentScore+1)},c.showResult=function(){this.maxScore=Math.max(this.maxScore,this.currentScore),this.highScore.string="High Score is:"+this.maxScore,this.highScore.node.active=!0,this.resultEnd.node.active=!0},c.hideResult=function(){this.highScore.node.active=!1,this.resultEnd.node.active=!1},t}(a)).prototype,"scoreLabel",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=t(d.prototype,"highScore",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(d.prototype,"resultEnd",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=d))||S));c._RF.pop()}}}));
