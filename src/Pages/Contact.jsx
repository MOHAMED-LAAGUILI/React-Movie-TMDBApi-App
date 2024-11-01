const ContactPage = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <form className="bg-gray-800 rounded-lg p-6">
                <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 rounded" />
                <textarea placeholder="Your Message" className="w-full p-2 mb-4 rounded" rows="5"></textarea>
                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Send Message</button>
            </form>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Company Information</h2>
                <p>Email: support@example.com</p>
                <p>Follow us on social media...</p>
            </div>
        </div>
    );
};

export default ContactPage