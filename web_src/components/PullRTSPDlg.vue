<template>
    <FormDlg title="编辑拉流" @hide="onHide" @show="onShow" @submit="onSubmit" @pull="onPull" ref="dlg" :disabled="errors.any() || bLoading">     
        <div :class="['form-group', { 'has-error': errors.has('name')}]">
            <label for="input-name" class="col-sm-3 control-label"><span class="text-red">*</span>名称说明</label>
            <div class="col-sm-8">
                <input type="text" id="input-name" class="form-control" name="name" data-vv-as="名称说明" v-validate="'required'" v-model.trim="form.name">
                <span class="help-block">{{errors.first('name')}}</span>
            </div>
        </div>      
        <div :class="['form-group', { 'has-error': errors.has('source')}]">
            <label for="input-source" class="col-sm-3 control-label"><span class="text-red">*</span>源地址</label>
            <div class="col-sm-8">
                <input type="text" id="input-source" class="form-control" name="source" data-vv-as="源地址" v-validate="'required'" v-model.trim="form.source" placeholder="rtmp:// | rtsp://">
                <span class="help-block">{{errors.first('source')}}</span>
            </div>
        </div>                   
        <div :class="['form-group', { 'has-error': errors.has('custompath')}]">
            <label for="input-custompath" class="col-sm-3 control-label"><span class="text-red">*</span>目标地址</label>
            <div class="col-sm-8">
                <input type="text" id="input-custompath" class="form-control" name="custompath" data-vv-as="目标地址" v-model.trim="form.custompath" placeholder="rtmp://127.0.0.1:1937/live/1111">
                <span class="help-block">{{errors.first('custompath')}}</span>
            </div>
        </div> 
        <div class="form-group">
            <label for="input-transport" class="col-sm-3 control-label">断线重连</label>
            <div class="col-sm-8">
                <el-radio-group id="input-loopstr" v-model.trim="form.loopstr" size="mini">
                    <el-radio-button label="否"></el-radio-button>
                    <el-radio-button label="是"></el-radio-button> 
                </el-radio-group>
            </div>
        </div>
        <!-- 
        <div :class="['form-group', { 'has-error': errors.has('onVif')}]">
            <label for="input-onVif" class="col-sm-3 control-label">ONVIF地址</label>
            <div class="col-sm-8">
                <input type="text" id="input-onVif" class="form-control" name="onVif" data-vv-as="ONVIF地址" v-model.trim="form.onVif" placeholder="{ip}|{port}|{username}|{password}">
                <span class="help-block">{{errors.first('onVif')}}</span>
            </div>
        </div> 

        <div class="form-group">
            <label for="input-transport" class="col-sm-3 control-label">协议类型</label>
            <div class="col-sm-8">
                <el-radio-group id="input-transport" v-model.trim="form.transType" size="mini">
                    <el-radio-button label="RTMP"></el-radio-button>
                    <el-radio-button label="HTTP"></el-radio-button> 
                </el-radio-group>
            </div>
        </div>


        <div :class="['form-group', { 'has-error': errors.has('idleTimeout')}]">
            <label for="input-idle-timeout" class="col-sm-3 control-label">空闲超时(秒)</label>
            <div class="col-sm-8">
                <input type="text" id="input-idle-timeout" class="form-control" name="idleTimeout" data-vv-as="空闲超时" v-validate="'numeric'" v-model.trim="form.idleTimeout" placeholder="默认使用系统配置">
                <span class="help-block">{{errors.first('idleTimeout')}}</span>
            </div>
        </div>   
        <div :class="['form-group', { 'has-error': errors.has('heartbeatInterval')}]">
            <label for="input-heartbeat-interval" class="col-sm-3 control-label">心跳间隔(秒)</label>
            <div class="col-sm-8">
                <input type="text" id="input-heartbeat-interval" class="form-control" name="heartbeatInterval" data-vv-as="心跳间隔" v-validate="'numeric'" v-model.trim="form.heartbeatInterval" placeholder="默认使用系统配置">
                <span class="help-block">{{errors.first('heartbeatInterval')}}</span>
            </div>
        </div>           
		 -->
    </FormDlg>
</template>

<script>
import Vue from 'vue'
import FormDlg from 'components/FormDlg.vue'
import $ from 'jquery'

