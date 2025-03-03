import { useQuery } from "@tanstack/react-query";
import { gatRandom } from "../hooks/gatRandom/gatRandom";
import { Button, Container } from "../Common/Common";


const Products = () => {
    const apiClientProducts = gatRandom();

    const { data: products, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => apiClientProducts.get('/randomproducts').then((res) => res.data),
    })

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading products.</p>;
    console.log(products?.data?.data);

    return (

        <Container >
            <div>



                <h1>Products {products?.data?.data?.length}</h1>
                <div>
                    {products?.data?.data?.map((product) => (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            {/* {
                            product?.images?.map((image) =>
                                <img src={image} alt={product.name} key={image} />
                            )
                        } */}

                        </div>
                    ))}

                    <Button className="" buttonText="Buy Now" />
                </div>

            </div>
        </Container>

    );
};

export default Products;