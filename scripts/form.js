const myForm = document.querySelector('.form');
const send = document.querySelector('#send');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal__text');

send.addEventListener('click', sendForm); 

    function sendForm(e){
        e.preventDefault();
    
    if(validateForm(myForm)){
        let data = new FormData();
        data.append("name", myForm.elements.name.value);
        data.append("phone", myForm.elements.phone.value);
        data.append("comment", myForm.elements.comment.value);
        data.append("to", 'adadaev2016@gmail.com');

        // let data = {
        //     name: myForm.elements.name.value,
        //     phone: myForm.elements.phone.value,
        //     comment: myForm.elements.comment.value,
        //     to: 'adadaev2016@gmail.com'        
        // }

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(data);
        xhr.addEventListener('load', () => {
               document.body.style.overflow = 'hidden';
               modal.classList.remove('hide');
               modalText.innerText = xhr.response.message;
        })
    }
    }

    

modal.addEventListener('click', e=>{
    if(e.target.closest('.modal__btn') || e.target.classList.contains('modal')) {
        document.body.style.overflow = '';
        modal.classList.add('hide');
    }
})

function validateForm(form){
    let valid = true;

    if(!validateField(form.elements.name)){
        valid = false;
    }
    if(!validateField(form.elements.phone)){
        valid = false;
    }
    if(!validateField(form.elements.comment)){
        valid = false;
    }

    return valid;
}

function validateField(field){
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}
