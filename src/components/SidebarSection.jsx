import React from "react";

export default function SidebarSection({icon, text}){
    return(
        <div className="flex m-2 items-center">
            <span className="mx-3 h-8 w-8"><img src={`${icon}`} alt="icon" /></span> {    text}
        </div>
    );
}