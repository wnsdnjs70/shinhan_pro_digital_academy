const mytabs = document.querySelectorAll('.tabItem');
const tabpanels = document.querySelectorAll('.tabpanel');

const init = function(){
    let initli = mytabs[0].firstElementChild;
    let initA = initli.parentElement.parentElement.getAttribute('aria-controls');
    console.log(initA);
    initli.classList.add('tabBtn');
    initli.focus();
    let initId = document.getElementById(initA);
    console.log(initId);
    initId.classList.add('visit');
}
init();

mytabs.forEach(item => {
    item.firstChild.addEventListener('focus',function(event){
        event.preventDefault();
        
    })
})