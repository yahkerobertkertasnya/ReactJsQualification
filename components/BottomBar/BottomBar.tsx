import { useContext } from "react";
import { ButtonFavorite, ButtonHome, ButtonSearch } from "./BottomBarButton";
import { ThemeContext } from "../context/ThemeContext";


export default function Bottombar() : JSX.Element {
    let theme = useContext(ThemeContext);
    
    return (
        <div className="m-0 p-0">
            <nav className={`navbar fixed-bottom p-0 mb-0 ${theme.bars}`}>
                <div className="d-flex justify-content-evenly flex-fill">
                    <ButtonHome />
                    <ButtonSearch />
                    <ButtonFavorite />
                </div>
            </nav>
        </div>
    );
}