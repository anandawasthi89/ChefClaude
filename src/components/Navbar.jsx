import chefclaude from "../assets/chef-claude-icon.png"

export function Navbar(){
    return(
        <header className="header">
            <nav className="navbar">
                <img className="nav-image" src={chefclaude} alt="Chef Claude"/>
                <p>Chef Claude</p>
            </nav>
        </header>
        
    )
}