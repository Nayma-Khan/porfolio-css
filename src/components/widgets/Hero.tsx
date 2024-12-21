
// import main from "@/app/assets/main.jpg"
import Image from "next/image"
import "@/styles/hero.css"


const Hero = () => {
  return (
    <section>
  
   
<div className="flex items-center">
  <div className="flex-1">
<h1 className="text-5xl font-bold  px-9 font-serif text-black" data-aos="zoom-in">It's me Nayma khan</h1>

<p className=" mt-6 text-lg text-slate-700 px-9"data-aos="zoom-in" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit animi maxime iste, pariatur suscipit quidem nam nulla dicta, ab adipisci delectus facere saepe placeat ea, voluptas illo consequatur. Numquam?</p>

  {/* <button>Learn more</button> */}
</div>

<div className="flex-1" data-aos="zoom-in">
<Image className="border-black-800 mt-6"  src="/images/main.jpg" data-aos="flip-right " width={350} height={95} alt="image"/>

</div>

</div>

    
    </section>
    
  )
}

export default Hero
