import { useState } from "react";

const imagesData = [
    "https://picsum.photos/id/1003/800/600",
    "https://picsum.photos/id/1005/800/600",
    "https://picsum.photos/id/1011/800/600",
    "https://picsum.photos/id/1015/800/600",
    "https://picsum.photos/id/1018/800/600",
    "https://picsum.photos/id/1020/800/600",
    "https://picsum.photos/id/1021/800/600",
    "https://picsum.photos/id/1022/800/600",
    "https://picsum.photos/id/1023/800/600",
    "https://picsum.photos/id/1024/800/600",
    "https://picsum.photos/id/1025/800/600",
    "https://picsum.photos/id/1026/800/600"
];

const GalleryBody = () => {
    const [visibleImages, setVisibleImages] = useState(6);
    const [activeIndex, setActiveIndex] = useState(null);

    const showMoreImages = () => {
        setVisibleImages((prev) => prev + 6);
    };

    return (
        <section>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800  mt-4 pt-4">
                <h1 className="text-4xl font-bold text-center text-white mb-12">Gallery</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {imagesData.slice(0, visibleImages).map((image, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 ease-in-out ${activeIndex === index ? "scale-105 shadow-2xl" : "scale-95 hover:scale-100"
                                }`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <img
                                src={image}
                                alt={`Mosaic Image ${index + 1}`}
                                className="w-full h-64 sm:h-80 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                            <div
                                className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 ${activeIndex === index ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <span className="transform translate-y-4 transition-transform duration-500">
                                    View Image
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleImages < imagesData.length && (
                    <div className="text-center mt-8">
                        <button
                            onClick={showMoreImages}
                            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GalleryBody;
