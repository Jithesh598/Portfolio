import ProjectComponent from "./projects";
import { useInView } from "react-intersection-observer";
import { Fade, Zoom } from "react-awesome-reveal";
import './animate.css';

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div id="projects" className="bg-[#101010] min-h-screen p-10">
            <div ref={ref}>
                {inView ? (
                    <Fade delay={5} duration={1000}>
                        <h2 className="uppercase font-bold text-center font-roboto-slab text-4xl text-gray-50">Projects</h2>
                    </Fade>
                ) : (
                    <h2 className="uppercase text-center font-roboto-slab text-4xl text-gray-50">Projects</h2>
                )}
            </div>
            <Zoom triggerOnce>
                <ProjectComponent />
            </Zoom>
        </div>
    )
}

export default Projects