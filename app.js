const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function PageTransition(){
    //button click active class
    
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','')
            // console.log(currentBtn) 
            this.className += ' active-btn'
        })
    }
    //sections active class
    allSections.addEventListener('click',(e)=>{
        // console.log(e.target)
        const id = e.target.dataset.id
        if(id){
            //remove selected from the other buttons
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((sec)=>{
                sec.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })
}


PageTransition()