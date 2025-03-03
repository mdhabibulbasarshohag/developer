import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Img = () => {
    const [img, setImg] = useState([]);
    const [error, setError] = useState(null);

    async function getImg() {
        try {
            const response = await axios.get("https://fakestoreapiserver.reactbd.com/photos");
            setImg(response.data);
        } catch (error) {
            console.error("Error fetching images:", error);
            setError("Failed to load images. Try again later.");
        }
    }

    useEffect(() => {
        getImg();
    }, []);

    return (
        <div className="p-4">
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : img?.length > 0 ? (
                <div className="columns-3">
                    {img.map((item) => (
                        <motion.img
                            key={item._id}
                            className="w-full h-auto rounded-lg shadow-md mb-4"
                            src={item.url}
                            alt="Product"
                            initial={{ opacity: 0, scale: 0.8, }}
                            animate={{ opacity: 1, scale: 1, }}
                            transition={{ duration: 1, delay: item._id * 0.1 }}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">Loading images...</p>
            )}
        </div>
    );
};

export default Img;
