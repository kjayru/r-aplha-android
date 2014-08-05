function presentacion(){
	
	var self = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo.jpg",
		zIndex:1,
		fullscreen:false,
		orientationModes: [Ti.UI.PORTRAIT],
		exitOnClose:true,
		navBarHidden:true
	});
	var scroll = Ti.UI.createScrollView({
		top:1,
		width:"98%",
		height:"100%",
		scrollType:'vertical'
	});
	var monstrito1 = Ti.UI.createImageView({
		image:"/assets/mons4.png",
		width:80,
		height:88,
		top:20,
		left:20,
		zIndex:2
	});
	var monstrito2 = Ti.UI.createImageView({
		image:"/assets/mos3.png",
		width:130,
		height:129,
		top:20,
		right:10,
		zIndex:3
	});
	var logosa = Ti.UI.createImageView({
		image:"/assets/alphaLOGO.png",
		width:300,
		heigh:143,
		top:90,
		left:30,
		zIndex:21
	});
	var contenedor = Ti.UI.createView({
		backgroundColor:"#ffffff",
		zIndex:2,
		width:"70%",
		height:130,
		top:230
	});
	var texto = Ti.UI.createLabel({
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		html:"El desafío Alpha es un reto para valientes, responde de manera correcta las preguntas que te haremos y ¡gana puntos para canjear grandes premios!",
		top:10,
		left:10,
		width:"90%",
		color:"#000000"
	});
	contenedor.add(texto);
   var style;
	if (Ti.Platform.name === 'android'){
	  
	  style = Ti.UI.ActivityIndicatorStyle.DARK;
	}
	else {
	 style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK; 
	}
	var activityIndicator = Ti.UI.createActivityIndicator({
	  color: 'black',
	  font: {fontFamily:'Helvetica Neue', fontSize:20, fontWeight:'bold'},
	  message: 'Abriendo...',
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

	var nboton = Ti.UI.createButton({
		top: 380,
		width:200,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:22,
		title:'INGRESAR',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	nboton.addEventListener('click',function(){				
///////// existe registro
	if(Titanium.Network.online){
	    	////verficamos existencia de registro de UUID
				var url='http://productosalpha.com.pe/webservice/verificacion.php';
				param=({
						'idmobile':Ti.Platform.id
					});
				 var client = Ti.Network.createHTTPClient({
				     onload : function(e) {      
				        var getdata = JSON.parse(this.responseText);
				        Titanium.API.nivel = getdata.level;
				        niveles = Titanium.API.nivel;	
				        if(getdata.registro=="registra"){	
					
							//var firstView = new FirstView();
							//self.add(firstView);	
							var Selector = require("/ui/common/selector");
							 selector = new Selector();
							 selector.open();								
				 }else{	 
				 	   
				 			Titanium.API.nivel = getdata.level;	
							
							var Bienvenida = require('/ui/common/bienvenido');
							var bienvenida = new Bienvenida();
							bienvenida.open();	
							
							
					    }
				     },
				     // function called when an error occurs, including a timeout
				     onerror : function(e) {
				         Ti.API.debug(e.error);
				          alert('No tienes conexion a internet');
				     },
				     onreadystatechange: function(e){
				     	if(e.readyState==4){
				     		activityIndicator.hide();
				     	}else{
				     		activityIndicator.show();
				     	}
				     }
				 });
				 // Prepare the connection.
				 client.open("POST", url);
				 // Send the request.
				 client.send(param);
	    
	}else {
		
	       var vista = Ti.UI.createView({
	       	width:'100%',
	       	height:'100%',
	       	top:0,
	       	zIndex:10
	       });
	       var toast = Ti.UI.createNotification({
			    message:"Su dispositivo no tiene conexión a internet Intentelo mas tarde."
			});
			toast.show();
			
			vista.addEventListener('click',function(){
					 var activity = Titanium.Android.currentActivity;
	        		activity.finish();
			});
		self.add(vista);
		}

//////// fin de codigo
	});
	scroll.add(logosa);
	scroll.add(nboton);
	scroll.add(contenedor);
	scroll.add(monstrito1);
	scroll.add(monstrito2);
	self.add(scroll);
	
	return self;
}
module.exports = presentacion;