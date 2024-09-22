import { Link } from "react-router-dom";

function Accessorize({itemsForSale}) {

    return(<div className="products">
        {itemsForSale.map((item => {
            const {id, name, price, image} = item;
            return(
                <div className="product-card" key={id}>
                    <Link to={`/about/${item.title}`}>
                        <img src={`./${image}.jpg`} alt="beauty" width="400px" height="500px"/>
                    </Link>
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                </div>
            )
        }))}
    </div>)



}

export default Accessorize;