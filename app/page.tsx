"use client"

import Hero from "@/components/widgets/Hero"
import Another from "@/components/widgets/Another"
import Last from "@/components/widgets/Last"
import Contact from "@/components/widgets/Contact"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


export default function Home(){
    useEffect (()=>{
        AOS.init({
            easing:"ease-out-back",
            duration:1200,
            delay:100,
            mirror:true,
            anchorPlacement:"bottom-bottom",
            offset:160,

        });
        AOS.refresh();

    },
[]);
    
    return(
        <main>
<Hero/>
<br />
<Another/>
<br />
<Last/>
<br />
<Contact/>


        </main>
    )
}
