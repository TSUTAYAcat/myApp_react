import React from 'react'
import { Card, Button, Table, Tag, Space } from 'antd';
import { getCategoryList } from '../../service/category'


export default class Category extends React.Component {
    constructor(props) {
        super(props)
        this.columns = [
            {
                title: '分类名称',
                dataIndex: 'category_name',
                key: 'name',
                render: text => <div >{text}</div>,
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => {
                    return (<div>
                        <a style={{ paddingRight: '10px' }}>修改分类</a>
                        <a onClick={() => {
                            if (text.child_level && text.id) {
                                console.log(text.child_level, text.id)
                                this.setCategoryList(text.child_level, text.id)
                            }
                        }} key={2}>查看子分类</a>
                    </div>)
                },
            },
        ]
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.setCategoryList()
    }
    setCategoryList = (level = 1, parent_id = 0) => {
        getCategoryList({ level: level, parent_id: parent_id }).then(e => {
            if(e&&e.data&&e.data.success){
                this.setState({
                    list: e.data.data || []
                })
            }
            console.log(e)
          
        })
    }
    render() {
        let data = []
        console.log(this.state.list)
        data = this.state.list.map((v, i) => {
            return {
                key: v.id,
                category_name: v.category_name,
                ...v
            }
        })
        return <div style={{ width: "100%", height: "100%" }}>
            <Card title="分类列表" extra={<div><Button onClick={() => {
                let text = this.state.list[0]
                if (text.parent_level ) {
                    console.log(text.parent_level)
                    this.setCategoryList(text.parent_level)
                }
            }} type='primary' style={{ marginRight: '10px', display: this.state.list && this.state.list.length && this.state.list[0].level > 1 ? 'inline-block' : 'none' }}>上一级</Button><Button type='primary'>添加</Button></div>} style={{ width: "100%", height: "100%" }}>
                <Table columns={this.columns} dataSource={data} />
            </Card>
        </div>
    }
}