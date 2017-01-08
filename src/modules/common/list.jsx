/** @jsx createElement */
import {createElement, Component} from 'weex-rx';
import { View, Text,Image,TouchableHighlight} from 'nuke';
import app from '../app.rxscss';
import {mount} from 'nuke-mounter';
import {Button,Input,ListView,Icon} from 'nuke';
import {RefreshControl} from 'nuke-components';
let listData = [];
for (var i = 0; i < 30; i++) {
    listData.push({key: i,text:'第'+i+'条数据'});
}


class ListViewDemo extends Component {
    constructor() {
        super();
        this.state = {
            initShowLoading:true,//顶部加载
            showLoadingMore:false,//底部刷新
            data: [{key: '原有xx',text:'上一次加载的数据'}],

            isRefreshing: false,
            refreshText: '↓ 下拉刷新',
        };
        this.index = 0;
    
    }
    componentWillMount() {
        var self=this;
        setTimeout(function() {
            self.setState({
                data:listData,
                initShowLoading:false,
            });

        }, 3000);
        
    }
    handleRefresh = (e) => {
        this.setState({
          isRefreshing: true,
          refreshText: '加载中',
        });
        setTimeout(() => {
          // prepend 10 items
          
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
            self.setState({showLoadingMore:false})
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
    componentDidMount() {
        
    }
    renderItem (item, index){
        return <TouchableHighlight style={app.cellItemList} onPress={this.linkTo.bind(this,item)}>
                <Text style={app.itemTextList}>{item.text}</Text>
            </TouchableHighlight>;
  
    }
    renderHeader=()=>{
        return this.state.initShowLoading ?
        <View style={[app.initLoading]}><Icon name="loading" style={{marginRight:'20rem'}} /><Text style={app.loadingText}>努力加载ing</Text></View>
        : <RefreshControl style={app.refresh} refreshing={this.state.isRefreshing} onRefresh={this.handleRefresh}><Text style={app.loadingText}>{this.state.refreshText}</Text></RefreshControl>;
    }
    renderFooter=()=>{
        return this.state.showLoadingMore ?
        <View style={[app.loading]}><Text style={app.loadingText}>加载中...</Text></View>
        :null
    }
    
    render(){
        var self=this;
        return (
           <ListView
            renderHeader={this.renderHeader}
            renderFooter={this.renderFooter}
            renderRow={this.renderItem.bind(this)} 
            dataSource={this.state.data}

            style={app.listContainer}
            onEndReached={this.handleLoadMore.bind(this)} 
          />

        )
    }
}
export default List;

