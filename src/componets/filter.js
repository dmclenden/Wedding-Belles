import React, { Component } from 'react';
import { connect } from 'react-redux';
import {filterProducts, sortProducts} from '../action/productActions'

class Filter extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    {`${this.props.count} dresses found.`}
                </div>
                <div className="col-md-4">
                    <label>Sort by Price
               <select className="form-control" value={this.props.sort} onChange={(e) => this.props.sortProducts(filterProducts, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label > Filter Size
               <select className="form-control" value={this.props.size} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                            <option value="">ALL</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort
})
export default connect(mapStateToProps,{filterProducts, sortProducts})(Filter);