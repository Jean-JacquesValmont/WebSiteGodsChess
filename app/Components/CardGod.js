import React from "react"
import Link from "next/link"

export default function CardGod (props) {
    let href = "/Gods/GoddessOfTeleportation";

    if (props.item.name === "Déesse de la Téléportation") {
        href = "/Gods/GoddessOfTeleportation";
      }
    else if (props.item.name === "Dieu de la Mort") {
        href = "/Gods/GodOfDeath";
    }else{
        href = "/Gods";
    }
        
    return (
        <Link href={href}>
            <div className="m-2 flex justify-center items-center">
                <button className="transform hover:scale-105 transition-transform">
                    <div className="bg-gradient-to-br from-gray-400 to-gray-900 shadow-md rounded-lg flex flex-col items-center text-center">
                    <img className="w-full" src={props.item.img} width={150} height={75} />
                        <div className="">
                            <h2 className="text-lg font-semibold break-words text-white">{props.item.name}</h2>
                        </div>
                    </div>
                </button>
            </div>
        </Link>
    )
}