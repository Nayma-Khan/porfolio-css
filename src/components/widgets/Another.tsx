// import React from 'react'
import Image from "next/image"
import "@/styles/Another.css"
export default function Another(){
    return(
        
        <section className="mt-16 lg:mt-28">
        <div className="max-w-screen-xl">
            <h1 className="text-5xl  font-serif my-12 text-center" data-aos="zoom-in">Technical skills</h1>
            
            <div className="flex text-center mx-12">
            <div className="border rounded-md w-1/4 px-4 py-5"data-aos="zoom-in">
                <h1 className="font-bold font-serif text-lg" data-aos="zoom-in">CSS</h1>
            <Image 
             src="/images/css.jpg"
             objectPosition="fill"
              width={500} 
              height={500}
              alt="image"
              />
            
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
            </div>
        


            <div className="border w-1/4 px-4 py-5 mx-4 "data-aos="zoom-in">
                <h1 className="font-bold font-serif">HTMl</h1>
            <Image  
            src="/images/html.jpg" 
            width={500} height={500} alt="image"/>
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
            </div>

            <div className="border w-1/4 px-4 py-5 mx-4" data-aos="zoom-in">
                <h1 className="font-bold font-serif">JAVASCRIPT</h1>
            <Image  src="/images/javascript1.jpg" width={500} height={500} alt="image"/>
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
            </div>

            <div className="border w-1/4 px-3 py-5 mx-4"data-aos="zoom-in">
                <h1 className="font-bold font-serif">TYPESCRIPT</h1>
            <Image  src="/images/typescript.jpg" width={500} height={500} alt="image"/>
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
            </div>

            </div>
        </div>

        <h1 className="text-5xl my-12 text-center font-serif" data-aos="zoom-in">Soft skills</h1>
        <div className="flex text-center mx-12">

        <div className="border w-1/4 px-3 py-4 mx-4"data-aos="zoom-in">
        <h1 className="font-bold font-serif py-5">Communication Skills</h1>
    <Image  src="/images/communication2.jpg" width={300} height={300} alt="image"/>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
    </div>

    <div className="border w-1/4 px-3 py-4 mx-4"data-aos="zoom-in">
        <h1 className="font-bold py-5">Adaptability</h1>
    <Image  src="/images/adaptibility.jpg" width={300} height={300} alt="image"/>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
    </div>

    <div className="border w-1/4 px-3  py-4  mx-4"data-aos="zoom-in">
        <h1 className="font-bold font-serif py-5" >Team</h1>
    <Image  src="/images/team.jpg" width={300} height={300} alt="image"/>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
    </div>

    <div className="border w-1/4 px-3 py-4 mx-4" data-aos="zoom-in">
        <h1 className="font-bold font-serif py-5">Problem Solving</h1>
    <Image  src="/images/problem.jpg" width={300} height={300} alt="image"/>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
    </div>

    </div>

        </section>
       
        
    )
}