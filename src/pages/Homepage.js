import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Navbar from '../components/Navbar';

const Homepage = () => {

    // fetch data and display them on screen homepage

    const [data, setData] = useState([])

    const fetchData = async () => {
        let rawResponse = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
        if (rawResponse) {
            let response = await rawResponse.json()
            setData(response)
        } else {
            console.error('No data fetched')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <Navbar />

            <h3 style={styles.title}>Mes produits</h3>
            
            <div className='row' style={styles.productsContainer}>
                {data.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </div>

        </div>
    );
};

const styles = {
    title : {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 20
    },
    productsContainer : {
        display: 'flex',
        justifyContent : 'center'
    }
}

export default Homepage;