import React,{Component} from 'react'
import {Card,Button,Image,Row, Col,Cascader,Input} from 'antd';

import jpg1 from './img/pic1.png'
import jpg2 from './img/pic2.jpg'

export default class Discovery extends Component{
    constructor(){
        super()

        this.state={
            pic:''
        }
    }
    componentDidMount(){
        this.loadPic1()
    }

    loadPic1=()=>{
        this.setState({
            pic:jpg1
        })
    }

    loadPic2=()=>{
        this.setState({
            pic:jpg2
        })
    }
    onChange=(value)=> {
        console.log(value);
    }

    render() {
        const gridStyle = {
            width: '50%',
            textAlign: 'center',
        };
        const gridStyle2 = {
            width: '33.3%',
            textAlign: 'center',
        };
        const cardStyle = {
            paddingLeft:'0px !important',
            paddingRight:'0px !important',
            height:'30%'
        };
        const options = [
            {
                value: 'a',
                label: 'a',
                children: [
                    {
                        value: 'aa',
                        label: 'aa'
                    },
                    {
                        value: 'ab',
                        label: 'ab'
                    },
                ],
                },
                {
                value: 'b',
                label: 'b',
                children: [
                    {
                        value: 'ba',
                        label: 'ba'
                    },
                    {
                        value: 'bb',
                        label: 'bb'
                    },
                ],
            },
        ];



        return (
            <>
            {/* 左边图片 */}
            <Card style={{ width: '70%',height:'90%',float:'left',overflow: 'hidden',display:'flex',alignItems:'center',justifyContent:'center' }}>
                <Image
                    width={'100%'}
                    src={this.state.pic}
                />
            </Card>
            {/* 右边按钮 */}
            <Card style={{ width: '28%',height:'90%',float:'left',marginLeft:'10px' }}>
                <Row>
                    <Card
                        bordered={true}
                        style={{height:'30%',width:'100%'}}
                    >
                        <Card.Grid style={gridStyle} hoverable={false}>
                            <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>选择数据</Button>
                        </Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}>
                            <Cascader options={options} onChange={()=>{this.onChange()}} placeholder="请选择" />
                        </Card.Grid>
                        <Card.Grid style={gridStyle2} hoverable={false}>
                            <Button style={{width:'100%'}} onClick={()=>{this.loadPic2()}}>车辆检测</Button>
                        </Card.Grid>
                        <Card.Grid style={gridStyle2} hoverable={false}>
                            <Button style={{width:'100%'}} onClick={()=>{this.loadPic2()}}>车辆跟踪</Button>
                        </Card.Grid>
                        <Card.Grid style={gridStyle2} hoverable={false}>
                            <Button style={{width:'100%'}} onClick={()=>{this.loadPic2()}}>生成轨迹</Button>
                        </Card.Grid>
                    </Card>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Card
                        bordered={true}
                        style={cardStyle}
                    >
                        <div style={{width:'35%',height:'100%',float:'left',textAlign:'center',fontSize:'22px',fontWeight:'bold'}}>
                            交通流可视化技术统计
                        </div>
                        <div style={{width:'65%',float:'left',textAlign:'center',lineHeight:'100%'}}>
                            <div style={{width:'40%',float:'left',marginLeft:'20px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>速度分析</Button>
                            </div>
                            <div style={{width:'40%',float:'left',marginLeft:'20px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>计数统计</Button>
                            </div>
                            <div style={{width:'40%',float:'left',marginLeft:'20px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>轨迹分析</Button>
                            </div>
                            <div style={{width:'40%',float:'left',marginLeft:'20px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>流量分析</Button>
                            </div>
                        </div>
                            
                    </Card>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Card
                        bordered={true}
                        style={{height:'30%',width:'100%'}}
                    >
                        <div style={{width:'100%',height:'100%',textAlign:'center',fontSize:'22px',fontWeight:'bold'}}>
                            交通场景生成
                        </div>
                        <div style={{width:'100%',height:'100%',textAlign:'center',fontSize:'22px',fontWeight:'bold'}}>
                            <div style={{width:'30%',float:'left',marginLeft:'10px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>序列生成</Button>
                            </div>
                            <div style={{width:'30%',float:'left',marginLeft:'10px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>图像生成</Button>
                            </div>
                            <div style={{width:'30%',float:'left',marginLeft:'10px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>轨迹转换</Button>
                            </div>
                            <div style={{width:'30%',float:'left',marginLeft:'10px',marginTop:'10px'}}>
                                <Input placeholder="类别" />
                            </div>
                            <div style={{width:'30%',float:'left',marginLeft:'10px',marginTop:'10px'}}>
                                <Input placeholder="数量" />
                            </div>
                            <div style={{width:'30%',float:'left',marginLeft:'10px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>确定</Button>
                            </div>
                            <div style={{width:'30%',float:'left',marginLeft:'10px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>轨迹位置信息</Button>
                            </div>
                            <div style={{width:'30%',float:'left',marginLeft:'10px',marginTop:'10px'}}>
                                <Button style={{width:'100%'}} onClick={()=>{this.loadPic1()}}>轨迹速度信息</Button>
                            </div>
                        </div>
                    </Card>
                </Row>
                
            </Card>
            </>
        )
    }
}