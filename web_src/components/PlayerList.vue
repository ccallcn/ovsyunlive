<template>
    <div class="container-fluid no-padding">
        <div class="alert alert-success alert-dismissible">
            <small>
                <strong><i class="fa fa-info-circle"></i> 提示 : </strong>
				<a :href="webpushurl" target="_blank"> Ｗeb推流 <i class="fa fa-external-link"></i></a>，
                <a :href="webrecordurl" target="_blank"> 录像 <i class="fa fa-external-link"></i></a>，
                <a href="http://w.ovmeet.com:2080/ovplayflv/" target="_blank"> FLV播放器，这些要单独授权 <i class="fa fa-external-link"></i></a>，
                <span class="push-url-format">播放URL规则: http://{ip}:{port}/{app}/{id}.flv</span> ，
                例如 : http://m.ovsyun.com:8800/live/1111.flv，
                <a href="/ovplayw/" target="_blank"> OvPlayW播放器 <i class="fa fa-external-link"></i></a>
                <span class="push-url-format">播放URL规则: ovplayw://{ip}:{port}/{app}/{id}</span>
                例如 : ovplayw://m.ovsyun.com:8801/live/1111
            </small>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div> 

        <div class="box box-success">
            <div class="box-header">
                <h4 class="text-success text-center">播放列表</h4>           
                <form class="form-inline">
                    <div class="form-group pull-right">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="搜索" v-model.trim="q" @keydown.enter.prevent ref="q">
                            <div class="input-group-btn">
                                <button type="button" class="btn btn-default" @click.prevent="doSearch" >
                                    <i class="fa fa-search"></i>
                                </button>  
                            </div>                            
                        </div>
                    </div>                              
                </form>            
            </div>
            <div class="box-body">
                <el-table :data="players" stripe class="view-list" :default-sort="{prop: 'startAt', order: 'descending'}" @sort-change="sortChange">
                    <el-table-column prop="id" label="ID" min-width="120"></el-table-column>
                    
					 <el-table-column prop="rtmpUrl" label="RTMP地址" min-width="240" show-overflow-tooltip>
                      <template slot-scope="scope">
                        <span>
                          <i class="fa fa-copy" role="button" v-clipboard="scope.row.rtmpUrl" title="点击拷贝" @success="$message({type:'success', message:'成功拷贝到粘贴板'})"></i>
                          {{scope.row.rtmpUrl}}
                          </span>
                      </template>
                    </el-table-column>      
                    <el-table-column prop="path" label="H5地址" min-width="280" show-overflow-tooltip>
                                <template slot-scope="scope">
                                  <span>
                                    <i class="fa fa-copy" role="button" v-clipboard="scope.row.path" title="点击拷贝" @success="$message({type:'success', message:'成功拷贝到粘贴板'})"></i>
                                    {{scope.row.path}}
                                  </span>
                                </template>
                        </el-table-column> 
					          <el-table-column prop="pubStart" label="推流" min-width="120"></el-table-column>
                    <el-table-column prop="userTotal" label="在线数" min-width="120"></el-table-column>
                    <el-table-column prop="startAt" label="开始时间" min-width="200" sortable="custom"></el-table-column>
              

                <el-table-column label="操作"  min-width="240" fixed="right">
                    <template slot-scope="scope"  >
                      <div class="btn-group" >
                          <a role="button" class="btn btn-success btn-xs" @click.prevent="ovplay(scope.row)">
                            <i class="fa fa-play-circle"></i> 播放
                           </a>
                       </div>


					            <div class="btn-group" >
                          <a role="button" class="btn btn-info btn-xs" @click.prevent="ovplayflv(scope.row)">
                            <i class="fa fa-play"></i> FLV播放
                          </a>
                      </div>
                      <div class="btn-group" >
                          <a role="button" class="btn btn-info btn-xs" @click.prevent="startrecord(scope.row)">
                            <i class="fa fa-info"></i> 录像
                          </a>
                      </div>
                      <div class="btn-group" >
                          <a role="button" class="btn btn-warning btn-xs" @click.prevent="stoprecord(scope.row)">
                            <i class="fa fa-stop"></i> 停止
                          </a>
                      </div>  
                   
                  </template>
                </el-table-column>  
            </el-table>  
            </div>
            <div class="box-footer clearfix" v-if="total > 0">
                <el-pagination layout="prev,pager,next" class="pull-right" :total="total" :page-size.sync="pageSize" :current-page.sync="currentPage"></el-pagination>
            </div>
        </div>   
                    
    </div>
</template>

<script>
import prettyBytes from "pretty-bytes";

