function navbar(){
    return `<div id="nav">
    <div class="navitem">
    <i class="fa fa-bars" aria-hidden="true"></i>
    <img src="/navbar/Hotstar-Kids-removebg-preview.png" alt="">
    <h4>TV</h4>
    <h4>Movies</h4>
    <h4>Sports</h4>
    <h4>Premium</h4>
    <h4>Disney+</h4>
</div>
<div class="navitem">
  <span id="searchInputBox">
    <input type="text" placeholder="Search"" id="searchInputNav">
    <i class="fa fa-search" aria-hidden="true"></i>
    <div id="showSearchResult">
    </div>
  </span>
  <button id="subscribe">Subscribe</button>
  <a href="">Login</a>
</div>
</div>`
}

export default navbar