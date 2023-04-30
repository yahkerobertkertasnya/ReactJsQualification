import { useContext } from "react";
import ThemeButton from "./ThemeButton";
import { ThemeContext } from "../context/ThemeContext";
import BackButton from "./BackButton";



function Navbar({themeHandler} : { themeHandler : () => void }) : JSX.Element {
    let theme = useContext(ThemeContext);

    return (
        <div className={`position-relative m-0 p-0 ${theme.bars}`}>
            <nav className='navbar navbar-expand-lg bg-body-tertiary text-white m-0 p-0'> 
                <div className='container-fluid px-0 align-self-center'>
                <BackButton />
                    <div className="d-flex justify-content-center flex-fill" style={{ height: "2rem"}}>
                        <h4 className="d-flex align-items-center p-0 m-0">
                            <b className="position-absolute start-50 top-50 translate-middle" style={{ fontSize: "1rem"}}>MyAnimWList</b>
                        </h4>
                    </div>
                    <ThemeButton themeHandler={themeHandler} />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;