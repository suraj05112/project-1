 var grow= 0;
 var btn= document.querySelector('button')
 var h2= document.querySelector('h2')
 var inner= document.querySelector('.inner')

 btn.addEventListener('click', function(){
     var int=setInterval(() => {
        grow++
        h2.innerHTML= grow+'%'
        inner.style.width=  grow+'%'
    },  50);

    setTimeout( () =>{
        clearInterval(int)
        btn.innerHTML= 'Downloded'
        btn.style.opacity= 0.5
    },5000);
 })