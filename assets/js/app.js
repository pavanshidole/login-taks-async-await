const cl=console.log;


const loginForm=document.getElementById("loginForm");
const emailControl=document.getElementById("email");
const passwordControl=document.getElementById("password");


const snackbar=(title,icon)=>{
    swal.fire({
        title:title,
        icon:icon,
        timer:2000,
    })
}


const loginApi=(obj)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(obj.email==="pavanshidole@gmail.com"){
                if(obj.password==="pavan@123"){
                    resolve("login is successFully!!!");
                }else{
                    reject("user password is wrong please try again!!!");
                }
            }else{
                reject("user emailId is wrong please try again!!!");
            }
        }, 1000);
    })
}

const onLoginForm= async (eve)=>{
    eve.preventDefault();

    let loginObj={
        email:emailControl.value,
        password:passwordControl.value,
    }

    try{
        let msg = await loginApi(loginObj)
        cl(msg);
        snackbar(msg,"success");
    }
    catch(err){
        cl(err);
        snackbar(err,"error");
    }
    finally{
        loginForm.reset();
    }
   
}



loginForm.addEventListener("submit", onLoginForm);

