import React,{Component} from 'react'
import './index.scss'

export default class NotFound extends Component{
    render() {
        return (
            <div className="g-bd g-bd-full">
                <div className="g-wrap">
                    <div className="n-for404">
                        <i className="u-errlg u-errlg-404"></i>
                        <p className="note s-fc3">页面找不到</p>
                    </div>
                </div>
            </div>
        );
    }
}