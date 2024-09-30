import { useParams } from "react-router-dom";
import { data } from "./data";

function AboutProduct() {
    const { title } = useParams();

    return(
        <div>
            {data.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div key={index}>
                        <h3>{elem.name}</h3>
                        <img 
                        src={elem.image}
                        alt="product"
                        width="400px"
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default AboutProduct;
