import React, { Component } from 'react';
import util from '../util'
import {connect} from 'react-redux'
import {fetchProducts} from '../action/productActions';

class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
        <center>
           <div className="col-md-5 offset-md-5" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <img src={`products/${product.sku}_1.png`} alt={product.title} />
                        <p>{product.title}</p>                        
                    </a>
                    <div class ="price">
                    <b>{util.formatCurrency(product.price)}</b>
                    </div>
                    <button className="btn" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
            </center>

        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { products: state.products.filteredItems };
};
export default connect(mapStateToProps,(fetchProducts))(Products);
/*class Products extends Component {
    componentWillMount(){
        this.props.fetchProducts
    }

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <p>{product.title}</p>                        
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({products: state.products.items});
export default connect(mapStateToProps,(fetchProducts))(Products); */