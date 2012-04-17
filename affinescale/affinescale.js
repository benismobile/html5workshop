function init()
{

var canvas = document.getElementById("canvasimg") ;
var c = canvas.getContext("2d") ;

var img = new Image(256,256) ;


 img.src = "images/test1.png"  ;

 img.onload = function  (){ // wait for image to load before drawing on canvas
        c.drawImage(img, 0, 0);
};

} 


function rescaleCanvas(originalCanvas, scaledCanvas, scalefactor)
{
 
      
      
      //calculate new height and width for canvas
      var scaleheight = Math.ceil(originalCanvas.getAttribute("height") * scalefactor) ;
      var scalewidth = Math.ceil(originalCanvas.getAttribute("width") * scalefactor) ;
 
       scaledCanvas.setAttribute("height", scaleheight  ); // clears canvas
       scaledCanvas.setAttribute("width", scalewidth  );
     
     var context = scaledCanvas.getContext("2d") ;
     context.scale(scalefactor,scalefactor) ; // affine transform
     context.drawImage(originalCanvas, 0, 0);
     
    
} 



function resize()
{
    
    var originalCanvas = document.getElementById("canvasimg") ;
    var scaledCanvas = document.getElementById("scaledimg") ;
    var scaleFactor = document.getElementById("sclfct").value ;
    rescaleCanvas(originalCanvas, scaledCanvas, scaleFactor) ;
    
    
}