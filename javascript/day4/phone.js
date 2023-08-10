"use strict"

const searchfn=(e)=>{
    let input = e.target.value;
    let li = document.getElementsByTagName('li');
    [... li].forEach(item=> {
        let ele_a = item.getElementsByTagName('a')[0];
        let a_content = ele_a.textContent;
        if(a_content.indexOf(input)>-1){
            item.style.display="block";
        }
        else{
            item.style.display='none';
        }
    });
}


document.getElementById('input').addEventListener('input',searchfn);
    
