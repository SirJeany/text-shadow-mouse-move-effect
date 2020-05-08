'use strict';


const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
// console.log(text.clientWidth, text.offsetHeight)
const walk = 100; // The max that the shadow could stretch in both directions. (So max 50 up or down)

function shadow(e) {
    // console.log(e);
    // Get the x and y of the thing we are dealing with:
    const { offsetWidth: width, offsetHeight: height } = hero;
    // Above the same as the individual "const width = hero.offsetWidth ..."
    
    // Cursor x and y:
    // Note that the x and y vals change depending on if we hove over children of the parent
    let { offsetX: x, offsetY: y } = e;
    
    // Now make sure that we keep x and y only for the hero:
    // console.log(this, e.target);
    if(!this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    // console.log(x, y)

    const xWalk = Math.round((x/width * walk) - (walk/2)); 
    const yWalk = Math.round((y/height * walk) - (walk/2)); 
    // console.log(xWalk, yWalk);
    
    // text.style.textShadow = `${xWalk}px ${yWalk}px 1.5px rgba(160, 0, 0, 0.8)`;
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 1.5px rgba(160, 0, 0, 0.8),
        ${xWalk * -1 }px ${yWalk}px 1.5px rgba(0, 160, 0, 0.8),
        ${xWalk }px ${yWalk * -1}px 1.5px rgba(0, 160, 160, 0.8),
        ${yWalk }px ${xWalk}px 1.5px rgba(0, 0, 160, 0.8)
    `;
    // console.dir(JSON.stringify(text.style.textShadow))
}



hero.addEventListener('mousemove', shadow);