var elem=document.querySelectorAll(".elem1")

elem.forEach(function(val){
    // console.log(val.childNodes[3]);
    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.display="block"
        val.childNodes[3].style.left=dets.x+"px"
        val.childNodes[3].style.top=dets.y+"px"
    });
    val.addEventListener("mouseleave", function(dets){
        val.childNodes[3].style.display="none";
    });
})



