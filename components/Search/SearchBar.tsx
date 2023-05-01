import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


function Searchbar({ searchFunction } : { searchFunction : (search : string) => void }) : JSX.Element {
    let theme = useContext(ThemeContext);

    const handleInputChange = (event: any) => {
        searchFunction(event.target.value);
        
    }

    return (
        <div className="m-0 p-0 border-0">
            <nav className={`navbar navbar-expand-lg bg-body-tertiary text-white m-0 p-0 ${theme.bars}`}> 
                <div className='container-fluid ps-2 pe-0 align-self-center'>
                    <div className="input-group mb-2 mx-2 p-0">
                        <span className="input-group-text m-0 " id="basic-addon1" style={{ height: "1.5rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>
                        <input type="text" className="form-control" placeholder="Search..." aria-label="Username" onChange={handleInputChange} style={{ height: "1.5rem", fontSize: "0.75rem"}}/>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Searchbar;