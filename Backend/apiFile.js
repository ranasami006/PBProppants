export async function signUp(email,password,confirmPassword) { 
  let fetchCallback = await fetch(
    "https://www.pbproppants-invest.com/version-test/api/1.1/wf/signUp" ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email:email,
      password : password,
      confirmPassword:confirmPassword,
    })

  });
  let responseJson = fetchCallback.json();
  //console.log(responseJson._55);
  return responseJson;
}

export async function LogIn(email,password) {
   
  let fetchCallback = await fetch(
    "https://www.pbproppants-invest.com/version-test/api/1.1/wf/LogIn" ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email:email,
      password : password,
    })

  });
  let responseJson = fetchCallback.json();
  //console.log(responseJson._55);
  return responseJson;
}

export async function updatePassword(email) {
   
  let fetchCallback = await fetch(
    "https://www.pbproppants-invest.com/version-test/api/1.1/wf/updatePassword" ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email:email,
    })
  });
  let responseJson = fetchCallback.json();

  return responseJson;
}
export async function LogOut() {
   
  let fetchCallback = await fetch(
    "https://www.pbproppants-invest.com/version-test/api/1.1/wf/logOut" ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let responseJson = fetchCallback.json();
  //console.log(responseJson._55);
  return responseJson;
}
// GET METHODS
export async function getFaqs() {
   
    let fetchCallback = await fetch(
      "https://www.pbproppants-invest.com/version-test/api/1.1/obj/faqs" ,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
  
    });
    let responseJson = fetchCallback.json();
    //console.log(responseJson._55);
    return responseJson;
  }
  
  export async function getinvestmenttransaction() { 
    let fetchCallback = await fetch(
      "https://www.pbproppants-invest.com/version-test/api/1.1/obj/investmenttransaction" ,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let responseJson = fetchCallback.json();
    //console.log(responseJson._55);
    return responseJson;
  }

  export async function getwithdrawalforms() { 
    let fetchCallback = await fetch(
      "https://www.pbproppants-invest.com/version-test/api/1.1/obj/withdrawalforms" ,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let responseJson = fetchCallback.json();
    //console.log(responseJson._55);
    return responseJson;
  }