import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const productListData = [
    {title: "Product1", price: 2, description: "Buy It!!!!", id:'p1'},
    {title: "Product2", price: 4, description: "Buy It!!!!", id:'p2'},
    {title: "Product3", price: 9, description: "Buy It!!!!", id:'p3'},
    {title: "Product4", price: 6, description: "Buy It!!!!", id:'p4'}
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productListData.map(item =>
         <ProductItem
          key = {item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
      </ul>
        
    </section>
  );
};

export default Products;
