
$(".editar").click(function(){
	
   $("canvas").remove(".upper-canvas ");
   var im = $(this).attr("id");
   var canvas = document.getElementById("c");
   
   	var imga = new Image(), bmg = new Image(), bound;

	imga.src = "http://localhost:7888/admin3/" + im;
			 
	bmg.src = "http://localhost:7888/admin3/_imgs/site/logo_real.png";
	
	bmg.width = imga.width; 
	canvas.width = imga.width;
	canvas.height = imga.height;

	var cerrar_modal = $(".reveal-modal");
	//$('#reveal-modal').trigger('reveal:close');
	console.log(imga.src);
	
 (function() {

	 
  fabric.Object.prototype.transparentCorners = false;
  var $ = function(id){return document.getElementById(id)};

  fabric.Object.prototype.padding = 5;
  fabric.Object.prototype.transparentCorners = false;

  var canvas = this.__canvas = new fabric.Canvas('c'),
      f = fabric.Image.filters;


  fabric.Image.fromURL(imga.src, function(img) {
    canvas.backgroundImage = img;
    canvas.backgroundImage.width = img.width;
    canvas.backgroundImage.height = img.height;
  });


  fabric.Image.fromURL(bmg.src, function(img) {
	var oImg = img.set({width: imga.width, top: 50, crossOrigin: 'anonymous'}).scale(1);
    canvas.add(oImg).renderAll();
    canvas.setActiveObject(oImg);
    canvas.item(0).lockMovementX = true;
  });
      
	
	document.getElementById("guardar").onclick= function(){
		console.log(canvas.toDataURL());
		
	};
	
		
	document.getElementById("blur").onclick= function(){	
  		var rect = new fabric.Rect({
  			left: 100,
  			top: 50,
  			width: 100,
  			height: 100,
  			fill: '#fff',
  			opacity: 0.3
  });
		canvas.add(rect);
	
		
  	}
  	document.getElementById("glafixs").onclick= function(){
	
		var Imagen_para_cortar = new Image();
		
		Imagen_para_cortar.src = canvas.toDataURL();
		
		bound = canvas.item(1).getBoundingRect();
		
		var canvass = fx.canvas();
		var image = imga;
		var texture = canvass.texture(image);
	
		//canvass.draw(texture).bulgePinch(120, 120.5, 36, 1).update();
		canvass.draw(texture).triangleBlur(15).update();
		//prueba
		var imagenBlur = new Image();
		imagenBlur.src = canvass.toDataURL('image/png');
    	
		var canvasEl = document.getElementById('corte');
		
		canvasEl.width = imga.width;
		canvasEl.height = imga.height;

		// Canvas para realizar el corte de la Imagen
		var ctx = canvasEl.getContext('2d');
		
		//console.log(canvas.toDataURL())
				
		ctx.drawImage(Imagen_para_cortar, 0,0);
		ctx.clearRect(bound.left, bound.top, bound.width, bound.height );
			
		//canvas que obtiene el resultado final
		var canvasFinality = document.getElementById('final');
		
		canvasFinality.width = imga.width;
		canvasFinality.height = imga.height;

		// get 2d context to draw on (the "bitmap" mentioned earlier)
		var contexto = canvasFinality.getContext('2d');
		
		contexto.drawImage(canvass, 0,0);
		contexto.drawImage(canvasEl, 0,0);
		
		var Imagen_terminada = canvasFinality.toDataURL();
		
		var id = document.getElementById('id_escort').value;
		console.log(id);
		
		
		$.post("http://localhost:7888/admin3/index.php?r=escort/Guardarimagengaleriaeditada&="+id, {id : id, Imagen: Imagen_terminada, ajax : '1' },
			function(data){
				if(data == true){
					
				}
				else{
					
				}
			});

	}
  	
})();    

	
});
