const gotoTopBtn= document.getElementById("go-to-top-button");

let marker = document.querySelector("#marker");
let item = document.querySelectorAll("nav li");

function indicator(e){
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

item.forEach(link =>{
    link.addEventListener("mouseenter", (e)=>{
        indicator(e.target);
    })
})


function gotoLivePage(button) {
    const url = button.getAttribute("data-url");
    window.open(url, "_blank");
}



window.onscroll = () => {
    scrollFunction ();

    function scrollFunction(){
        if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
            gotoTopBtn.style.display="block";
        } else{
            gotoTopBtn.style.display="none";
        }
    }
};
gotoTopBtn.onclick=() => {
    gotoTopBtn.style.display="none"
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
        

}

