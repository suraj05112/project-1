// create element

//  var btn= document.querySelector('button')
//  btn.addEventListener('click',function(){
//    var h1= document.createElement('h1');
//   h1.innerHTML= 'Hello from js'
//   console.log(h1)
//  })

//  append element
// var h1= document.createElement('h1')
// h1.innerHTML= 'Hello from js'
// var main= document.querySelector('main')
// main.appendChild(h1)

//  create project
var btn= document.querySelector('button')
var main= document.querySelector('main')
btn.addEventListener('click',function(){
    var div= document.createElement('div')
    var x= Math.random()*100
    var y= Math.random()*100
    var r= Math.random()*360
    var c1=Math.floor(Math.random()*256)
     var c2=Math.floor(Math.random()*256)
      var c3=Math.floor(Math.random()*256)

    div.style.height= '50px'
    div.style.position= 'absolute'
    div.style.width= '50px'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.left = x+ '%'
    div.style.top= y+'%'
    div.style.rotate= r+'deg'
    main.appendChild(div)


  

})