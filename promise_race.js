//promise.race() -> which runs(resolve first) only tht data it gives;

const p1 = new Promise((resolve)=>{
    setTimeout(()=>resolve("p1"),3000)
})
const p2 = new Promise((resolve)=>{
    setTimeout(()=>resolve("p2"),2000)
})
const p3 = new Promise((resolve)=>{
    setTimeout(()=>resolve("p3"),1000)
})

let a= Promise.race([p1,p2,p3]);
a.then(data=>{console.log(data)}).catch(error=>{console.log(error)});
