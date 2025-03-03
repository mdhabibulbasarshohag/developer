import { useQuery } from "@tanstack/react-query";
import { usePublic } from "../../Api/usePublic";
import { ToastMessage } from "../../components/ToastMessage";
import { toast } from "react-toastify";
import { Title } from "../../toots/common/Title";



const Video = () => {

    const videoApi = usePublic();

    const { data: video, isLoading, isError } = useQuery({
        queryKey: ["video"],
        queryFn: async () => await videoApi?.get('youtube/videos').then((res) => res.data)
    });


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    toast.success(video?.message)

    isError && toast.error(video?.message)





    console.log(video?.data?.data);


    return (
        <div>
            <div>
                <Title className="text-blue-100">Video</Title>
            </div>
            <div>

                {
                    video?.data?.data?.map((item) => (
                        <div key={item.items.id}>
                            <h2>{item.items.snippet.title}</h2>
                            <video src={`https://www.youtube.com/watch?v=${item.items.snippet.channelId}&{ab}_channel=${item.items.snippet.channelTitle}}`}></video>
                        </div>
                    ))
                }

            </div>
            <ToastMessage />
        </div>

    );
};

export default Video;