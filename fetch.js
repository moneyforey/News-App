let searchNews = async (value) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value} `)
        let data = await res.json();
        // console.log(data)
        return data;
    }
    catch(err){
        console.log(err);
    }
}

let searchNewsC = async (value1) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value1}`)
        let data1 = await res.json();
        // console.log(data)
        return data1;
    }
    catch(err){
        console.log(err);
    }
}

let append = (D,C) =>{
    D.forEach(({title, urlToImage,description,content}) =>
    {
        let div = document.createElement("div");

        let h3 = document.createElement("h3");
        h3.innerText= title;
        h3.addEventListener("click", function addToLocal({title, urlToImage,description,content}){
           localStorage.setItem("news", JSON.stringify({title, urlToImage,description,content}))
        });

        let photo = document.createElement("img");
        photo.src = urlToImage;

        let p  = document.createElement("p");
        p.innerText= description;

        div.append(h3,photo,p)
        C.append(div)
    })
}




export {searchNews,searchNewsC,append};