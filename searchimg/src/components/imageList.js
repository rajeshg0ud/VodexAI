import ImageShow from './imageShow';
import './imageList.css'
function imageList({images}){
    const renderedImages=images.map((image)=>{
        return <ImageShow image={image} key={image.id} />;
    });
    return <div className='image-list'>{renderedImages} </div>;
}

export default imageList;