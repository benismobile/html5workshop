function init()
{

var img = new Image(255,255) ;
img.src = "/images/test1.png"  ;

var canvas = document.getElementById("canvasimg") ;
var canvasContext = newCanvas.getContext("2d") ;
var c = canvas.getContext("2d") ;

img.onload = function  (){
        c.drawImage(img, 0, 0);
};


newCanvas.onmousemove = function(e){ 

        e.preventDefault() ;
		drawMode = true ;
		
		var xy = getxy(e, newCanvas ) ;

		canvasContext.drawImage(img, 0, 0);
		

		var imgd = c.getImageData(xy.x, xy.y, 1 ,1 ) ;
		var pix1 = imgd.data ;
		var i = 0 ;
		var red = pix1[i]; // red
    		var green =  pix1[i+1]; // green
		var blue =  pix1[i+2]; // blue
		var w = newCanvas.width;
		var h = newCanvas.height;
		var rect = { left : 0, top : 0, width : w, height : h } ;
		var idata = c.getImageData(rect.left, rect.top, rect.width ,rect.height ) ;
		var pix = idata.data;


		// Loop over each pixel and darken the color of all other pixels in image
            // that have a different color to the selected pixel
		for (var i = 0, n = pix.length; i < n; i += 4) {
					
			 var brightness = 0.75 ;
			 if (	pix[i ] == red &&  pix[i+1] == green && pix[i+2] == blue )
				brightness = 1.00 ;																				
			
			  var r = 0 ;
			  if ((r = pix[i] * brightness  ) > 255 )
					pix[i] = 255;
			  else if (r < 0)
					pix[i] = 0;
			  else
 					pix[i] = r;

			  var g = 0 ;
			  if ((g = pix[i+1] * brightness  ) > 255 )
					pix[i+1] = 255;
			  else if (g < 0)
					pix[i+1] = 0;
			  else
 					pix[i+1] = g;
						
			  var h = pix[i+2] * brightness
			  var h = 0 ;
			  if ((h = pix[i+2] * brightness  ) > 255 )
					pix[i+2] = 255;
			  else if (h < 0)
					pix[i+2] = 0;
			  else
 					pix[i+2] = h;

							
			  
			}

			c.putImageData(idata, 0, 0);
			

	}



}



function getxy(e, o) {
//gets mouse position relative to object o

	
		var bo = getpos(o);
		var x = e.clientX - bo.x ;	//correct for canvas position, workspace scroll offset
		var y = e.clientY - bo.y ;									
		x += document.documentElement.scrollLeft;	//correct for window scroll offset
		y += document.documentElement.scrollTop;										
		return { x: x-.5, y: y-.5 }; //-.5 prevents antialiasing of stroke lines

}


function getpos(o) {
//gets position of object o
	var bo, x, y, b; x = y = 0;
	if(document.getBoxObjectFor) {	//moz
		bo = document.getBoxObjectFor(o);
		x = bo.x; y = bo.y;
	} else if (o.getBoundingClientRect) { //ie (??)
		bo = o.getBoundingClientRect();
		x = bo.left; y = bo.top;
	} else { //opera, safari etc
		while(o && o.nodeName != 'BODY') {
			x += o.offsetLeft;
			y += o.offsetTop;
			b = parseInt(document.defaultView.getComputedStyle(o,null).getPropertyValue('border-width'));
			if(b > 0) { x += b; y +=b; }
			o = o.offsetParent;
		}
	}
	return { x:x, y:y }
}




