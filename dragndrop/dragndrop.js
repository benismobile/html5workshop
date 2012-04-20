function init()
{
   
   var dragSrcEl ;
   var steps = document.querySelectorAll('#workflow #steps header');
   [].forEach.call(steps, function(step) {
       
  step.addEventListener('dragstart', handleDragStart, false);
  step.addEventListener('dragend', handleDragEnd, false);


}); 

   var dropboxes = document.querySelectorAll('#workflow #dropboxarea header');
   [].forEach.call(dropboxes, function(dropbox) {
 
   dropbox.addEventListener('dragover', handleDragOver, false);
   dropbox.addEventListener('drop', handleDrop, false);
 

}); 

function handleDrop(e) {
  
  
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same step we're dragging.
  if (dragSrcEl != this) {
    // Set the source steps HTML to the HTML of the dropbox dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragOver(e) {

 if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }
  e.preventDefault() ; // drop won't work if you don't preven default dragover
  this.style.opacity = '0.4';

}

function handleDragStart(e) {


  this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}



function handleDragEnd(e) {
  this.style.opacity = '1';

  
}



}