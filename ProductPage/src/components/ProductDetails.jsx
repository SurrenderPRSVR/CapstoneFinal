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
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
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
    styledForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    roundInput: {
        border: 'none',
        borderRadius: '25px',
        padding: '10px 20px',
        fontSize: '16px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s ease',
    },
    roundInputFocus: {
        outline: 'none',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
    },
    roundButton: {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s ease',
    },
    roundButtonHover: {
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
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
