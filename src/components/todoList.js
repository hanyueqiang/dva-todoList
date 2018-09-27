import React from 'react'
import { Input, Table, Popconfirm, Button } from 'antd';

const Search = Input.Search;

const TodoList = ({
    handleAdd,
    onDelete,
    todolist
}) => {
    const columns = [{
        title: 'content',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: "Actions",
        render: (text, record) => {
            return (
                <div>
                    <Popconfirm
                        title="Delete?"
                        onConfirm={
                            () => onDelete(record.id)
                        } >
                        <Button key={record.id}>删除</Button>
                    </Popconfirm>
                    <Button type='primary' key={record.id}>编辑</Button>
                </div>

            )
        }
    }
    ];
    return (
        <div>
            <Search
                placeholder="input text"
                enterButton="添加"
                size="default"
                onSearch={(value) => handleAdd(value)}
                style={{width:400}}
            />
            <Table dataSource={todolist} columns={columns} />
        </div>
    )
}
export default TodoList;