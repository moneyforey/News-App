// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { searchNews,append } from "./fetch.js";

let search = (e) =>{
    if(e.key==="Enter"){
        let value = document.querySelector("#search_input").value;
        searchNews(value).then((data)=>{
            console.log(data.articles)
            let cont = document.getElementById("results");
            cont.innerHTML = null;
            append(data.articles,cont);
        })

    }
}
document.querySelector("#search_input").addEventListener("keydown", search)



