import { useContext, useState } from "react";
import BasketContext from "../store/basket-context";
import { Input, Button } from "reactstrap";

const Basket = ({product}) => {

    const { removeFromBasket, savedQuantity, updateBasket } = useContext(BasketContext)

    const [quantity, setQuantity] = useState(savedQuantity(product.product.id))

    const handleChangeValue = e => {
        setQuantity(e.target.value);
        if (e.target.value === '0' || 0){
            removeFromBasket(product.product.id)
        } else {
            updateBasket(product.product, e.target.value)
        }
    }

    return (
        <div style={styles.container}>
            <img src={product.product.thumbnailUrl} alt={product.product.title}/>
            <div style={styles.product}>{product.product.title}</div>
            <p style={styles.text}>Quantité</p>
            <Input 
                type='number'
                defaultValue={quantity}
                onChange={handleChangeValue}
                min={0}
                style={styles.input}>
            </Input>
            <Button
                onClick={() => removeFromBasket(product.product.id)}
                color='secondary' 
                size='sm' 
                style={styles.button}>
                Supprimer le produit
            </Button>
        </div>
    );
};

const styles = {
    container : {
        width: '80vw',
        margin: 25,
        display: 'flex',
        alignItems: 'center'
    },
    product :  {
        fontWeight: 'bold',
        margin: 10,
        width: '35%',
        textAlign: 'center'
    },
    text : {
        marginBottom: 0,
        marginRight: 10,
        fontSize: 14
    },
    input : {
        textAlign: 'center',
        width: 80
    },
    button : {
        margin: 20
    },
}

export default Basket;