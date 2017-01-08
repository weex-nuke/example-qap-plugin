'use strict';
import {mount} from 'nuke-mounter';
import {createElement, Component} from 'weex-rx';
import {View,ListView,Icon, Text,TouchableHighlight, Modal,Image, RefreshControl,Animated,Swipe,Util} from 'nuke';
import fetch from '$root/lib/fetch';
import Top from '$root/lib/top';
import QN from 'QAP-SDK';
import ListItem from './listitem'
import styles from './orderlist.rxscss'
const Location = Util.Location;
let listData = [];
// for (var i = 0; i < 30; i++) {
    // listData.push({key: i,text:'第'+i+'条数据'});
// }
class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            data: listData,
            stop: false,
            isRefreshing: true,
            showLoading:false,
            refreshText: '加载中'
        };
        this.getData();
        this.index = 0;

    }
    getData(){
        Top('taobao.trades.sold.get',{
            type: 'fixed,auction,guarantee_trade,step,independent_simple_trade,independent_shop_trade,auto_delivery,ec,cod,game_equipment,shopex_trade,netcn_trade,external_trade,instant_trade,b2c_cod,hotel_trade,super_market_trade,super_market_cod_trade,taohua,waimai,o2o_offlinetrade,nopaid,step,eticket,tmall_i18n,nopaid,insurance_plus,finance,pre_auth_type',
            fields: 'seller_nick,buyer_nick,title,type,created,tid,seller_rate,buyer_rate,status,payment,discount_fee,adjust_fee,post_fee,total_fee,pay_time,end_time,modified,consign_time,buyer_obtain_point_fee,point_fee,real_point_fee,received_payment,commission_fee,buyer_memo,seller_memo,alipay_no,buyer_message,pic_path,num_iid,num,price,cod_fee,cod_status,shipping_type, is_daixiao,is_part_consign,consign_interval,arrive_interval,arrive_cut_time,orders, trade_from,credit_card_fee'
		    
        }).then(data => {
            this.setState({
                data: data.trades_sold_get_response.trades.trade,
                
                isRefreshing: false,
                refreshText: '↓ 下拉刷新',
            })
        }, error => {
            console.warn('get data fail',error);
            fail && fail(typeof error === 'string' ? JSON.parse(error) : error);
        });
        fetch('orderList').then(res => {
            if(res && res.datas){

            
            this.setState({
                data: res.datas,
                
                isRefreshing: false,
                refreshText: '↓ 下拉刷新',
            })
            }else{
                //empty data
            }
            
        })
    }
    handleRefresh = (e) => {
        this.setState({
          isRefreshing: true,
          refreshText: '加载中',
        });
        setTimeout(() => {
          this.setState({
            isRefreshing: false,
            data: listData,
            refreshText: '↓ 下拉刷新',
          });

        }, 3000);
      };

    handleLoadMore() {
        var self = this;
        // 这里进行异步操作
        if (self.index == 5) {
            self.setState({showLoading:false})
            return;
        }else{
            setTimeout(function() {
                self.state.data.push({key: 'l1',text:'loadmore1'}, {key: 'l2',text:'loadmore2'}, {key: 'l3',text:'loadmore3'},{key: 'l4',text:'loadmore4'}, {key: 'l5',text:'loadmore5'});
                self.setState(self.state);
                self.index++;
            }, 2000);

        }

    }
    linkTo(item,e) {
        console.log(e);
    }
    renderItem=(item, index)=>{
        return (
            <ListItem item={item} idx={index} />
        );
        // return (<TouchableHighlight style={app.cellItemList} onPress={this.linkTo.bind(this,item)}>
        //         <Image style={{width:100,height:100}} source={{uri: item.pic_path}}/>
        //         <Text style={app.itemTextList}>{item.title}</Text>
        //     </TouchableHighlight>);
    }
    renderHeader=()=>{
        return <RefreshControl style={styles.refresh} refreshing={this.state.isRefreshing} onRefresh={this.handleRefresh}><Text style={styles.loadingText}>{this.state.refreshText}</Text></RefreshControl>;
    }
    renderFooter=()=>{
        return this.state.showLoading ?
        <View style={[styles.loading]}><Text style={styles.loadingText}>加载中...</Text></View>
        :null
    }
    render(){
        var self=this;
        return (
           <ListView
            renderHeader={this.renderHeader}
            renderFooter={this.renderFooter}
            renderRow={this.renderItem} 
            dataSource={this.state.data}

            style={styles.listContainer}
            onEndReached={this.handleLoadMore.bind(this)} 
          />

        )
    }
}

export default OrderList;
