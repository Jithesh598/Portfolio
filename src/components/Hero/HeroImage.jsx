import profilePicture from '/Resources/Images/Hero2.jpeg';
import './resumeButton.css';


const HeroImage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img
                src={profilePicture}
                alt='Profile Picture'
                className="w-1/2 md:w-2/3 lg:w-3/4 xl:w-1/2 object-cover object-center rounded-lg"

            />

        </div>
    )
}

export default HeroImage;