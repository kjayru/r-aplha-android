function intentar(){var e,t=Ti.UI.createScrollView({top:1,width:"95%",height:"100%",scrollType:"vertical"}),i=Ti.UI.createWindow({backgroundImage:"/assets/fondo2.png",zIndex:1,fullscreen:!1,orientationModes:[Ti.UI.PORTRAIT],exitOnClose:!0,navBarHidden:!0}),o=(Ti.UI.createView({backgroundColor:"#003f88",width:"100%",height:65,bottom:0}),Ti.UI.createView({backgroundImage:"/assets/logofooter.png",zIndex:10,top:505,width:100,height:30})),a=Ti.UI.createLabel({top:540,width:70,height:27,left:20,color:"#000000",zIndex:11}),r=Ti.UI.createLabel({backgroundImage:"/assets/contador.png",width:"100%",height:40,top:0}),n=Ti.UI.createLabel({text:"",color:"#ffffff",font:{fontSize:28,fontFamily:"arial",fontWeight:"bold"},right:5,top:2});e="android"===Ti.Platform.name?Ti.UI.ActivityIndicatorStyle.DARK:Ti.UI.iPhone.ActivityIndicatorStyle.DARK;var d=Ti.UI.createActivityIndicator({color:"black",font:{fontFamily:"Helvetica Neue",fontSize:20,fontWeight:"bold"},message:"Abriendo...",style:e,backgroundColor:"#000000",height:"100%",width:"100%",color:"white",padding:10,opacity:.87,top:0,borderRadius:0,borderColor:"black",borderWidth:1});d.show();var c="http://productosalpha.com.pe/webservice/preguntas_guia.php",l={categoria:Titanium.API.nivel,idmobile:Ti.Platform.id,idpreg:Titanium.API.gl_id},s=Ti.Network.createHTTPClient({onload:function(){if(200==this.status){d.hide();var e=JSON.parse(this.responseText);Titanium.API.gl_imagen=e.imagen,Titanium.API.gl_incorrecta=e.incorrecta,Titanium.API.gl_id=e.id;var i=[{id:e.id,imagen:e.imagen,correcto:e.correcta,incorrecto:e.incorrecta,value:e.opciones[0].value,name:e.opciones[0].opcion0,rpta:e.activo},{id:e.id,imagen:e.imagen,correcto:e.correcta,incorrecto:e.incorrecta,value:e.opciones[1].value,name:e.opciones[1].opcion1,rpta:e.activo},{id:e.id,imagen:e.imagen,correcto:e.correcta,incorrecto:e.incorrecta,value:e.opciones[2].value,name:e.opciones[2].opcion2,rpta:e.activo}],o=[];Titanium.API.debug(JSON.stringify(i));for(var a=0;3>a;a++){var r=Ti.UI.createTableViewRow({className:"row",touchEnabled:!0,height:Ti.UI.SIZE,rowIndex:a,backgroundColor:"#103242",properties:{itemId:i[a].id,title:i[a].name,value:i[a].value,rpta:i[a].rpta,correcta:i[a].correcto,incorrecta:i[a].incorrecto,imagen:i[a].imagen,color:"white",bottom:15,width:"100%",right:0,type:"Ti.UI.Label"}}),n=Ti.UI.createLabel({color:"#ffffff",font:{fontFamily:"MYRIADPRO-REGULAR",fontSize:14},text:i[a].name,left:10,top:6,width:200,height:70}),c=Ti.UI.createImageView({image:"/assets/marcador.png",top:1,right:1,width:15,height:15,zIndex:15});r.add(n),r.add(c),o.push(r)}var l=Ti.UI.createTableView({backgroundColor:"transparent",data:o,top:220,width:210,right:35});l.addEventListener("click",function(e){d.show();var t=e.rowData;if(Titanium.API.itemId=t.properties.itemId,Titanium.API.value=t.properties.value,Titanium.API.correcta=t.properties.correcta,Titanium.API.incorrecta=t.properties.incorrecta,Titanium.API.imagen=t.properties.imagen,t.properties.rpta===t.properties.value){f.stop(),url2="http://productosalpha.com.pe/webservice/update.php";var i={idmobile:Ti.Platform.id,id_preg:Titanium.API.itemId},o=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if(Titanium.API.registrate="no"==e.registro?!1:!0,200==this.status){var t=require("/ui/common/ganaste");ganaste=new t,ganaste.open()}}});o.open("POST",url2),o.send(i)}else{f.stop(),url3="http://productosalpha.com.pe/webservice/intentos.php";var a={idmobile:Ti.Platform.id,id_preg:Titanium.API.itemId},r=Titanium.Network.createHTTPClient({onload:function(){if(200==this.status){var e=require("/ui/common/perdiste");perdiste=new e,perdiste.open(),d.hide()}}});r.open("POST",url3),r.send(a)}});var s=Ti.UI.createView({backgroundColor:"#76b2d3",width:"270",top:55,left:40,height:Ti.UI.SIZE}),T=Ti.UI.createLabel({width:"260",left:5,top:5,bottom:5,right:5,font:{fontFamily:"MYRIADPRO-REGULAR",fontSize:14},text:e.pregunta,color:"#343a36",height:Ti.UI.SIZE}),h=Ti.UI.createView({backgroundImage:"http://productosalpha.com.pe/webservice/img/"+Titanium.API.gl_imagen,zIndex:10,left:-10,top:190,width:103,height:143});s.add(T),t.add(s),t.add(l),t.add(h)}},onerror:function(){Ti.API.debug("Perdiste Conexión a internet")}});s.open("POST",c),s.send(l);Ti.UI.createView({width:290,top:168,height:400,right:0,zIndex:16});t.add(o),t.add(a),i.add(t),i.add(r),i.add(n),i.add(d);var T=function(e,t,i,o){return{total_sec:60*e+t,timer:this.timer,set:function(e,t){return this.total_sec=60*parseInt(e)+parseInt(t),this.time={m:e,s:t},this},start:function(){var e=this;return this.timer=setInterval(function(){e.total_sec?(e.total_sec--,e.time={m:parseInt(e.total_sec/60),s:e.total_sec%60},i()):(e.stop(),o())},1e3),this},stop:function(){return clearInterval(this.timer),this.time={m:0,s:0},this.total_sec=0,this}}},f=new T(0,30,function(){n.text=f.time.s},function(){d.show(),Titanium.API.incorrecta="Se te acabo el tiempo, Sigue intentado.",url4="http://productosalpha.com.pe/webservice/intentos.php";var e={idmobile:Ti.Platform.id,id_preg:Titanium.API.itemId},t=Titanium.Network.createHTTPClient({onload:function(){if(200==this.status){var e=require("/ui/common/perdiste");perdiste=new e,perdiste.open()}}});t.open("POST",url4),t.send(e)});return f.start(),n.text="30",f.set(0,30),d.hide(),i}module.exports=intentar;