export default {
    data() {
        return {
            bLoading: false,
            form: this.defForm()
        }
    },
    components: {
        FormDlg
    },
    methods: {
        defForm() {
            return {
				id: '',
				name: '',
                source: '',
                custompath: 'rtmp://127.0.0.1:1937/live/'+Math.random().toString(36).slice(-6),
                onVif: '',
                transType: 'RTMP',
                loopstr: '否',
                auto:'1',
                idleTimeout: '',
                heartbeatInterval: ''
            }
        },
        onHide() {
            this.errors.clear();
            this.form = this.defForm();
        },
        onShow() {
            document.querySelector(`[name=custompath]`).focus();
        },
        async onPull() {
            var ok = await this.$validator.validateAll();
            if(!ok) {
                var e = this.errors.items[0];
                this.$message({
                    type: 'error',
                    message: e.msg
                });
                document.querySelector(`[name=${e.field}]`).focus();
                return;
            }
            //this.bLoading = true;
              
                if (!this.form.custompath.startsWith('rtmp://127.0.0.1')){
                    alert("内部转发流只能转本机！");
                    return;
                }
                let info = this.form.custompath.split("/");
                if (info.length<5){
                    alert("流格式错误参考：rtmp://127.0.0.1:1937/live/1111");
                    return;
                }
                 //console.log(info);
                let wurl='http://'+window.location.hostname+':8801/index/api/addStreamProxy?vhost=__defaultVhost__&app='+info[info.length-2]+'&stream='+info[info.length-1]+'&enable_rtsp=0&enable_rtmp=1&url='+this.form.source+'&secret=ovsyunlive-d9eb2d1925xx';
               // console.log(wurl);
                $.ajax({
                    url:wurl,
                    type: 'GET',
                    dataType: 'json',
                    ContentType: 'application/json; charset=utf-8'}).success(data => {
                        //console.log(data);
                       // alert("测试："+data.code);
						this.$refs['dlg'].hide();
                        this.$emit('submit');
	                }).error((err) => {
                        //console.log('error: ', err);  
                         alert("错误："+JSON.stringify(err));
                    }).always(() => {
                        this.bLoading = false;
                });
 

        },
        async onSubmit() {
            var ok = await this.$validator.validateAll();
            if(!ok) {
                var e = this.errors.items[0];
                this.$message({
                    type: 'error',
                    message: e.msg
                });
                document.querySelector(`[name=${e.field}]`).focus();
                return;
            }
            //this.bLoading = true;
			if(this.form.id!=''){
				$.get('/api/push/del/'+this.form.id).then(data => {
                    let loop=0;
                    if(this.form.loopstr=="是"){
                        loop=1;
                    }
                    let info = {
                        "name": this.form.name,
                        "custompath": this.form.custompath,
                        "loop":loop,
                        "tasks": [
                            {
                                "explain": this.form.name,
                                "transtype": "RTMP",
                                "src": this.form.source
                            }
                        ]
                    }
                    $.ajax({
                        data: info,
                        url:'/api/push/add',
                        type: 'POST',
                        dataType: 'json',
                        ContentType: 'application/json; charset=utf-8'}).success(data => {
                            //console.log(data);
                            //alert("测试："+data.code);
                            this.$refs['dlg'].hide();
                            this.$emit('submit');
                        }).error((err) => {
                            //console.log('error: ', err);  
                            alert("错误："+JSON.stringify(err));
                        }).always(() => {
                            this.bLoading = false;
                    });
				})
			}else{
                let loop=0;
                if(this.form.loopstr=="是"){
                    loop=1;
                }
                let info = {
                    "name": this.form.name,
                    "custompath": this.form.custompath,
                    "loop":loop,
                    "auto":1,
                    "tasks": [
                        {
                            "explain": this.form.name,
                            "transtype": "RTMP",
                            "src": this.form.source
                        }
                    ]
                }
                 //console.log(info);
                $.ajax({
                    data: info,
                    url:'/api/push/add',
                    type: 'POST',
                    dataType: 'json',
                    ContentType: 'application/json; charset=utf-8'}).success(data => {
                        //console.log(data);
                       // alert("测试："+data.code);
						this.$refs['dlg'].hide();
                        this.$emit('submit');
	                }).error((err) => {
                        //console.log('error: ', err);  
                         alert("错误："+JSON.stringify(err));
                    }).always(() => {
                        this.bLoading = false;
                });
 
			}
        },
        show(data) {
            this.errors.clear();
			
            if(data) { 
				var fdata={};
				fdata.id=data.id;
				fdata.name=data.name;
				fdata.source=data.source;
				fdata.loopstr=data.loopstr;
				fdata.custompath=data.custompath;
				fdata.onVif=data.onvif;
                fdata.auto=data.auto;
                Object.assign(this.form, fdata);
            }
            this.$refs['dlg'].show();
        }
    }
}
</script>
