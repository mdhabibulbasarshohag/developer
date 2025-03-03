import { useQuery } from "@tanstack/react-query";
import { gatRandom } from "../hooks/gatRandom/gatRandom";

const Friend = () => {
    const apiClient = gatRandom();

    const { data: users, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => apiClient.get('/randomusers').then((res) => res.data),
    });

    const friends = users?.data?.data;

    console.log(friends);


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users.</p>;



    return (
        <div>
            <h1>Friends {friends?.length}</h1>
            {
                friends.map((friend) => (
                    <div key={friend.id}>
                        <h2>{friend.name.first} {friend.name.last}</h2>
                        <p>{friend.email}</p>
                        <img src={friend.picture.large} alt="" />
                    </div>
                ))
            }

        </div>
    );
};

export default Friend;
