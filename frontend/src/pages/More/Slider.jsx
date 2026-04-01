import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ThumbsUp } from 'lucide-react';

const slides = [
    { id: 1, image: 'https://picsum.photos/id/1015/1200/600', title: 'Slide 1 - Welcome' },
    { id: 2, image: 'https://picsum.photos/id/201/1200/600', title: 'Slide 2 - Features' },
    { id: 3, image: 'https://picsum.photos/id/301/1200/600', title: 'Slide 3 - Business Logic' },
];

function Slider() {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => {
            setCurrent(c => (c + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [autoPlay]);

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <ThumbsUp size={32} /> Slider / Carousel
            </h1>
            <div className="relative rounded-3xl overflow-hidden">
                <img src={slides[current].image} alt="" className="w-full h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-8">
                    <h2 className="text-3xl text-white">{slides[current].title}</h2>
                </div>

                <button onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full">
                    <ChevronLeft size={28} />
                </button>
                <button onClick={() => setCurrent(c => (c + 1) % slides.length)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full">
                    <ChevronRight size={28} />
                </button>
            </div>
            <div className="flex justify-center gap-3 mt-6">
                {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)}
                        className={`w-4 h-4 rounded-full ${i === current ? 'bg-blue-600' : 'bg-gray-600'}`} />
                ))}
            </div>
        </div>
    );
}

export default Slider;
