import React from 'react'
import { connect } from 'dva'
import ProductList from './../components/ProductList';
import { message } from 'antd'

const Products = ({ dispatch, products }) => {
    function handleDelete(id) {
        message.success('删除失败!');
        // dispatch({
        //     type: 'products/delete',
        //     payload: id
        // })
    }
    return (
        <div style={{margin:20}}>
            <h2 style={{textAlign:'center'}}>List of Products</h2>
            <ProductList onDelete={handleDelete} products={products} />
        </div>
    )
}

export default connect(({ products }) => ({
    products
}))(Products);