import _ from "lodash";
export default {
  props: {},
  data() {
    return {
	 webpushurl:"https://"+ window.location.hostname+":8802/",
	 webrecordurl:"http://"+ window.location.hostname+":8800/",
      q: "",
      sort: "startAt",
      order: "descending",
      players: [],
      total: 0,
      timer: 0,
      pageSize: 10,
      currentPage: 1
    };
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  },
  mounted() {
    this.$refs["q"].focus();
    this.timer = setInterval(() => {
      this.getPlayers();
    }, 3000);
  },
  watch: {
    q: function(newVal, oldVal) {
      this.doDelaySearch();
    },
    currentPage: function(newVal, oldVal) {
      this.doSearch(newVal);
    }
  },   
  methods: {
    getPlayers() {
      $.get("/stats/playerlist", {
        q: this.q,
        start: (this.currentPage - 1) * this.pageSize,
        limit: this.pageSize,
        sort: this.sort,
        order: this.order
      }).then(data => {
        this.total = data.total;
        this.players = data.rows;
      });
    },
    doSearch(page = 1) {
      var query = {};
      if (this.q) query["q"] = this.q;
      this.$router.replace({
        path: `/players/${page}`,
        query: query
      });
    },
    doDelaySearch: _.debounce(function() {
      this.doSearch();
    }, 500), 
    sortChange(data) {
      this.sort = data.prop;
      this.order = data.order;
      this.getPlayers();
    },
   startrecord(row) {            
     
    },
   stoprecord(row) {            
  
    },
    stopstream(row) {


	  },
    ovplay(row) {
    	//var playarr=row.path.split(":");
		//var pageUrl="/"+playarr[0]+"/?"+row.id;

		//if(playarr[0]=="ovplayx"){
		//	 pageUrl="/ovplayx/?"+row.id;
		//} 
		
		var ahost = window.location.host.split(":");
		var ip=ahost[0];
	//	var pageUrl="http://w.ovmeet.com:2080/ovplayx/?"+ip+":8801"+row.id;	
		var pageUrl="/ovplayw/?"+ip+":8802"+row.id;	
		var innerWidth=760;
		var innerHeight=580;
		var screenWidth = screen.availWidth;
		var screenHeight = screen.availHeight;
		var width = screenWidth;
		var height = screenHeight;
		
		if(innerWidth < 1){
			width = screenWidth * innerWidth;
			screenWidth = (screen.availWidth - width)/2;
		}else{
			width = innerWidth;
			screenWidth = (screen.availWidth - innerWidth)/2;
		}
		if(innerHeight < 1){
			height = screenHeight * innerHeight;
			screenHeight = (screen.availHeight - height)/2;
		}else{
			height = innerHeight;
			screenHeight = (screen.availHeight - innerHeight)/2;
		}
		window.open(pageUrl, "", "left=" + screenWidth + ",top=" + screenHeight +",width=" + width + ",height=" + height + ",resizable=no,scrollbars=no,status=no,toolbar=no,menubar=no,location=no");
    },
    ovplayflv(row) {
    	//var playarr=row.path.split(":");
		var ahost = window.location.host.split(":");
		var ip=ahost[0];
		var pageUrl="http://w.ovmeet.com:2080/ovplayerflv/?"+ip+":8801"+row.id;
   	//var pageUrl="/ovplayflv/?"+ip+":8801"+row.id;
		var innerWidth=760;
		var innerHeight=580;
		var screenWidth = screen.availWidth;
		var screenHeight = screen.availHeight;
		var width = screenWidth;
		var height = screenHeight;
		
		if(innerWidth < 1){
			width = screenWidth * innerWidth;
			screenWidth = (screen.availWidth - width)/2;
		}else{
			width = innerWidth;
			screenWidth = (screen.availWidth - innerWidth)/2;
		}
		if(innerHeight < 1){
			height = screenHeight * innerHeight;
			screenHeight = (screen.availHeight - height)/2;
		}else{
			height = innerHeight;
			screenHeight = (screen.availHeight - innerHeight)/2;
		}
		window.open(pageUrl, "", "left=" + screenWidth + ",top=" + screenHeight +",width=" + width + ",height=" + height + ",resizable=no,scrollbars=no,status=no,toolbar=no,menubar=no,location=no");
    },
    formatBytes(row, col, val) {
      if (val == undefined) return "-";
      return prettyBytes(val);
    }
  },
 
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.q = to.query.q || "";
      vm.currentPage = parseInt(to.params.page) || 1;
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.$nextTick(() => {
      this.q = to.query.q || "";
      this.currentPage = parseInt(to.params.page) || 1;
      this.players = [];
      this.getPlayers();
    });
  }
};
</script>

