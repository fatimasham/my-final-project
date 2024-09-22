function Buttons({filteredAccessorize}) {
    return(<div className="cont">
        <button className="change" onClick={() => filteredAccessorize("hat")}>Hats</button>
        <button className="change" onClick={() => filteredAccessorize("sunglasses")}>Sunglasses</button>
        <button className="change" onClick={() => filteredAccessorize("gloves")}>Gloves</button>
        <button className="change" onClick={() => filteredAccessorize("cardholder")}>Wallets</button>
        <button className="change" onClick={() => filteredAccessorize("scarf")}>Scarfs</button> 
    </div>)
}

export default Buttons;