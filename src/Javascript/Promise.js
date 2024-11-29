

let myPromise = new Promise((resolve , reject)=>{

  let success = false;
  if(success){
    resolve("Promise is Resolve")
  }
  else{
    reject("Promise is Reject")
  }
})


myPromise.then((response)=>{
  console.log(response);
  
})
.catch((error)=>{
console.log(error);

})