// var a = Math.floor(Math.random()*100)
// console.log(a);
// // var b= Math.floor(a)
// // console.log(b);

// var arr = ['vedant', 'suraj', 'neeraj', 'alok', 'akash', ]
//  var btn= document.querySelector('button')
//  btn.addEventListener('click', function(){
//    var a= Math.floor(Math.random()*arr.length)
//    console.log(arr[a]);
//  })


//  var btn=document.querySelector('button')
//  var box= document.querySelector('#box')

//  btn.addEventListener('click', function(){
//     var c1= Math.floor(Math.random()*255)
//     var c2= Math.floor(Math.random()*255)
//     var c3= Math.floor(Math.random()*255)

//     box.style.backgroundColor= `rgb(${c1},${c2},${c3})`
  
//  })

// project work
// h1.style.color= 'white',
var arr= [
   {
      team:'CSK',
      primary:'yellow',
      secondary:'blue'
   },
   {
      team:'RCB',
      primary:' yellow;',
      secondary:'black'
   },
   {
      team:'MI',
      primary:'blue',
      secondary:'gold'
   },
   {
      team:'KKR',
      primary:'purple',
      secondary:'gold'
   },
    {
      team:'SRH',
      primary:'orange',
      secondary:'black'
   },
    {
      team:'PBKS',
      primary:'red',
      secondary:'green'
   },
]

 var btn= document.querySelector('button')
 var h1 = document.querySelector('h1')
 var main= document.querySelector('main')
 btn.addEventListener('click',function(){
   var num= Math.floor(Math.random()*arr.length)
  h1.innerHTML= arr[num].team
  h1.style.backgroundColor= arr[num].secondary
  main.style.backgroundColor= arr[num].primary
 })