import { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from './projectCard';
import projImg1 from "/Resources/Images/project1.png";
import projImg2 from "/Resources/Images/project2.png";
import projImg3 from "/Resources/Images/project3.png";
import './animate.css';
import 'react-tabs/style/react-tabs.css';

const ProjectComponent = () => {
    const projects = [
        {
            title: "Analysis of Real Estate Data",
            description: "Developed a customer-focused dashboard analyzing Bay Area real estate, highlighting zip codes with peak property values for strategic insights",
            imgUrl: projImg1,
            url: "https://public.tableau.com/app/profile/jithesh.kota/viz/KineticRealEstateDashboard/Dashboard1"
        },
        {
            title: "Stock Market Prediction Analysis",
            description: "Applied logistic regression to analyze a 70,502-row, 77-column dataset, identifying stock market trends and achieving 95% prediction accuracy through comprehensive testing and model validation",
            imgUrl: projImg2,
            url: "https://github.com/Jithesh598/Stock-Market-Prediction-Analysis-Using-Logistic-Regression"
        },
        {
            title: "Text Classification using NLP",
            description: "Developed an NLP text classification system for document categorization, trained on 2,000 records. Utilized feature extraction and logistic regression, achieving 87.5% accuracy.",
            imgUrl: projImg3,
            url: "https://github.com/Jithesh598/Text_Classification_Using_NLP"
        },
    ];

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="container mx-auto px-4 py-10">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabPanel>
                    <div className="flex flex-wrap -mx-2 justify-center">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>


    );
}

export default ProjectComponent;
