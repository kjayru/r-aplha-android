function ganaste(){
		var scroll = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%",
		scrollType:'vertical'
	});
	
	var self = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo2.png",
		zIndex:1,
		 orientationModes: [Ti.UI.PORTRAIT],
        fullscreen: false,
        exitOnClose:true,
        navBarHidden:true
	});
	
var lienzo = Ti.UI.createView({
		backgroundColor:"#183345",
		width:300,
		heigth:"100%",
		top:0,
		left:-300,
		zIndex:131
	});
	
//// lienzo animado
     ////creando boton
     var ctnBoton01 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:0,
     	left:0,
     	zIndex:1
     });
	var btn01 = Ti.UI.createButton({
		
		title:"Mira tu puntaje",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",

		 font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph1  = Ti.UI.createImageView({
		image:"/assets/puntaje.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	
    var ctnBoton02 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:40,
     	left:0,
     	zIndex:1
     });
	var btn02 = Ti.UI.createButton({		
		title:"Aprende a jugar",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph2  = Ti.UI.createImageView({
		image:"/assets/aprende.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	var ctnBoton03 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:80,
     	left:0,
     	zIndex:1
     });
	var btn03 = Ti.UI.createButton({
		
		title:"Premios",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",

		 font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph3  = Ti.UI.createImageView({
		image:"/assets/premios.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	
	var ctnBoton04 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:120,
     	left:0,
     	zIndex:1
     });
	var btn04 = Ti.UI.createButton({		
		title:"Mécanica",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph4  = Ti.UI.createImageView({
		image:"/assets/mecanica.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	
	var ctnBoton05 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:160,
     	left:0,
     	zIndex:1
     });
	var btn05 = Ti.UI.createButton({		
		title:"Términos y Condiciones",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph5  = Ti.UI.createImageView({
		image:"/assets/terminos.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	
	var ctnBoton06 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:200,
     	left:0,
     	zIndex:1
     });
	var btn06 = Ti.UI.createButton({		
		title:"Salir",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph6  = Ti.UI.createImageView({
		image:"/assets/out.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});

	 self.add(lienzo);
	 lienzo.add(ctnBoton01);
	 ctnBoton01.add(btn01);
	 ctnBoton01.add(graph1);
	 
	 lienzo.add(ctnBoton02);
	 ctnBoton02.add(btn02);
	 ctnBoton02.add(graph2);
	 
	 lienzo.add(ctnBoton03);
	 ctnBoton03.add(btn03);
	 ctnBoton03.add(graph3);
	 
	 lienzo.add(ctnBoton04);
	 ctnBoton04.add(btn04);
	 ctnBoton04.add(graph4);
	 
	 lienzo.add(ctnBoton05);
	 ctnBoton05.add(btn05);
	 ctnBoton05.add(graph5);
	 
	 lienzo.add(ctnBoton06);
	 ctnBoton06.add(btn06);
	 ctnBoton06.add(graph6);
	var logoFooter = Ti.UI.createView({
		backgroundImage:"/assets/logofooter.png",
		zIndex:10,
		top:400,
		width:100,
		height:30,
		zIndex:11
	});
	
	var logoBottom = Ti.UI.createLabel({
		top: 490,
		width:70,
		height:27,
		left:20,
		color:'#000000'
	});
	
	var boca  = Ti.UI.createImageView({
		backgroundImage:'http://productosalpha.com.pe/webservice/img/'+Titanium.API.imagen,
		width:150,
		height:197,
		
		zIndex:10,
		top:45
	});
	var titulo = Ti.UI.createLabel({
		text:'¡Respuesta Correcta! Ganastes 10 puntos',
		backgroundColor:'#103242',
		color:'#ffffff',
		top:255,
		width:200,
		height:46,
		zIndex:12,
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var contexto = Ti.UI.createLabel({
		html:Titanium.API.correcta,
		backgroundColor:'#ffffff',
		color:'#103242',
		width:200,
		height:70,
		top:301,
		zIndex:11,
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	var btnRegistro = Ti.UI.createButton({
		top: 390,
		width:200,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:14,
		title:'REGISTRATE',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundFocusedColor:'#000',
		backgroundDisabledColor:'#ff0000'
	});
	
	var btnRegistro2 = Ti.UI.createButton({
		top: 390,
		width:200,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:14,
		title:'SIGUIENTE DESAFIO',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundFocusedColor:'#000',
		backgroundDisabledColor:'#ff0000'
	});
	
	 var barraFoot = Ti.UI.createView({
  	  backgroundColor:"#003f88",
  	  width:"100%",
  	  height:40,
  	  bottom:0,
  	  zIndex:100
  });

  btnPuntaje = Ti.UI.createButton({
  	title:'PUNTAJE',
  	backgroundColor:"#003f88",
  	left:5,
  	width:150,
  	height: 40,
  	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
  	color:'#ffffff',
  	zIndex:101,
  	bottom:0,
  	font:{fontFamily:'MYRIADPRO-BOLD',fontSize:12} 	
  });
   btnSalir = Ti.UI.createButton({
  	title:'SALIR',
  	backgroundColor:"#003f88",
  	right:5,
  	width:150,
  	height: 40,
  	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER ,                                                                                  
  	color:'#ffffff',
  	zIndex:102,
  	bottom:0,
  	font:{fontFamily:'MYRIADPRO-BOLD',fontSize:12}
  });
  
  	var style;
if (Ti.Platform.name === 'android'){
  
  style = Ti.UI.ActivityIndicatorStyle.DARK;
}
else {
 style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK; 
}	
var activityIndicator = Ti.UI.createActivityIndicator({
  color: 'black',
  font:{fontFamily:'MYRIADPRO-BOLD',fontSize:20},
  message: 'Cargando...',
  style:style,
  backgroundColor : '#000000',
  height:"100%",
  width:"100%",
  color : 'white',
  padding : 10,
  opacity : 0.87,
  top : 0,
  borderRadius : 0,
  borderColor : 'black',
  borderWidth : 1
});
    
btnPuntaje.addEventListener('click',function(){
 
  var xurl = "http://productosalpha.com.pe/webservice/puntos.php";
   var envios = ({
   	'idmobile':Ti.Platform.id
   });
  var misPuntos = Ti.Network.createHTTPClient({
  	onload: function(e){
  		data = JSON.parse(this.responseText);
  		var alertPuntaje = Ti.UI.createAlertDialog({
 		title:'Puntos Ganados',
 		message:"Tienes "+ data.puntos +" puntos acomulados",
 		buttonNames:['Ok']
 	});
 	alertPuntaje.show();
 	return false;
  	}
  });
  misPuntos.open("POST",xurl);
  misPuntos.send(envios);
 });
 
 
 btnSalir.addEventListener('click',function(){
 	 var activity = Titanium.Android.currentActivity;
        activity.finish();
 }); 
  
  self.add(btnPuntaje);
  self.add(btnSalir);
  self.add(barraFoot);
	self.add(scroll);
	if(Titanium.API.registrate==false){
	  scroll.add(btnRegistro);
	  
	  btnRegistro.addEventListener('click',function(){
	  		var Opciones = require('/ui/common/opciones');
	  			opciones = new Opciones();
	  			opciones.open();		
	  });	
	}else{
	scroll.add(btnRegistro2);
	btnRegistro2.addEventListener('click',function(){
	activityIndicator.show();
	var surl = "http://productosalpha.com.pe/webservice/bqintentos.php";
	parame=({
					'idmobile':Ti.Platform.id
				});
	var consulta = Ti.Network.createHTTPClient({
		onload: function(e){
			var getdata = JSON.parse(this.responseText);
			
			if(this.status==200){
			activityIndicator.hide();
				if(getdata.estado=="bloque"){
					alert("Agotaste los intentos por hoy trata mañana..");
				}else{
						var Preguntas = require('/ui/common/preguntas');
					  		preguntas = new Preguntas();
					  		preguntas.open();
					}
  			}
		}
		
	});
   consulta.open("POST",surl);
   consulta.send(parame);	  				
  });	
}
	scroll.add(logoFooter);
	scroll.add(boca);
	scroll.add(contexto);
	scroll.add(titulo);
	scroll.add(logoBottom);
	self.add(activityIndicator);
	return self;
};
module.exports = ganaste;
