console.log("this is meri script");

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "cse22091",
    "email": "cse22091@iiitkalyani.ac.in",
    "score": 0.8,
    "state": "deliverable",
    "domain": "iiitkalyani.ac.in",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }




Submitbtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML =`<img width="233" src="img/load.svg" alt="">`
    let key = "ema_live_gVclPpwlwtv2eioLHllDg5ZKHoALh5icBcQQu3yi"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url)
    let result = await res.json()

    let str = ''
    for (key of Object.keys(result))
    {
      if(result[key] !== "" && result[key] !== "")
      str = str + `<div> ${key}: ${result[key]}</div>`
    }

    // else{
    //   str = 
    // }

    console.log(str)
    resultCont.innerHTML = str
  
})

 
