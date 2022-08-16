 const axios= require('axios')
 const fs= require('fs')
 const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
 });
  
 
let course="pre"
 axios.get('https://api.merakilearn.org/courses')
 .then((x)=>course=x.data).then(()=>{
    fs.writeFile("course.json",JSON.stringify(course),'utf8',(err)=>{
        if(err){
            console.log(err)
        }
    })
     
    
    sai(course)})
 
 function sai(arr){
for(var i =0; i<arr.length; i++){
    console.log( i+1 +" "+arr[i].name + " "+arr[i].id)
}
 var  indexofdata=0
readline.question(`Enter Your pppNumber : `, index => {
    indexofdata=index-1
// console.log(arr[index-1])
// console.log(arr[indexofdata])
getdata(arr[indexofdata].id,arr[indexofdata].name)
//   readline.close();
});
 }
  

 function getdata(id,filena){
    axios.get(`http://api.merakilearn.org/courses/${id}/exercises`)
 .then((x)=>x).then((x)=>{
    fs.writeFile(`${filena}.json`,JSON.stringify(course),'utf8',(err)=>{
        if(err){
            console.log(err)
        }
    })
    
    
    Det(x.data.course)})


   
 }

 function Det(arr){
    arr=arr.exercises
    for(var i =0; i<arr.length; i++){
        main=arr[i].name

        // console.log(main.splice(10))
        console.log( i+1 +" "+ main)
    }
    takeinfo(arr)

 }
 function takeinfo(arr){
    // console.log(arr)
        readline.question(`Enter Your topic Number : `, index => {
      
    // console.log(arr[index-1])
    // console.log(arr[indexofdata])
    // console.log("you cohoice")
    if(arr[index-1].content){
    data=arr[index-1].content
    fs.writeFile(`${arr[index-1].name}.json`,JSON.stringify(course),'utf8',(err)=>{
        if(err){
            console.log(err)
        }
    })


// console.log(data)

    for(var i =0; i<data.length; i++){
console.log( (i+1)+" "+data[i].value)
    }
}
    nextpre(arr,index -1)
    });
    
 }



 function nextpre(arr,index){
    
    readline.question(`pre or next `, val => {
      
        // console.log(arr[index-1])
        // console.log(arr[indexofdata])
        // console.log("you cohoice")
        if(val==='pre'){
if(index==0){
    var alima
    console.log("YOu are at First page")
    return
}
            data=arr[index-1].content
            alima=index-1
        }
        else
        {

if(index>=(arr.length-1)){
    console.log("you are at last topic")
    return
}

            data=arr[index+1].content
            alima=index+1

        }
         
        fs.writeFile(`${arr[alima].name}.json`,JSON.stringify(course),'utf8',(err)=>{
            if(err){
                console.log(err)
            }
        })
        for(var i =0; i<data.length; i++){
    console.log( (i+1)+" "+data[i].value)
        }
          readline.close();
        });

 }


 