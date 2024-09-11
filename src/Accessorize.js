function Accessorize({itemsForSale}) {


    return(<div>
        {itemsForSale.map((element => {
            const {id, name, searchTerm, price, image} = element;
            return(
                <div key={id}>
                   <img src={`./${wallet.img}.jpg`}/>
                </div>
            )
        }))}
    </div>)



}

export default Accessorize;