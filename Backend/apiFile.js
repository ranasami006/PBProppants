import AsyncStorage from "@react-native-async-storage/async-storage";
import { add } from "react-native-reanimated";
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
  let responseJson =  await fetchCallback.json();
  //console.log(responseJson);
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

export async function submit_withdrawal_form(key_file) { 
  let userId= await AsyncStorage.getItem('user_id')
  //console.log(key_file,JSON.parse(userId))
  let fetchCallback = await fetch(
    "https://www.pbproppants-invest.com/version-test/api/1.1/wf/submit-withdrawal-form" ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user:userId,
      key_file:key_file,
    })
  });
  let responseJson = await fetchCallback.json();
  console.log(responseJson);
  return responseJson;
}

export async function card_application(address,email,name) { 
  let userId= await AsyncStorage.getItem('user_id')
  //console.log(key_file,JSON.parse(userId))
  let fetchCallback = await fetch(
    "https://www.pbproppants-invest.com/version-test/api/1.1/wf/card-application" ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user:userId,
      address:address,
      email:email,
      name:name,
    })
  });
  let responseJson = await fetchCallback.json();
  //console.log(responseJson);
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

  export async function getProfileData() { 
    let userId= await AsyncStorage.getItem('user_id')
    let fetchCallback = await fetch(
      "https://www.pbproppants-invest.com/version-test/api/1.1/obj/User/"+ userId,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let responseJson = fetchCallback.json();
    //console.log(responseJson._55);
    return responseJson;
  }
  export async function getinvestmentdatabase() { 
    let fetchCallback = await fetch(
      "https://www.pbproppants-invest.com/version-test/api/1.1/obj/investmentdatabase" ,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let responseJson = fetchCallback.json();
    //console.log(responseJson._55);
    return responseJson;
  }

  