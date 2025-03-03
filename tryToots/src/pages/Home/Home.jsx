import { useApi } from '../../Api/useApi';
import Description from '../../toots/common/Description';
import { SubTitle } from '../../toots/common/SubTitle';
import { Title } from '../../toots/common/Title';
import Container from './../../toots/common/Container';
import { useQuery } from '@tanstack/react-query';


const Home = () => {

    const api = useApi();

    // const { data: posts, isLoading, isError } = useQuery({
    //     queryKey: ['posts'],
    //     queryFn: () => api.get('posts').then((res) => res.data),
    // });

    // if (isLoading) {
    //     return <h1>Loading...</h1>;
    // }

    // if (isError) {
    //     return <h1>Error fetching data</h1>;
    // }

    // console.log(posts);


    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: () => api.get('users').then((res) => res.data)
    });

    console.log(users);


    return (
        <div>
            <Container>
                <h1>Home {users?.length}</h1>
                <div>
                    {
                        users?.map((user) => (
                            <div key={user?.id}>
                                <Title TitleText={user?.name} className="text-primary" />
                                <SubTitle SubTitleText={user?.username} className="text-secondary" />
                                <Description DescriptionText={user?.email} className="text-tertiary" />
                            </div>
                        ))
                    }
                </div>

                {/* <h1>Home {posts.length}</h1>
                <div>
                    {
                        posts.map((post) => (
                            <div key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        ))
                    }
                </div> */}
            </Container>
        </div>
    );
};

export default Home;