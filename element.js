const link = document.querySelector('a')

link.addEventListener('click',e =>{
    e.preventDefault()
    console.log("Prevented Default")
})
