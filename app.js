const elShow = document.querySelector('#show');
const elInput = document.querySelector('.input'); 
const elPassword = document.querySelector('#password-user');


elInput.addEventListener('blur',()=>{
     if(elInput.value == ''){
          elInput.style.border = '1px solid red'
          elInput.style.boxShadow = '0px 0px 10px 0px rgb(221, 94, 94)'
          
          // console.log('Pustoy')
     }else{
          elInput.style.border = '1px solid #45d810'
          elInput.style.boxShadow = '0px 0px 10px 0px 7dd15e'

          // console.log('Nimadir bor')
     }
})

elShow.addEventListener('click',()=>{
   if(elPassword.type === 'password'){
        elPassword.type = 'text'
        elShow.className = 'fa-solid fa-eye'

        // console.log("text ")
   } else{
        elPassword.type = 'password'
        elShow.className = 'fa-solid fa-eye-slash'

        // console.log("password ")
    }
})