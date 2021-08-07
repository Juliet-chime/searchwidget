const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
  
// btn.addEventListener('click', sound)

// const sound = () =>{
//     alert('Hello')
// }

// btn.addEventListener('click', function master(){
//     alert('i need a job')
// })