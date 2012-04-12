function setupcanvas()
{

var img = new Image(255,255) ;
img.src = "images/test1.png"  ;

var canvas = document.getElementById("canvasimg") ;
var context = canvas.getContext("2d") ;

img.onload = function() {
    context.drawImage(img, 0, 0);
};

var drawMode = false ;

// add some mouse event listenters to canvas

canvas.addEventListener("mousemove", mousemoveev, false);
canvas.addEventListener("mousedown", mousedownev, false);
canvas.addEventListener("mouseout", mouseoutev, false);
canvas.addEventListener("mouseup", mouseupev, false);

var c = canvas.getContext("2d") ;

function mousemoveev(e){ 
        
		if ( drawMode === true )
		{
            e.stopPropogtion() ;
		    e.preventDefault() ;	
			var xy = getxy(e, canvas ) ;

			 c.lineWidth = 1;
			 c.strokeStyle = '#000';	
			 c.fillStyle = '#00A308';
			 c.tertStyle = '#DDD';
			 c.strokeFill = 1; //outline shapes
			 c.fillRect(xy.x,xy.y,5,5) ;	
			 return ;
		}


	}



function mouseoutev(e){    

    e.stopPropogtion() ;
    e.preventDefault() ;
	c.drawImage(img, 0, 0);
}

function mouseupev(e){ 
    
    e.stopPropogtion() ;
    e.preventDefault() ;
	drawMode = false ;
}

function mousedownev(e){
    
    e.stopPropogtion() ;
    e.preventDefault() ;	 
    drawMode = true ;
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






