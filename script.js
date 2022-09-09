const tabs = document.querySelector(".tabs");
const buttons = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (event)=>{
    const id = event.target.dataset.id;

    if(id){
        buttons.forEach((btn)=>{
            btn.classList.remove("live");
        });
        event.target.classList.add("live");
        articles.forEach((article)=>{
            article.classList.remove("live");
        });
        const elem = document.getElementById(id);
        elem.classList.add("live");
    }
})