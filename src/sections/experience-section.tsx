import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/loka-logo.svg",
            title: "Sr. Front End engineer",
            company: "Loka",
            location: "Los Altos, Califórnia, United States - Remote",
            start: "Jul 2023",
            end: "Present",
            description: [
                "I work every day to deliver the best solutions for the clients, using mainly React-Native ( Android and iOS), Kotlin for native development and React.js for web. I adapt myself very fast to every project I work on.",
                "Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
            ],
            achievements: [
                "Improved core function of the mobile app using best practices like the strategy design pattern, CPU Usage was reduced by 40%, making the lives of the users better.",
                "Built a CMP ( Compose Multiplatform) boilerplate using the architecture MVI to speed up the delivery of new mobile apps for the clients.",
                "I wrote an article about a solution I provided to the client. With this solution, the mobile app of the clients is starting to have jetpack compose components, which provides more performance and better experiences for the users."
            ]
        },
        {
            image: "/assets/olist-logo.png",
            title: "Senior React Native Developer",
            company: "Olist",
            location: "Curitiba, Paraná, Brazil - Remote",
            start: "Jun 2021",
            end: "Jul 2023",
            description: [
              "Partnered with cross-functional teams to refine product requirements and deliver high-impact mobile features. Led development of the global Olist Store app, helping merchants manage marketplace integrations and scale their businesses efficiently. Previously worked on vnda-direct, enabling accessible and scalable omnichannel sales for merchants.",
            ],
            achievements: [
                "Design, architecture and implementation of the App globalization",
                "Led a Book club where the team shared new ideas and insights of a selected book",
                "Built a automated CI/CD pipeline from the scratch (Fastlane + Bitrise)",
                "Design and implementation of a new architecture inside the already existing app Olist Store"
            ]
        },
        {
            image: "/assets/quero-delivery-logo.png",
            title: "Senior React Native Developer",
            company: "Quero Delivery",
            location: "Lagarto, Sergipe, Brazil - Remota",
            start: "Jun 2019",
            end: "Jun 2021",
            description: [
                "Led mobile development for QueroDelivery, a delivery ecosystem with over 1 million users, focused on scaling local businesses across Brazil’s countryside. Oversaw three mobile applications: QueroDelivery (consumer experience), QD Parceiros (merchant management), and QueroLog (real-time logistics for couriers), ensuring reliability, scalability, and operational efficiency across the platform."
            ],
            achievements: [
                "Built QueroLog from the scratch and led its development, architecture. implementation and its beta testing.",
                "Mentored others devs to work with React Native.",
                "Built the first automated test pipeline for the company's projects.",
                "Built a native bridge to work with security stuff for processing online payments.",
                "Take care of an App with more than 1.000.000 of users."
            ]
        },
        {
            image: "/assets/vivi-tech-logo.jpeg",
            title: "Mobile Developer",
            company: "ViViTech",
            location: "Aracaju, Sergipe, Brazil - Presencial",
            start: "Jun 2018",
            end: "Oct 2019",
            description: [
                "I developed Android and iOS applications to create, facilitate and speed up processes which exists in the companies that ViviTech provide services, using Kotlin, Java, Objective-C, Swift and React Native."
            ],
            achievements: [
                "Learn how to build an App from the scratch.",
                "Learn Javascript and its awesome power. PS: It's worth noticing that I learnt Javascript while I had to deliver a big project in just 15 days.",
                "Being the English guy that talked with the USA office to bring news to the Brazilian office."
            ]
        },
        {
            image: "/assets/unit-logo.jpg   ",
            title: "Mobile Developer Internship",
            company: "Tiradentes University",
            location: "Aracaju, Sergipe, Brazil - Presencial",
            start: "Jun 2018",
            end: "Oct 2019",
            description: [
                    "Enhanced the Magister platform by maintaining Google service integrations and delivering new mobile features using Java and Objective-C. Played a key role in improving mobile stability and usability while supporting projects designed to simplify academic operations for professors and students."
            ],
            achievements: [
                "Learn how to build an App from the scratch.",
                "Learn Javascript and its awesome power. PS: It's worth noticing that I learnt Javascript while I had to deliver a big project in just 15 days.",
                "Being the English guy that talked with the USA office to bring news to the Brazilian office."
            ]
        },
        
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                        <p className="text-gray-500 space-y-2 mt-6 font-bold">Achievements</p>
                        <ul className="list-disc px-5 mt-4  text-gray-500 space-y-2">
                            {experience.achievements.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}