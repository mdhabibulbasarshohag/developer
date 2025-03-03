import "./LoadingScreen.css"

const LoadingScreen = () => {
    return (
        <div className="flex bg-[#84a9b9]/10 items-center justify-center h-screen text-[#122c36] text-center">
            <div className="flex flex-col justify-center gap-9 items-center">
                <h1 className="text-7xl font-bold animate-text">Welcome</h1>
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
