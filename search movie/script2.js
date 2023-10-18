

let element=JSON.parse(localStorage.getItem("movieDetails"))

// adding nav--------
let headNavbar=document.getElementById('headNavbar')
import navbar from "../components/nav.js"
import navFun from "../components/navscript.js"

headNavbar.innerHTML=navbar()
navFun()

// -------------------------------
    let movieBox=document.getElementById('movieBox')
    let img=document.createElement('img')
    let title=document.createElement('p')
    let director=document.createElement('p')
    let actor=document.createElement('p')
    let rating=document.createElement('p')

    img.src=element.Poster
    title.innerText=element.Title
    director.innerText=element.Director
    actor.innerText=element.Actor
    rating.innerText=element.imdbRating

    movieBox.append(img,title,director,actor,rating)
