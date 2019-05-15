// version 2019.2.1
window.addEventListener('load',function(){totalLoad();});

function totalLoad(){
    // change .itrs class selector below with your own target input class
    const controlsRange = document.querySelectorAll('input[type="range"], .itrs ');

    controlsRange.forEach(input => {
        input.addEventListener('mousedown',sync,true);
        input.addEventListener('click',detector,true);
        input.addEventListener('mouseup',unsync,true);
        input.setAttribute('data-current-value',0);

    });

    function sync(event){
        let targetInput = event.target;
        //console.log(`Syncing... Last value is ${targetInput.value}`);
        targetInput.addEventListener('mousemove',detector,true) ;
    }


    function detector(event){
        let targetTypes = ["input"]
        let targetInput = event.target;
        //console.log('sysnc done:'+ targetInput.value);
        targetInput.dataset.currentValue = targetInput.value;

        if(targetInput.dataset.syncTo){
            

            if(document.querySelector('#'+targetInput.dataset.syncTo)){

                document.querySelector('#'+targetInput.dataset.syncTo).value = targetInput.value;
            }else{
                window[targetInput.dataset.syncTo](targetInput.value);
            }
        }
    }


    function unsync(event){
        let targetInput = event.target;
        //console.log(`Unsyncing... Last value is ${targetInput.value}`);
        targetInput.removeEventListener('mousemove',detector,true);

    }



}



//for example -sample function-- you should use your own functions
function whatsTheValue(currentVal){
    document.querySelector('#input_3_sync').value=currentVal
}





