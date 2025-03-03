

const Modal = ({ children, className, onClick, visible }) => {
    return (
        <div onClick={onClick} className={`fixed top-0 left-0 w-full h-full z-50 bg-black/30 ${visible ? 'block' : 'hidden'} flex justify-center items-center`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-[500px] h-[800px] bg-amber-100 z-[999] ${className}`}
            >
                <div>
                    <button onClick={onClick} className="text-black text-2xl cursor-pointer">
                        Close
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;