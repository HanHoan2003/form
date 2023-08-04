var form = document.querySelector('form')
var userName=document.querySelector('#Username')
console.log([userName])
var email=document.querySelector('#email')
console.log(email)
var password=document.querySelector('#password')
console.log(password)
var confirmPassword=document.querySelector('#Confirm-password')
console.log(confirmPassword)


function showError(input,message){
let parent = input.parentElement;//lay ra form-control
console.log(parent)
let small=parent.querySelector('small')//tu form-control lay ra the small
console.log(small)
parent.classList.add('error')
small.innerText=message
}
// showError(userName,'loi')

function showSuccess(input){
    let parent = input.parentElement;
    console.log(parent)
    let small=parent.querySelector('small')
    console.log(small)
    parent.classList.remove('error')
    small.innerHTML=''
    
    }
   

      //check tất cả các ô input la rỗng
     function checkEmtyError(ListInput){//  gia tri tra ve false
        let isEmtyErorr=false;
        ListInput.forEach(function(input){
            input.value = input.value.trim()
            if(!input.value){
                let isEmtyErorr=true;
                showError(input,'khong duoc de trong')
            }
            else{
                showSuccess(input)
            }
        })
        return isEmtyErorr
     }


     function checkEmailError(input){
        const regexEmail=/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;;
       input.value=input.value.trim()
       let isEmailError=!regexEmail.test(input.value)//hàm test :true nếu là email,false thì k phải email nhung ma no la ! nên khi là email nó sẽ false và nguọc lại là true
      if(regexEmail.test(input.value)){
        showSuccess(input);
      }
      else{
        showError(input,'Email Invalid')
      }
    console.log(isEmailError)
      return isEmailError
     }
     //kiem tra do dai
  function checkLengthError(input,min ,max){
    input.value=input.value.trim()
    if(input.value.length<min){
        showError(input,`phải co ít nhất ${min} kí tự`)
        return true
    }

    if(input.value.length>max){
        showError(input,`không được vượt quá ${max} kí tự`)
        return true
    }
        return false
  }

  function checkMatchPassword(passwordInput,cfpasswordInput){
if(passwordInput.value!==cfpasswordInput.value){
    showError(cfpasswordInput,'Mật khẩu không trùng khớp')
    return true;
}
return false
  }



    form.addEventListener('submit',function(e){
         e.preventDefault()
         let userNameLengthError=checkLengthError(userName,3,10)
         let passWordLengthError=checkLengthError(password,3,10)
        let isEmtyErorr= checkEmtyError([userName,email,password,confirmPassword])
      let isEmailError=checkEmailError(email)
      let checkMathError=checkMatchPassword(password,confirmPassword)
      console.log(isEmtyErorr,isEmailError,userNameLengthError,passWordLengthError,checkMathError)
          if(isEmtyErorr ||isEmailError ||userNameLengthError||passWordLengthError||checkMathError){
          }
          var a =   isEmtyErorr ||isEmailError ||userNameLengthError||passWordLengthError||checkMathError
         
          }
        )
