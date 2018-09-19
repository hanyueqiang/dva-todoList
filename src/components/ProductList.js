import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button } from 'antd'

const ProductList = ({ onDelete, products }) => {
    const colums = [
        {
            title: "Name",
            detaIndex: "name"
        },
        {
            title: "Actions",
            render: (text, record) => {
                return (
                    <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                        <Button>Delete</Button>
                    </Popconfirm>
                )
            }
        }
    ];
    return (
        <Table
            dataSource={products}
            columns={colums}
        />
    )
}

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};

export default ProductList;