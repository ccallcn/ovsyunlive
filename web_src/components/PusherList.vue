<template>
    <div class="container-fluid no-padding">
        <div class="alert alert-success alert-dismissible">
            <small>
                <strong><i class="fa fa-info-circle"></i> 提示 : </strong> 
               拉流支持RTMP,WS 拉流支持RTMP,RTSP，
                <span class="push-url-format">拉流URL规则: rtmp://{ip}:{port}/{app}/{id}</span> ，
                例如 : rtmp://m.ovsyun.com:1937/live/1111 ，
				<strong><i class="fa fa-info-circle"></i> 分发到远程服务器的流不支持被动拉流 </strong> 
            </small>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div> 

        <div class="box box-success">
            <div class="box-header">
                <h4 class="text-success text-center">拉流列表</h4>           
                <form class="form-inline">
                  <div class="form-group">
                      <button type="button" class="btn btn-sm btn-success" @click.prevent="$refs['pullRTSPDlg'].show()"><i class="fa fa-plus"></i> 拉流分发</button>
                  </div>                  
                  <div class="form-group pull-right">
                      <div class="input-group">
                          <input type="text" class="form-control" placeholder="搜索目标地址" v-model.trim="q" @keydown.enter.prevent ref="q">
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
                <el-table :data="pushers" stripe class="view-list" :default-sort="{prop: 'startAt', order: 'descending'}" @sort-change="sortChange">
                    <el-table-column prop="name" label="名称" min-width="100" ></el-table-column>
					<!--
                    <el-table-column prop="id" label="ID" min-width="100"></el-table-column>
                -->
                    <el-table-column label="源地址" min-width="220" show-overflow-tooltip>
                      <template slot-scope="scope">
                        <span v-if="scope.row.source">
                          <i class="fa fa-copy" role="button" v-clipboard="scope.row.source" title="点击拷贝" @success="$message({type:'success', message:'成功拷贝到粘贴板'})"></i>
                          {{scope.row.source}}
                          </span>
                        <span v-else>-</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="目标地址" min-width="220" show-overflow-tooltip>
                      <template slot-scope="scope">
                        <span>
                          <i class="fa fa-copy" role="button" v-clipboard="scope.row.custompath" title="点击拷贝" @success="$message({type:'success', message:'成功拷贝到粘贴板'})"></i>
                          {{scope.row.custompath}}
                          </span>
                      </template>
                    </el-table-column>
                    				<!--
                    <el-table-column label="ONVIF地址" min-width="160" show-overflow-tooltip>
                      <template slot-scope="scope">
                        <span>
                          <i class="fa fa-copy" role="button" v-clipboard="scope.row.onvif" title="点击拷贝" @success="$message({type:'success', message:'成功拷贝到粘贴板'})"></i>
                          {{scope.row.onvif}}
                          </span>
                      </template>
                    </el-table-column> 
                       -->
                    <el-table-column prop="transType" label="传输类型" min-width="80"></el-table-column>
					          <el-table-column prop="loopstr" label="断线重连" min-width="80"></el-table-column> 
                    <el-table-column prop="startAt" label="修改时间" min-width="200" sortable="custom"></el-table-column>
                    <el-table-column label="操作" min-width="140" fixed="right">
                        <template slot-scope="scope"  >
                            <div class="btn-group" v-if="scope.row.auto==1">
                                <a role="button" class="btn btn-warning btn-xs" @click.prevent="stop(scope.row)">
                                  <i class="fa fa-stop"></i> 停止
                                </a>
                            </div>
                            <div class="btn-group" v-if="scope.row.auto==0">
                                <a role="button" class="btn btn-success btn-xs" @click.prevent="restart(scope.row)">
                                  <i class="fa fa-play"></i> 启动
                                </a>
							              </div>
                            <div class="btn-group" >
                                <a role="button" class="btn btn-info btn-xs" @click.prevent="update(scope.row)">
                                  <i class="fa fa-edit"></i> 编缉
                                </a>
                            </div>
                            <div class="btn-group">
                                <a role="button" class="btn btn-xs btn-danger" @click.prevent="del(scope.row)">
                                  <i class="fa fa-delicious"></i> 删除
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
        <PullRTSPDlg ref="pullRTSPDlg" @submit="getPushers"></PullRTSPDlg>          
    </div>
