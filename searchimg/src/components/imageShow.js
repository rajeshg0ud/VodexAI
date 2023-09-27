
function imageShow({image}){
    return <div> 
        <img  src={image.urls.small} alt={image.alt_disc}/>
        </div>
};

export default imageShow;