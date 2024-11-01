import { useState } from 'react';

const PricingPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const plans = [
        { name: 'Basic', price: '$9.99/month', features: ['Feature 1', 'Feature 2'] },
        { name: 'Standard', price: '$14.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
        { name: 'Premium', price: '$19.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Choose Your Plan</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-800 rounded-lg p-6 text-white text-center transition-transform transform hover:scale-105"
                    >
                        <h2 className="text-2xl font-bold">{plan.name}</h2>
                        <p className="mt-2 text-lg">{plan.price}</p>
                        <ul className="mt-4 space-y-2 text-left">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-sm">✔️ {feature}</li>
                            ))}
                        </ul>
                        <button className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors">
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                {[
                    { question: 'What is the refund policy?', answer: 'You can request a refund within 30 days of purchase.' },
                    { question: 'Can I change my plan later?', answer: 'Yes, you can upgrade or downgrade your plan anytime.' },
                    { question: 'Is there a free trial?', answer: 'Yes, we offer a 14-day free trial for new users.' },
                ].map((faq, index) => (
                    <div key={index} className="mb-2  text-white">
                        <div 
                            className="cursor-pointer bg-gray-700 rounded-lg p-4 flex justify-between items-center" 
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-medium">{faq.question}</span>
                            <span className="text-lg">{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="bg-gray-800 rounded-lg p-4 mt-2 text-sm  text-white">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;
