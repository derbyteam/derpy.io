var x820= document.getElementById("m-820")
var myimages820=['../media/IMG_20220506_162335.jpg',
'../media/IMG_20220506_162352.jpg',
'../media/wp7245862.webp','../media/p1820.jpg',
'../media/p1820.jpg','../media/p2820.jpg',
'../media/p3820.jpg','../media/p4820.jpg',
'../media/p5820.jpg'];
function changeimage820(x820,myimages){
    setInterval(function(){
        var random820=Math.floor(Math.random()*8);
        x820.style.backgroundImage="url("+myimages[random820]+")";
    },1000);
}
var mousecursor820=document.querySelector('.cursor820');
let links820=document.querySelectorAll('.h-mmo nav a');

window.addEventListener("mousemove",cursor820);

function cursor820(e){
    mousecursor820.style.top=e.pageY+"px";
    mousecursor820.style.left=e.pageX+"px";

}

links820.forEach(l820=> {
    l820.addEventListener("mouseover",() => {
        mousecursor820.classList.add("linkgrow820");
    });
    l820.addEventListener("mouseleave",() => {
        mousecursor820.classList.remove("linkgrow820");
    });
});
    