import Wrapper from './components/Header/Wrapper';
import Layout from './components/Layout/Layout';
import Image from './components/Image/Image';

import ProductList from './components/Product/ProductList';


import './scss/_index.scss';
function App() {
  return (
    <Layout>
      <ProductList />
      {/* <Wrapper phone="12" tablet="6" desktop="4">
          <div className='product'>
            <div className='product-image'>
              <Image name="p1.PNG" />
            </div>
            <div className='product-name'>Varsity Eco-friendly Jacket</div>
            <div className='product-price'>$110.00</div>
            <div className='product-favorite'><Image name="heart.svg" /></div>
          </div>
        </Wrapper> */}
    </Layout>
  );
}

export default App;
