import instagram from '/Resources/Logo/contact/instagram.svg';
import gmail from '/Resources/Logo/contact/gmail.svg';
import linkedin from '/Resources/Logo/contact/linkedin.svg';
import github from '/Resources/Logo/contact/github.svg';
import tableau2 from '/Resources/Logo/skills/tableau2.svg';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
    return (
        <footer className="bg-[url('/Resources/Images/footer-bg.png')] text-white p-5">
            <Fade delay={200}>
                <div className="container mx-auto flex flex-col items-center">
                    <h2 className="text-xl font-poppins font-semibold">Jitesh Kota</h2>
                    {/* <h4 className="text-md mb-4 font-roboto-slab">Data Analyst</h4> */}
                    <div className='flex flex-row justify-center items-center space-x-6 mb-4'>
                        <a href="https://www.instagram.com/jithesh_kota/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className='h-8 w-8' />
                        </a>
                        <a href="https://www.linkedin.com/in/jitheshkota/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className='h-8 w-8' />
                        </a>
                        <a href="https://github.com/Jithesh598" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className='h-8 w-8' />
                        </a>
                        <a href="https://public.tableau.com/app/profile/jithesh.kota/vizzes" target="_blank" rel="noopener noreferrer">
                            <img src={tableau2} alt="Tableau" className='h-8 w-8' />
                        </a>
                        <a href="mailto:jkota@horizon.csueastbay.edu" target="_blank" rel="noopener noreferrer">
                            <img src={gmail} alt="Gmail" className='h-8 w-8' />
                        </a>
                    </div>
                    <div className="text-sm">
                        © {new Date().getFullYear()} Jithesh Kota. All Rights Reserved.
                    </div>
                </div>
            </Fade>
        </footer>
    );
}

export default Footer;


