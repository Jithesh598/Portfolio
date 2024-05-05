/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import aboutPhoto2 from '/Resources/Images/about2.jpeg';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div id="about" className="bg-[#101010] pt-7 pb-10 min-h-screen text-gray-50">
            <div ref={ref}>
                {inView ? (
                    <Fade delay={5} duration={1000}>
                        <h2 className="uppercase font-bold text-center font-roboto-slab text-4xl">About</h2>
                    </Fade>
                ) : (
                    <h2 className="uppercase text-center font-roboto-slab text-4xl">About</h2>
                )}
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center py-5">
                <div className="flex justify-center mb-4 md:mb-0 md:w-1/2 lg:w-2/5 px-10">
                    <img src={aboutPhoto2} alt="About Me" className="w-3/4 lg:w-2/3 rounded-md shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 text-left md:text-left px-4">
                    <Fade delay={500} triggerOnce>
                        <div className="md:border-l-2 border-gray-50 px-10">
                            <p className="xl:text-2xl lg:text-xl md:text-sm font-poppins">
                                As an analytical and well-rounded professional with a Master's in Business Analytics and a technical
                                background in Electronics and Communication Engineering, I bring a versatile skill set to drive
                                data-driven solutions. Proficient in programming languages, cloud platforms, databases, and cutting-edge
                                business intelligence tools like Tableau and Power BI, I have hands-on experience in data analysis, visualization,
                                and architecture from internships and projects. With a passion for leveraging data to drive business impact,
                                I thrive on tackling complex data challenges.

                            </p>
                            <p className="mt-4 xl:text-2xl lg:text-xl md:text-sm font-poppins">
                                When I'm not immersed in the world of data, you can find
                                me on the badminton court, honing my competitive spirit, or exploring virtual realms through engaging
                                PC games – hobbies that fuel my strategic thinking and problem-solving abilities. I'm eager to contribute
                                my expertise and unique perspective to innovative data initiatives.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;
