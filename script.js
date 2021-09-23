let colors = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
let ind = 0 ;

document.getElementById("#submit").addEventListener('click' ,()=>{
    if(ind >  colors.length -1){
        ind=0;
        document.body.style.backgroundColor = colors[ind++];
        }
});