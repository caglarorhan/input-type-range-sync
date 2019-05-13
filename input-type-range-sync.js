window.addEventListener('load',function(){totalLoad();});

function totalLoad(){

    const controlsRange = document.querySelectorAll('.controls input[type="range"]');
    const controlsColor = document.querySelectorAll('.controls input[type="color"]');
    controlsRange.forEach(input => input.addEventListener('mousedown',sync,true));
    controlsRange.forEach(input => input.addEventListener('click',detector,true));
    controlsRange.forEach(input => input.addEventListener('mouseup',unsync,true));
    controlsColor.forEach(input => input.addEventListener('change',detector,true));

}


function sync(event){
    let input = event.target;
    console.log(`Syncing... Last value is ${input.value}`);
    input.addEventListener('mousemove',detector,true) ;
}


function detector(event){
    let input = event.target;
    console.log('sysnc done:'+ input.value);
    let sizing = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,`${input.value}${sizing}`);

}



function unsync(event){
    let input = event.target;
    console.log(`Unsyncing... Last value is ${input.value}`);
    input.removeEventListener('mousemove',detector,true);

}
