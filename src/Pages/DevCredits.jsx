import Logo from "../assets/images/Logo.jpg";

const DeveloperCreditsPage = () => {
    const teamMembers = [
        {
            name: 'MOHAMED',
            role: 'Full Stack Web Developer',
            portfolio: 'https://laaguili.app.genez.io',
            image: Logo,
        },
        // Add more team members here as needed
    ];

    return (
        <div className="bg-gray-900 min-h-screen text-white py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold text-center mb-10">Developer Credits</h1>
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-start gap-10 max-w-4xl">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-800 rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg"
                            >
                                <img
                                    src={member.image}
                                    alt={`${member.name}'s profile`}
                                    className="rounded-full w-48 h-48 mb-4 shadow-xl"
                                />
                                <h2 className="text-3xl font-semibold text-yellow-400 text-center">{member.name}</h2>
                                <p className="text-gray-300 text-center text-lg">{member.role}</p>
                                <div className="flex space-x-4 mt-4">
                                    <a 
                                        href={member.portfolio} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-2 rounded-full transition duration-300"
                                    >
                                        View Portfolio
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animated Background */}
            <style >{`
                .bg-animation {
                    background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(255,255,255,0.1));
                    animation: gradientAnimation 5s ease infinite;
                }

                @keyframes gradientAnimation {
                    0% {
                        background-position: 0% 0%;
                    }
                    50% {
                        background-position: 100% 100%;
                    }
                    100% {
                        background-position: 0% 0%;
                    }
                }
            `}</style>
        </div>
    );
};

export default DeveloperCreditsPage;
