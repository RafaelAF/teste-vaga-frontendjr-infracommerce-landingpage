let btnUP = document.querySelectorAll('.question .up')
let down = document.querySelectorAll('.downContainer')
let img = document.createElement('img')



btnUP.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        if(down[index].style.display != 'none'){
            down[index].style.display = 'none';
            console.log('N tem ')
        }else{
            down[index].style.display = 'flex';
        }
        
    })
    
})
