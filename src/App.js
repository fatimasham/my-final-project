import { useState } from 'react';
import { data } from './data';
import Accessorize from './Accessorize';


function App() {
  const [accessorize, setAccessorize] = useState(data);


  return(<div>
<Accessorize itemsForSale={accessorize}/>

</div>)




}



export default App;
