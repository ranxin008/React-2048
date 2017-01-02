/**
 * Created by wanglei on 2017/1/2.
 */

import React from 'react';
import '../css/index.css';


class Tail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const value = !this.props.value ? '' : this.props.value;
        const col_end = this.props.col_end;
        const tile_style = !value ? 'tile valuenull' : 'tile value'+value;
        const col_style = col_end ? 'grid-col-end' : 'grid-col';

        return(
            <div className={col_style}>
                <div className={tile_style}>{value}</div>
            </div>
        );
    }
}

export default Tail;