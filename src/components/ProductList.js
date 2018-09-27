import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  Popconfirm,
  Button
} from 'antd'

const ProductList = ({
  onDelete,
  products
}) => {
  const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: "Actions",
      render: (text, record) => {
        return ( 
            <Popconfirm 
                title = "Delete?"
                onConfirm = {
                    () => onDelete(record.id)
                } >
                <Button key = {record.id}>Delete</Button> 
            </Popconfirm>
        )
      }
    }
  ];
  return ( <Table dataSource = {products} columns = {columns}/> )
}

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
