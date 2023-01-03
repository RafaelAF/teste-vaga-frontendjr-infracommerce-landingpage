let btnUP = document.querySelectorAll('.question .up')
let down = document.querySelectorAll('.down')
let img = document.createElement('img')



btnUP.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        if(down[index].style.display == 'flex'){
            down[index].style.display = 'none'
            btnUP[index].querySelector('img').style.transform = 'rotateZ(90deg)'
        }else{
            down[index].style.display = 'flex'
            btnUP[index].querySelector('img').style.transform = 'rotateZ(-90deg)'
        }
        
    })
    
})