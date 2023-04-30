import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


export function ButtonHome() : JSX.Element {
    
    const isDisabled : boolean = useRouter().pathname === '/';
    return (
        <Link href="/" passHref>
            <button className="btn btn-sm p-0 btn-transparent btn-link" disabled={isDisabled}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                </svg>
                <div className="text-white">
                    Home
                </div>
            </button>  
        </Link>
    );
}

export function ButtonSearch() : JSX.Element {

    const isDisabled : boolean = useRouter().pathname === '/search';
    return (
        <Link href="/search" passHref>
            <button className="btn btn-sm p-0 btn-transparent btn-link" disabled={isDisabled}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>  
                <div className="text-white">
                    Search
                </div>     
            </button> 
        </Link>
    );
}

export function ButtonFavorite() : JSX.Element {

    const isDisabled : boolean = useRouter().pathname === '/favorite';
    return (
        <Link href="/favorite">
            <button className="btn btn-sm p-0 btn-transparent btn-link" disabled={isDisabled}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                <div className="text-white">
                    Favorite
                </div>
            </button>  
        </Link>
    );  
}

