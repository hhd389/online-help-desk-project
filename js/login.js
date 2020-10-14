const input = document.querySelectorAll('input');
input.forEach(item => {
    item.addEventListener('focus',(e) => {
       item.offsetParent.classList.add('active');
    });
    item.addEventListener('blur',(e) => {
        if(e.target.value == ""){
            item.offsetParent.classList.remove('active');
        }
    });
});