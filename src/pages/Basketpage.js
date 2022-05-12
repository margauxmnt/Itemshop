import { useContext } from "react";
import BasketContext from '../store/basket-context';
import Navbar from "../components/Navbar";
import Basket from "../components/Basket";

const Basketpage = () => {

  const { basketList } = useContext(BasketContext)

  let content;

  if (basketList.length === 0){
    content = <p style={styles.emptyContent}>Aucun article dans le panier</p>
  } else {
    content = basketList.map(product => {
      return <Basket key={product.product.id} product={product} />
    }) 
  }

    return (
      <div>

        <Navbar />

        <h3 style={styles.title}>Mon panier</h3>

        <div className="row">
          {content}
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
    emptyContent: {
      textAlign: 'center',
      margin: '10px',
    }
}

export default Basketpage;