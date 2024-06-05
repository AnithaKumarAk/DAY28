import Product from "./component/Product"
import { DataProvider } from "./contexts/DataContext"




const App = () => {

  return (
    <DataProvider>
     <Product />
    </DataProvider>
  )
}

export default App