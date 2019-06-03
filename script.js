'use strict';
window.addEventListener('DOMContentLoaded', function() {


  const slider = (function() {
    const 
      slider_items = document.querySelectorAll('.slider_item'),
      arrows = document.querySelectorAll('.arrow'),
      dots = document.querySelectorAll('.dot'),
      index = {
        ind: 0,
        upper() {
          this.ind++;
          return this.ind;
        },
        lower() {
          this.ind--;
          return this.ind;
        }
      }

    let getTransformSlider = function(direction) {     
      if (direction === 'right') { 

        slider_items[index.ind].style.opacity = '0';   
        dots[index.ind].classList.remove('dotColor');    

        let promise = new Promise(resolve => { 
          setTimeout(() => {
            slider_items[index.ind].classList.add('hidden');
            index.ind < slider_items.length - 1 ? index.upper() : index.ind = 0; 
            resolve();
            return promise; 
          }, 200)                  
        });
          promise.then(() => {
            slider_items[index.ind].classList.remove('hidden');               
            dots[index.ind].classList.add('dotColor'); 
          })
          .then(() => {
            slider_items[index.ind].style.opacity = '1'; 
          })   
      }


      if (direction === 'left') {

        slider_items[index.ind].style.opacity = '0';
        dots[index.ind].classList.remove('dotColor');

        let promise = new Promise(resolve => { 
          setTimeout(() => {
            slider_items[index.ind].classList.add('hidden');
            index.ind > 0 ? index.lower() : index.ind = slider_items.length - 1; 
            resolve();
            return promise; 
          }, 200)
        });

        promise.then(() => {       
          slider_items[index.ind].classList.remove('hidden');              
          dots[index.ind].classList.add('dotColor');    
        })
        .then(() => {
          slider_items[index.ind].style.opacity = '1'; 
        }) 
      }
    }

    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        let direction = arrow.classList.contains('arrowRight') ? 'right' : 'left';
        getTransformSlider(direction);
      })
    });
      
  }());




  
})
