// Declearing variable
const viewBtn = document.querySelector('.view-modal');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close'); 
const field = document.querySelector('.field');
const input = document.querySelector('input');
const copy = document.querySelector('#cp');

viewBtn.onclick = ()=>{
    popup.classList.toggle("show"); 
}

close.onclick = ()=>{
    viewBtn.click();
}

copy.onclick = ()=>{
    input.select();// select input value
    if(document.execCommand('copy')){ // if selected value is copied
        field.classList.add('active');
        copy.innerText = "Copied";
        setTimeout(() => {
            field.classList.remove("active");
            copy.innerText = "Copy";
            window.getSelection().removeAllRanges();
        }, 3000);
    }
}


