const TrendingPage = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4">Live Movie Channel</h1>
            <div className="relative">
                <iframe
                    width="100%"
                    height="500"
                    src="https://youtu.be/uC9VtVnuPD0" // Replace with the actual URL
                    title="Live Movie Channel"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default TrendingPage;
