import throttle from 'lodash.throttle';

const feedForm = document.querySelector('.feedback-form');

feedForm.addEventListener('input',throttle(formHandler,500));
feedForm.addEventListener('submit',submitHandler);
let formData = {
    "email":'',
    "message":''
   };
  
if(localStorage.getItem("feedback-form-state")){
    const localData = JSON.parse(localStorage.getItem("feedback-form-state"));
    const {email,message} = localData;
    formData = {
        "email":email,
        "message":message
    };
    feedForm.email.value = email;
    feedForm.message.value = message;
}

function formHandler({target:{name,value}}){

    formData = {
    ...formData,
        [name] : value,

   };
// console.log(formData);
localStorage.setItem("feedback-form-state",JSON.stringify(formData));
}

function submitHandler(evt){
    evt.preventDefault();

    if(!formData.email || !formData.message) {
        alert("all areas must been fill");
        return; }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    
    feedForm.reset();
    formData = {
        "email":"",
        "message":""
    };
}
