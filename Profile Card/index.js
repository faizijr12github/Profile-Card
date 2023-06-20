const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const color = e.currentTarget.classList;
        if(color.contains("btn-1")){
            theme.style.setProperty("--theme-color","#ff1756");
        }
        if(color.contains("btn-2")){
            theme.style.setProperty("--theme-color","#3498db");
        }
        if(color.contains("btn-3")){
            theme.style.setProperty("--theme-color","purple");
        }
        if(color.contains("btn-4")){
            theme.style.setProperty("--theme-color","#1cb65d")   
        }
        if(color.contains("btn-5")){
            theme.style.setProperty("--theme-color","#f4b932");
        }
    })
})