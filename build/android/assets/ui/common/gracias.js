function gracias(){var e=Ti.UI.createScrollView({top:1,width:"95%",height:"100%",zIndex:12,scrollType:"vertical"}),t=Ti.UI.createWindow({backgroundImage:"/assets/fondo2.png",zIndex:1,fullscreen:!1,orientationModes:[Ti.UI.PORTRAIT],exitOnClose:!0,navBarHidden:!0}),o=Ti.UI.createView({backgroundImage:"/assets/logofooter.png",zIndex:10,top:520,width:100,height:30,zIndex:11}),i=Ti.UI.createLabel({top:590,width:70,height:27,left:20,color:"#000000"}),a=Ti.UI.createImageView({backgroundImage:"/assets/grafico_win.png",width:150,height:197,zIndex:10,top:45}),n=Ti.UI.createLabel({html:"¡Gracias por<br> Registrarte!<br> ya tienes 10 puntos",backgroundColor:"#103242",color:"#ffffff",top:255,width:250,height:80,zIndex:12,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,font:{fontSize:20,fontWeight:"bold"}}),r=Ti.UI.createView({backgroundColor:"#ffffff",color:"#103242",width:250,height:120,top:330,zIndex:11}),d=Ti.UI.createButton({backgroundImage:"/assets/facebook.png",width:40,height:40,bottom:5,left:80,zIndex:20}),l=Ti.UI.createButton({backgroundImage:"/assets/twitter.png",width:40,height:40,bottom:5,right:80,zIndex:21}),c=Ti.UI.createLabel({text:"¡Elige otro desafio! y gana mas puntos! Comparte la aplicación y gana un punto extra.",width:230,height:60,top:5,left:5,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,color:"#000000"}),s=Ti.UI.createButton({top:470,width:250,height:40,backgroundColor:"#37ade2",zIndex:14,title:"SIGUIENTE DESAFIO",color:"#ffffff",font:{fontFamily:"Minecrafter_3",fontSize:14},textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),f=Ti.UI.createView({backgroundColor:"#003f88",width:"100%",height:40,bottom:0,zIndex:100});return btnPuntaje=Ti.UI.createButton({title:"PUNTAJE",backgroundColor:"#003f88",left:5,width:150,height:40,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,color:"#ffffff",zIndex:101,bottom:0,font:{fontFamily:"MYRIADPRO-BOLD",fontSize:12}}),btnSalir=Ti.UI.createButton({title:"SALIR",backgroundColor:"#003f88",right:5,width:150,height:40,textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,color:"#ffffff",zIndex:102,bottom:0,font:{fontFamily:"MYRIADPRO-BOLD",fontSize:12}}),s.addEventListener("click",function(){var e=require("/ui/common/preguntas");preguntas=new e,preguntas.open()}),btnPuntaje.addEventListener("click",function(){var e="http://productosalpha.com.pe/webservice/puntos.php",t={idmobile:Ti.Platform.id},o=Ti.Network.createHTTPClient({onload:function(){data=JSON.parse(this.responseText);var e=Ti.UI.createAlertDialog({title:"Puntos Ganados",message:"Tienes "+data.puntos+" puntos acomulados",buttonNames:["Ok"]});return e.show(),!1}});o.open("POST",e),o.send(t)}),btnSalir.addEventListener("click",function(){var e=Titanium.Android.currentActivity;e.finish()}),d.addEventListener("click",function(){var e=require("facebook");e.appid=0x4f6b4f322dbd7,e.permissions=["publish_stream"],e.forceDialogAuth=!0,e.authorize(),e.requestWithGraphPath("me/feed",{message:"El desafío Alpha es un reto para valientes, responde de manera correcta las preguntas que te haremos y ¡gana puntos para canjear grandes premios!",picture:"http://productosalpha.com.pe/webservice/share.png"},"POST",function(e){if(e.success){var t="http://productosalpha.com.pe/webservice/compartir.php";nparametro={idmobile:Ti.Platform.id},sumarPunto=Ti.Network.createHTTPClient({onload:function(){midata=JSON.parse(this.responseText),"ok"==midata.rpta&&200==this.status&&alert("Ganaste un punto extra!!!")}}),sumarPunto.open("POST",t),sumarPunto.send(nparametro)}else alert(e.error?"Error de aplicación":"No hay parametros definidos")})}),r.add(c),r.add(d),r.add(l),t.add(btnPuntaje),t.add(btnSalir),t.add(f),t.add(e),t.add(a),e.add(r),e.add(n),e.add(i),e.add(s),e.add(o),t}module.exports=gracias;