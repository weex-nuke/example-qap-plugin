'use strict';
import {createElement, Component,render} from 'rax';;
import {ScrollView,Util} from 'nuke';
import styles from './index.rxscss';
import fetch from '$root/lib/fetch';
import BuyerInfo from './mods/buyerInfo';
import ItemInfo from './mods/itemInfo';
import OrderInfo from './mods/orderInfo';
import FloatBar from './mods/floatBar';
const Location = Util.Location;
import QN from 'QAP-SDK';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:{
                
            }
        }
        //get id param from url
        let query=QN.uri.parseQueryString(Location.search.substr(1));
        if(query && query.id){
            this.state['id']= query.id;
            
        }else{
            this.state['id']= '12312332';
            // return;
        }
        this.getDetailData();
    }
    getDetailData=()=>{
        fetch('orderDetail',{id:this.state.id}).then(res => {
            if(res){
                this.setState({
                    data: res,
                    isRefreshing: false,
                    refreshText: '↓ 下拉刷新',
                })
            }else{
                //empty data
                // do error handle
            }
            
        })
    }
    
    render() {
        return (
           <ScrollView style={styles.detail}>
                {this.state.data.order ? <OrderInfo order={this.state.data.order} /> : null}
                {this.state.data.buyer ? <BuyerInfo buyer={this.state.data.buyer} />: null}
                {this.state.data.item ? <ItemInfo item={this.state.data.item} /> : null}
                <FloatBar />
                
            </ScrollView>

        )
    }
}


render(<Detail />);
