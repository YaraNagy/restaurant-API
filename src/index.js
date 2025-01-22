var aklat= document.querySelectorAll("a[data-akla]");
var cards= document.getElementById("allcards");
var loader=document.getElementById("loader");
var cartona= '';

for(var i=0; i< aklat.length; i++ )
{
    aklat[i].addEventListener("click", function (event){
    loader.classList.remove("hidden");
    loader.classList.add("flex");
var category = event.target.dataset.akla
fetch(category);

// fetch(`https://forkify-api.herokuapp.com/api/search?q=${category}`)
//             .then(res=>res.json())
//             .then(json=>console.log(json))
    })
}
function fetch (category)
{

    var link = new XMLHttpRequest();
link.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${category}` );
link.send();
link.addEventListener('readystatechange', function(e){
cartona='';
if (link.readyState==4){
    var results= JSON.parse(link.response).recipes;
    console.log(results);
    for(var i=0; i<results.length; i++)
    {
       cartona +=  `<div class="bg-slate-300 max-w-sm rounded-lg shadow-md overflow-hidden" id="card">
<img class= "h-48 w-full rounded-t-xl object-cover" src="${results[i].image_url}">

<h3 class="m-3 font-semibold text-lg"> ${results[i].title}</h3>
<p class="p-2">${results[i].publisher}</p>
</div>`

    }
    loader.classList.add("hidden");
    loader.classList.remove("flex");
    cards.innerHTML=cartona;

    
     console.log(results);



}

})

}
fetch("pizza")
