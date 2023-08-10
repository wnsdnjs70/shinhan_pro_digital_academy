
let accordion = document.getElementsByClassName('accordion');

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = '';
        }
        else{
            panel.style.maxHeight = "10vh";
        }
    })
}


