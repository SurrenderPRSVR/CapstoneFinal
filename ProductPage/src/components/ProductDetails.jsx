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

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '600px',
            margin: 'auto',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
        },
        heading: {
            fontSize: '24px',
            marginBottom: '10px',
        },
        image: {
            width: '100%',
            borderRadius: '8px',
            marginBottom: '10px',
        },
        description: {
            fontSize: '16px',
            marginBottom: '10px',
            lineHeight: '1.5', 
            color: '#333', 
        },
        price: {
            fontWeight: 'bold',
            color: '#007bff', 
        },
        button: {
            padding: '10px 15px',
            backgroundColor: '#007bff', 
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#0056b3', 
        },
    };


    return (
        <div style={styles.container}>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div>
                    <h2 style={styles.heading}>{product.title}</h2>
                    <img src={product.image} alt={product.title} style={styles.image} />
                    <p style={styles.description}>{product.description}</p>
                    <p style={styles.price}>Price: ${product.price}</p>
                    <p>Rating: {product.rating.rate} ★</p>
                    <button style={styles.button} onClick={() => window.history.back()}>Back</button>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;
