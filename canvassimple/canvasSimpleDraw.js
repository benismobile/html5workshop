function setupcanvas()
{

var img = new Image(255,255) ;
img.src = "images/test1.png"  ;

var canvas = document.getElementById("canvasimg") ;
var context = canvas.getContext("2d") ;

// wait for image to load before drawing image on canvas
img.onload = function() {
    context.drawImage(img, 0, 0);
};

var drawMode = false ;  // only draw when mouse down

// add some mouse event listenters to canvas

canvas.addEventListener("mousemove", mousemoveev, false);
canvas.addEventListener("mousedown", mousedownev, false);
canvas.addEventListener("mouseout", mouseoutev, false);
canvas.addEventListener("mouseup", mouseupev, false);

var c = canvas.getContext("2d") ;

// if button down fraw when mouse is moving
function mousemoveev(e){ 
        
		if ( drawMode === true )
		{
            e.stopPropagation() ;
		    e.preventDefault() ;	
			var xy = getxy(e, canvas ) ; 
				
			 c.fillStyle = '#00A308';	// green		
			 c.fillRect(xy.x,xy.y,5,5) ;  // draw 5 pixel square at mouse screen postion	
			 return ;
		}


	}


// clear canvas when mouse moves out of canvas area
function mouseoutev(e){    

    e.stopPropagation() ;
    e.preventDefault() ;
	c.drawImage(img, 0, 0);  // clear canvas when mouse out
}

// stop drawing when mouse button up
function mouseupev(e){ 
    
    e.stopPropagation() ;
    e.preventDefault() ;
	 drawMode = false ; // don't draw when unless mouse down
}
// start drawing when mouse button down
function mousedownev(e){
    
    e.stopPropagation() ;
    e.preventDefault() ;	 
    drawMode = true ; // mouse is down so start drawing
}
	

}

function getxy(e, o) {
//gets mouse position relative to object o

		var ev = e || window.event;
		var bo = getpos(o);
		var x = ev.clientX - bo.x ;	//correct for canvas position, workspace scroll offset
		var y = ev.clientY - bo.y ;									
		x += document.documentElement.scrollLeft;	//correct for window scroll offset
		y += document.documentElement.scrollTop;									
		return { x: x-0.5, y: y-0.5 }; //-.5 prevents antialiasing of stroke lines

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
	return { x:x, y:y } ;
     
}






