let movies=document.getElementById('movies')
let searchBtn=document.getElementById('searchBtn')
let loader=document.getElementById('loader')
loader.style.display="none"

// adding navbar-----------------

import navbar from "../components/nav.js"
import navFun  from "../components/navscript.js"

let headNavbar=document.getElementById('headNavbar')
headNavbar.innerHTML=navbar()

console.log(navbar)

navFun()
// ------------------------------------




// slide show --------------------------

import slideShow from "../../slideshow/script.js"

// console.log(slideShow())



// ----------------------------------------




searchBtn.addEventListener('click',searchFun)

// fetching api data--------------
async function searchFun(){
    loader.style.display=''
    movies.innerHTML=""
     let searchInputValue=document.getElementById('movieSearchInput')
  console.log(searchInputValue.value,"value that is i am searching")
    let responce= await fetch(`http://www.omdbapi.com/?apikey=6ba1821e&s=${searchInputValue.value} `)

    let data= await responce.json()
    console.log(data)
    loader.style.display='none'
    console.log(data)
    console.log(data,"our api data")
    showData(data.Search)
}

// append data to dom--------------
// showData()

function showData(apiData){
apiData.forEach((el)=>{
    let movie=document.createElement('div')
    let img=document.createElement('img')
    let title=document.createElement('p')
    let anchor=document.createElement('a')

    movie.className='movie'
    movie.onclick=(function(){
        movieDetails(el)
        
    })

    img.src=el.Poster
    title.innerText=el.Title
    anchor.href='showDetails.html'

   
    movie.append(img,title)
    movies.append(movie)
   
})

}



 async function movieDetails (movieAllDetails){
    loader.style.display='none'
    let responce= await fetch(`http://www.omdbapi.com/?apikey=6ba1821e&s&i=${movieAllDetails.imdbID}`)

    let data= await responce.json()
  window.location  .href='showDetails.html'
    localStorage.setItem('movieDetails',JSON.stringify(data))
}


