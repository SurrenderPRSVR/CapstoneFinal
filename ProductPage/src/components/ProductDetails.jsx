import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from './apis'; // Import your API function

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetchProductById(id); // Fetch product details
                setProduct(data);
            } catch (error) {
                setError("Error fetching product details");
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} style={{ width: '200px', height: 'auto' }} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating.rate} ★</p>
                    <button onClick={() => window.history.back()}>Back</button>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;
