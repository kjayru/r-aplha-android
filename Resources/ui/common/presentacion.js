function presentacion(){
	
	var self = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo2.png",
		zIndex:1,
		fullscreen:false,
		orientationModes: [Ti.UI.PORTRAIT],
		exitOnClose:true,
		navBarHidden:true
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
		top: 320,
		width:200,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:14,
		text:'INGRESAR',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundFocusedColor:'#000',
		backgroundDisabledColor:'#ff0000'
	});
	nboton.addEventListener('click',function(){
		var Selector = require("/ui/common/selector");
		 selector = new Selector();
		 selector.open();
	});
	self.add(nboton);
	return self;
}
module.exports = presentacion;