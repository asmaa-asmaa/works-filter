let switcherlis=document.querySelectorAll(".switcher li");
let imgs=Array.from(document.images);

//console.log(imgs);
switcherlis.forEach((li)=>{
    li.addEventListener("click", removeActive);
    li.addEventListener("click",manageImgs);
})

function removeActive (){
    switcherlis.forEach((li)=>{
        li.classList.remove("active");
        this.classList.add("active")
    });
}

function manageImgs(){
    imgs.forEach((img)=>{
        img.style.display="none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
       el.style.display="block"

        //console.log(document.querySelectorAll(this.dataset.cat))
        //console.log(this)

   });
    
};

