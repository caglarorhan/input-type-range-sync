
window.addEventListener('load',function(){totalLoad();});

function totalLoad(){
    const controlsRange = document.querySelectorAll('input[type="range"]');
// default ranges are 0 to 100.
// you can change them with max="11111" min="1" and give a step with step="0.1"
    controlsRange.forEach(input => {
        input.addEventListener('mousedown',sync,true);
        input.addEventListener('click',detector,true);
        input.addEventListener('mouseup',unsync,true);
        input.setAttribute('data-current-value',0);
    });

    function sync(event){
        let targetInput = event.target;
        console.log(`Syncing... Last value is ${targetInput.value}`);
        targetInput.addEventListener('mousemove',detector,true) ;
    }


    function detector(event){
        let targetInput = event.target;
        console.log('sysnc done:'+ targetInput.value);
        targetInput.dataset.currentValue = targetInput.value;
    }


    function unsync(event){
        let targetInput = event.target;
        console.log(`Unsyncing... Last value is ${targetInput.value}`);
        targetInput.removeEventListener('mousemove',detector,true);

    }


}



