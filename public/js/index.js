
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});





function checkLoginState() {
  FB.getLoginStatus(statusChangeCallback);
}
async function statusChangeCallback(response){

  const {userID,accessToken}=response.authResponse;
  const result = await fetch(`https://graph.facebook.com/v8.0/${userID}?fields=picture,id,name&access_token=${accessToken}`,{method:"get"});
  const data = await result.json();
  const _csrf =document.getElementsByName("_csrf")[0].nodeValue;

  const form =new FormData();
  form.append("username",data.id)
  form.append("email",`data.id}@facebook.com`)
  form.append("password",`facebook:${data.id}`)
  
  await fetch("/api/register",{method:"POST" ,body:form});
  
}


