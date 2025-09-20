import {Link} from 'react-router-dom'
export default function Nav(){
    return(
         <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contacts</Link>
      </nav>
    )
}