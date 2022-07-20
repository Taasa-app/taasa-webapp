const Navbar = () => {
    return (  

      <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">TAASA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/about" tabindex="-1" aria-disabled="true">About</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>
    );
}
 
export default Navbar;