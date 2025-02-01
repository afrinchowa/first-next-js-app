import Image from "next/image";


const Gallery = () => {
    return (
        <div className="text-center">
           
          
           <h1> Nextjs image tag</h1>
           <Image className="mx-auto"  width={500}  height={500} src="https://images.unsplash.com/photo-1738279494075-5183d2eadc05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="image" />
        </div>
    );
};

export default Gallery;