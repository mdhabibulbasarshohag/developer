import { useState, useRef, useEffect } from 'react';

const Copied = ({ userId }) => {
    const [isCopying, setIsCopying] = useState(false);
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef();
    const baseUrl = "https://www.adameve.com/profile";

    useEffect(() => () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }, []);

    const generateUserUrl = () => {
        return `${baseUrl}/${encodeURIComponent(userId)}#dashboard`;
    };

    const handleCopy = async () => {
        setIsCopying(true);
        try {
            const urlToCopy = generateUserUrl();
            await navigator.clipboard.writeText(urlToCopy);
            setCopied(true);

            timeoutRef.current = setTimeout(() => {
                setCopied(false);
                setIsCopying(false);
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
            setCopied('error');
            setIsCopying(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <div className="group relative inline-block">
                <button
                    onClick={handleCopy}
                    disabled={isCopying}
                    className={`
            group relative inline-flex items-center justify-center
            px-4 py-2 border border-transparent text-sm font-medium
            rounded-md text-white bg-blue-600 hover:bg-blue-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transition-all duration-200 ease-in-out
            ${isCopying ? 'cursor-not-allowed opacity-90' : ''}
          `}
                >
                    {isCopying ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : copied ? (
                        <svg className="-ml-1 mr-3 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="-ml-1 mr-3 h-5 w-5 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    )}

                    {copied ? 'Copied!' : 'Copy Profile Link'}

                    {/* URL preview tooltip */}
                    <div className="absolute left-full top-1/2 ml-3 -translate-y-1/2 transform opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="px-3 py-2 text-sm bg-gray-800 text-white rounded-md shadow-lg">
                            <span className="block max-w-xs truncate">{generateUserUrl()}</span>
                            <div className="absolute right-full top-1/2 -mr-1 h-3 w-3 -translate-y-1/2 rotate-45 bg-gray-800"></div>
                        </div>
                    </div>
                </button>

                {/* Feedback message */}
                {copied && (
                    <div className="absolute left-full top-1/2 ml-3 -translate-y-1/2 transform">
                        <div className="flex items-center px-3 py-2 bg-green-100 text-green-700 text-sm rounded-md">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Copied to clipboard!
                        </div>
                    </div>
                )}
            </div>
            <input type="password" name="" id="" />
        </div>
    );
};


export default Copied