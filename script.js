let btnUP = document.querySelectorAll('.question .up')
let down = document.querySelectorAll('.downContainer')
let img = document.querySelectorAll('p img')



btnUP.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        if(down[index].style.display == 'flex'){
            down[index].style.display = 'none';
            img[index].style.transform = 'rotateZ(-90deg)';
            
        }else{
            down[index].style.display = 'flex';
            img[index].style.transform = 'rotateZ(90deg)';
        }
        
    })
    
})
