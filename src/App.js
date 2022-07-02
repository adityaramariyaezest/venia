import Layout from './components/Layout/Layout';
import Image from './components/Image/Image';

import ProductList from './components/Product/ProductList';


import './scss/_index.scss';
function App() {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
}

export default App;