</template>

<script>
import PullRTSPDlg from "components/PullRTSPDlg.vue"
import prettyBytes from "pretty-bytes";

import _ from "lodash";
export default {
  components: {
    PullRTSPDlg
  },
  props: {},
  data() {
    return {
      q: "",
      sort: "startAt",
      order: "descending",
      pushers: [],
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
    // this.$refs["q"].focus();
    this.timer = setInterval(() => {
      this.getPushers();
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
    getPushers() {
      $.get("/api/push/list").then(data => {
        let startrow=(this.currentPage -1) * this.pageSize;
        let endrow=startrow+this.pageSize;
        this.total=0;
        this.pushers.length=0;
        
        if(data){
          this.total = data.total;
          //console.log(startrow,"->",endrow,"->",this.currentPage,"->",this.q);
          let daar=JSON.parse(data)
          if(daar.length<1){
            this.pushers = [];
            return;
          }
          for(let j = 0,len=daar.length; j < len; j++) {
            if(j>=startrow && j<endrow){
              let pushdata={};
              //console.log(JSON.stringify(daar[j]));
                    pushdata.name= daar[j].name;    // 任务ID
                    pushdata.id= daar[j].id;// 任务ID
                    if(daar[j].loop==1){
                      pushdata.loopstr= "是";
                    }else{
                      pushdata.loopstr= "否"; 
                    }
                    pushdata.auto= daar[j].auto;// 任务状态，大于0表示正在执行中
                    pushdata.source= daar[j].tasks[0].src;
                    pushdata.custompath= daar[j].custompath; 
                    pushdata.onvif= "";
                    pushdata.transType=daar[j].tasks[0].transtype;
                    pushdata.startAt= daar[j].ctime;
              if(this.q){

                if(pushdata.custompath.indexOf(this.q)>0){
                 // console.log(startrow,"->",endrow,"->",this.currentPage,"->",this.q);
                  this.pushers.push(pushdata);
                } 
              }else{
                this.pushers.push(pushdata);
              }    
              
            }
            //this.total++;
          }
         
        }
        //this.total = data.total;
        //this.pushers = data.rows;
      });
    },
    doSearch(page = 1) {
      var query = {};
      if (this.q) query["q"] = this.q;
      this.getPushers();
    },
    doDelaySearch: _.debounce(function() {
      this.doSearch();
    }, 500),    
    sortChange(data) {
      this.sort = data.prop;
      this.order = data.order;
      this.getPushers();
    },
    formatBytes(row, col, val) {
      if (val == undefined) return "-";
      return prettyBytes(val);
    },
    restart(row) {
      this.$confirm(`确认启动 ${row.custompath} ?`, "提示").then(() => {
        $.get("/api/push/start/"+row.id).then(data => {
          this.getPushers();
        })
      }).catch(() => {});
    },
    stop(row) {
      this.$confirm(`确认停止 ${row.custompath} ?`, "提示").then(() => {
        $.get("/api/push/stop/"+row.id).then(data => {
          this.getPushers();
        })
      }).catch(() => {});
    },
    update(row) { 
      this.$refs['pullRTSPDlg'].show(row);
    },
    del(row) {
      this.$confirm(`确认删除 ${row.custompath} ?`, "提示").then(() => {
       $.get('/api/push/del/'+ row.id).then(data => {
          this.getPushers();
        })
      }).catch(() => {});
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
      this.pushers = [];
      this.getPushers();
    });
  }
};
</script>

