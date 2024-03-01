
interface CourseVideoProps {
    videoUrl: string;
    height: number;
    width: number;
}
const CourseVideo = ({
 videoUrl,
 height,
 width,
}:CourseVideoProps) => {

    return ( 
        <div>
            <iframe 
                height={height}
                width={width}
                src={videoUrl}
                frameborder="5" 
                allow="fullscreen;
                allowfullscreen="allowFullScreen
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
                clipboard-write 
                encrypted-media 
                gyroscope 
                picture-in-picture 
                web-share
                allowFullscreen
            >
            </iframe>
        </div>
     );
}
 
export default CourseVideo;