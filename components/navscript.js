function navFun(){
    
let navSearchMovie=document.getElementById('showSearchResult')

let searchInputNav=document.getElementById('searchInputNav')
let navitem=document.querySelector('.navitem')
console.log(navitem)
searchInputNav.addEventListener('input',search)

console.log(searchInputNav)

async function getData(){
    let searchInputValue=document.getElementById('searchInputNav')
    navSearchMovie.innerHTML=""
  try{
    let responce= await fetch(`http://www.omdbapi.com/?apikey=6ba1821e&s=${searchInputValue.value}`)

    let data= await responce.json()
    showData(data.Search)
    console.log(data.Search)
  }
   catch(err){
    console.log(err)
   }
   
}


function showData(apiData){
    apiData.forEach((el)=>{
        let movie1=document.createElement('div')
        let img=document.createElement('img')
        let title=document.createElement('p')
        let anchor=document.createElement('a')
    
        movie1.className='movie1'
        movie1.onclick=(function(){
            movieDetails(el)
            
        })
    
        img.src=el.Poster
        img.alt='error'
        title.innerText=el.Title
        anchor.href='showDetails.html'
    
       
        movie1.append(img,title)
        navSearchMovie.append(movie1)
       
    })
    
    }



    // debounsing
    let id;
    function search(){
       
    if(id){
        clearTimeout(id)
    }

    id=setTimeout(()=>{
        getData()
    },500)

    }




console.log('print')
}

export default navFun