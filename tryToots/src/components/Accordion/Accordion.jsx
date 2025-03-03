import { useState } from "react";

const Accordion = () => {
    const [active, setActive] = useState(0);

    const accordionData = [
        {
            id: 0,
            title: "What is React?",
            content: "React is a JavaScript library for building user interfaces.",
        },
        {
            id: 1,
            title: "What is TailwindCSS?",
            content: "TailwindCSS is a utility-first CSS framework for styling.",
        },
        {
            id: 2,
            title: "What is Vite?",
            content: "Vite is a modern frontend build tool that improves development speed.",
        },
        {
            id: 3,
            title: "What is Node.js?",
            content: "Node.js is a runtime environment for executing JavaScript code outside of a web browser.",
        }
    ];

    const handleToggle = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <div className="w-96 mx-auto mt-5">
            {accordionData.map((item) => (
                <div key={item.id} className="border-b border-gray-300">
                    <button
                        onClick={() => handleToggle(item.id)}
                        className="w-full text-left p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        aria-expanded={active === item.id}
                        aria-controls={`content-${item.id}`}
                    >
                        {item.title}
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${active === item.id ? "max-h-screen" : "max-h-0"
                            }`}
                    >
                        <div
                            id={`content-${item.id}`}
                            className="p-3 text-gray-700"
                        >
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
