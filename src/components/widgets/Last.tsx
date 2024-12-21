import Image from "next/image";
import "@/styles/last.css";

export default function Last() {
    return (
        <section className="mt-16 lg:mt-28 container">
            <h1 className="section-title" data-aos="fade-right">Projects</h1>

            <div className="project-grid" data-aos="fade-right">
                <div className="project-card">
                    <h1 className="project-title">ATM</h1>
                    <Image 
                        src="/images/atm.jpg"
                        width={300} 
                        height={300}
                        alt="ATM Project Image"
                        className="project-image"
                    />
                </div>

                <div className="project-card">
                    <h1 className="project-title">CURRENCY CONVERTER</h1>
                    <Image  
                        src="/images/currency.jpg" 
                        width={300} 
                        height={300} 
                        alt="Currency Converter Project Image"
                        className="project-image"
                    />
                </div>

                <div className="project-card">
                    <h1 className="project-title">SIMPLE CALCULATOR</h1>
                    <Image  
                        src="/images/calculator.png" 
                        width={300} 
                        height={300} 
                        alt="Calculator Project Image"
                        className="project-image"
                    />
                </div>

                <div className="project-card">
                    <h1 className="project-title">TO DO LIST</h1>
                    <Image  
                        src="/images/todo.jpg" 
                        width={300} 
                        height={300} 
                        alt="To-Do List Project Image"
                        className="project-image"
                    />
                </div>

                <div className="project-card">
                    <h1 className="project-title">CLI</h1>
                    <Image  
                        src="/images/cli.png" 
                        width={300} 
                        height={300} 
                        alt="CLI Project Image"
                        className="project-image"
                    />
                </div>

                <div className="project-card">
                    <h1 className="project-title">WORDS COUNTER</h1>
                    <Image  
                        src="/images/word.png" 
                        width={300} 
                        height={300} 
                        alt="Word Counter Project Image"
                        className="project-image"
                    />
                </div>

                <div className="project-card">
                    <h1 className="project-title">RESUME</h1>
                    <Image  
                        src="/images/resume.jpg" 
                        width={300} 
                        height={300} 
                        alt="Resume Project Image"
                        className="project-image"
                    />
                </div>

                <div className="project-card">
                    <h1 className="project-title">LANDING PAGES</h1>
                    <Image  
                        src="/images/landing.jpg" 
                        width={300} 
                        height={300} 
                        alt="Landing Pages Project Image"
                        className="project-image"
                    />
                </div>
            </div>
        </section>
    );
}
