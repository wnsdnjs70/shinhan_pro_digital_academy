
let list = document.getElementsByClassName('tabItem');

// console.log
for(let item of list){

    item.addEventListener('click',function(){
        if(item.getAttribute('tabindex') == 1){
            document.getElementById('tabpanel2').style.display='none';
            document.getElementById('tabpanel1').style.display='block';
            document.getElementById('tabpanel3').style.display='none';
        }
        else if(item.getAttribute('tabindex') == 2){
            document.getElementById('tabpanel1').style.display='none';
            document.getElementById('tabpanel2').style.display='block';
            document.getElementById('tabpanel3').style.display='none';
        }
        else if(item.getAttribute('tabindex') == 3){
            document.getElementById('tabpanel3').style.display='block';
            document.getElementById('tabpanel2').style.display='none';
            document.getElementById('tabpanel1').style.display='none';
        }

    });
}