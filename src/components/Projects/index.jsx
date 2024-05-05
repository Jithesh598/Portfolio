import ProjectComponent from "./projects";
import { useInView } from "react-intersection-observer";
import { Fade, Zoom } from "react-awesome-reveal";
import './animate.css';

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    const openTableau = () => {
        window.open('https://public.tableau.com/app/profile/jithesh.kota/vizzes', '_blank');
    }
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
            <div className="flex justify-center">
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={openTableau}
                >
                    Click Here! For more Projects
                </button>
            </div>
        </div>
    )
}

export default Projects