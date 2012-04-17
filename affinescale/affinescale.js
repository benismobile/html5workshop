function init()
{

var canvas = document.getElementById("canvasimg") ;
var c = canvas.getContext("2d") ;

var img = new Image(256,256) ;


 img.src = "images/test1.png"  ;

 img.onload = function  (){
        c.drawImage(img, 0, 0);
};

} //ends function init()


function rescaleCanvas(originalCanvas, scaledCanvas, scalefactor)
{
 
      var context = originalCanvas.getContext("2d") ;
      
     // var canvasdata =  context.getImageData(0,
      //                          0,
    //                            originalCanvas.height, originalCanvas.width);

      var scaleheight = Math.ceil(originalCanvas.getAttribute("height") * scalefactor) ;
      var scalewidth = Math.ceil(originalCanvas.getAttribute("width") * scalefactor) ;
 
      scaledCanvas.setAttribute("height", scaleheight  );
      scaledCanvas.setAttribute("width", scalewidth  );


     // var tempCanvas =  document.createElement("canvas");
     // tempCanvas.setAttribute("height", canvasdata.height );
     // tempCanvas.setAttribute("width", canvasdata.width );
     // tempCanvas.getContext("2d").putImageData(canvasdata, 0, 0);

     
     context.scale(scalefactor,scalefactor) ;
     context.drawImage(originalCanvas, 0, 0);
     
    
} // ends function rescaleCanvas



function resize()
{
    
    var originalCanvas = document.getElementById("canvasimg") ;
    var scaledCanvas = document.getElementById("scaleimg") ;
    rescaleCanvas(originalCanvas, scaledCanvas, 0.5) ;
    
    
}