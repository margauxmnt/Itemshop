import { useState, useContext } from 'react';
import BasketContext from '../store/basket-context';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Input } from 'reactstrap';


const Product = ({product}) => {

    const [quantity, setQuantity] = useState(1)

    const handleChangeValue = e => setQuantity(e.target.value)

    const { basketList, updateBasket, isInBasket, savedQuantity } = useContext(BasketContext)

    const handleClick = () => {
        updateBasket(product, quantity)
        console.log(basketList)
        console.log(basketList.length)
    }

    return (
        <Card className='col-md-3' style={styles.cardContainer}>
                            <CardImg
                                alt={product.title}
                                src={product.thumbnailUrl}
                                top
                                style={styles.cardImg}
                                />
                            <CardBody style={styles.cardBody}>
                                <CardTitle tag='h6'>{product.title}</CardTitle>
                                <CardText style={styles.cardText}>Quantité</CardText>
                                <Input 
                                    type='number'
                                    min={0}
                                    defaultValue={isInBasket(product.id) ? savedQuantity(product.id) : quantity}
                                    onChange={handleChangeValue}
                                    style={styles.input}>
                                </Input>
                                <Button
                                    onClick={handleClick} 
                                    color='secondary' 
                                    size='sm' 
                                    style={styles.button}>
                                        Ajouter au panier
                                </Button>
                            </CardBody>
                        </Card>
    );
};

const styles = {
    cardContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    cardImg : {
        height: 150,
        width: 150,
    },
    cardBody : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    cardText : {
        paddingTop: 30,
        fontSize: 14
    },
    button : {
        margin: 20
    },
    input : {
        textAlign: 'center',
        width: 80
    }
}

export default Product;