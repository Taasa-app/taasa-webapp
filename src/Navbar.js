const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Taasa</h1>
            <div className="button" chakra-button css-1qk7z9c aria-label="Open nav menu" icon="menu" isround="false">
            <svg class="chakra-icon css-p54plh" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false" viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </div>
            <div className="links">                
                <a href="/about">Features</a>
                <a href="/team">Team</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>


    );
}
 
export default Navbar;