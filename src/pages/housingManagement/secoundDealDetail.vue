<template>
    <div>
        <!-- 头部 -->
        <header>
            <el-button type="primary" plain @click="goBack">返回</el-button>
            <p>录入时间：<span>{{entryTime?entryTime:'无'}}</span></p>
        </header>
        <!-- 头部 -->
        <!-- 内容 -->
        <div class="content">
            <div class="basic" style="padding-top:20px">
                <div class="house_basic">
                    <h4>房屋基本资料</h4>
                    <p class="grounding" v-if="isGround">上架中</p>
                    <p class="undercarriaging" v-if="isUnder">下架中</p>
                </div>
                <ul>
                    <li>
                        <p>城市：<span>{{city?city:'无'}}</span></p>
                    </li>
                    <li>
                        <p>区域：<span>{{area?area:'无'}}</span></p>
                    </li>
                    <li>
                        <p>标题：<span>{{title?title:'无'}}</span></p>
                    </li>
                    <li>
                        <p>楼盘名称：<span>{{houseName?houseName:'无'}}</span></p>
                    </li>
                    <li>
                        <p>面积：<span>{{acreage?acreage:'0'}} m<sup>2</sup></span></p>
                    </li>
                    <li>
                        <p>总价：<span>{{total?total:'0'}} 万</span></p>
                    </li>
                    <li>
                        <p>单价：<span>{{univalent?univalent:'0'}} 元</span></p>
                    </li>
                    <li>
                        <p>楼栋：<span>{{building?building:'0'}} 栋</span></p>
                    </li>
                    <li>
                        <p>单元：<span>{{unit?unit:'0'}} 单元</span></p>
                    </li>
                    <li>
                        <p>楼层：<span>{{floor?floor:'0'}} 层</span></p>
                    </li>
                    <li>
                        <p>房号：<span>{{room?room:'0'}} 号</span></p>
                    </li>
                    <li>
                        <p>房型：<span>{{houseType?houseType:"无"}}</span></p>
                    </li>
                    <li>
                        <p>装修：<span>{{fitment?fitment:'无'}}</span></p>
                    </li>
                    <li>
                        <p>朝向：<span>{{directe?directe:'无'}}</span></p>
                    </li>
                    <li>
                        <p>年代：<span>{{years?years:'0'}} 年</span></p>
                    </li>
                    <li>
                        <p>标签：<span>{{tag?tag:'无'}}</span></p>
                    </li>
                </ul>
            </div>
            <div class="basic attach">
                <h4>房屋介绍</h4>
                <p class="intro">{{houseIntro?houseIntro:'无'}}</p>
            </div>
            <div class="basic attach">
                <h4>经纪人标语</h4>
                <p class="intro">{{slogan?slogan:'无'}}</p>
            </div>
            <div class="real">
                <h4>实勘</h4>
                <el-row id="myUl">
                    <el-col :span="7" id="myLi" v-for="(item,index) in pics" :key="index">
                        <p class="house_name">{{item.title}}</p>
                        <img src="../../../static/images/a1.png" alt="">
                        <p class="release">发布时间：<span>{{item.releaseTime}}</span></p>
                    </el-col>
                </el-row>
            </div>
            <div class="basic attach">
                <h4>房东信息</h4>
                <ul>
                    <li>
                        <p>房东姓名：<span>{{landlord?landlord:'无'}}</span></p>
                    </li>
                    <li>
                        <p>房东电话：<span>{{landlordTel?landlordTel:'无'}}</span></p>
                    </li>
                </ul>
            </div>
             <div class="basic attach">
                <h4>责任经纪人</h4>
                <ul>
                    <li>
                        <p>经纪人姓名：<span>{{broker?broker:'无'}}</span></p>
                    </li>
                    <li>
                        <p>经纪人电话：<span>{{brokerTel?brokerTel:'无'}}</span></p>
                    </li>
                </ul>
            </div>
            <div class="basic record">
                <h4>操作记录</h4>
                <div class="houseTable">
                    <el-table
                        :data="recordData"
                        border
                        style="width: 99%;margin:10px auto;">
                        <el-table-column
                            prop="time"
                            label="操作时间">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="员工">
                        </el-table-column>
                        <el-table-column
                            prop="tel"
                            label="电话">
                        </el-table-column>
                        <el-table-column
                            prop="status"
                            label="初始状态">
                        </el-table-column>
                        <el-table-column
                            prop="currentStatus"
                            label="当前状态">
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pageSize"
                        layout="total, prev, pager, next, jumper"
                        :total="total">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
        <!-- 内容 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            entryTime:'',//录入时间
            city:'',//城市
            area:'',//区域
            title:'',//标题
            houseName:'',//楼盘名称
            acreage:'',//面积
            total:'',//总价
            univalent:'',//单价
            building:'',//楼栋
            unit:"",//单元
            floor:'',//楼层
            room:'',//房号
            houseType:'',//房型
            fitment:'',//装修
            directe:'',//朝向
            years:'',//年代
            tag:'',//标签
            houseIntro:'',//房屋介绍
            slogan:'',//经纪人标语
            landlord:'',//房东
            landlordTel:'',//房东电话
            broker:'',//经纪人姓名
            brokerTel:'',//经纪人电话
            pics:[
                {
                    title:'恒大',
                    releaseTime:'2018-10-23'
                }
            ],
            isGround:true,
            isUnder:false,
            recordData:[
                {
                    time:'2018-10-16',
                    name:'黄大喵',
                    tel:'15983735209',
                    status:'上架中',
                    currentStatus:'下架中',
                }
            ],
            currentPage:1,
            pageSize:10,
            total:30,
        }
    },
    mounted(){
        this.getSecoundDetail();
    },
    methods:{
        getSecoundDetail(){
            console.log('获取二手房买卖、租赁详情')
        },
        // 返回
        goBack(){
            this.$router.go(-1)
        },
        // 分页
        handleCurrentChange(){
            console.log('sdfsd')
        },
    }
}
</script>

<style scoped>
header{
    width:100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}
.el-button--primary{
    height: 40px;
    margin-left: 100px;
}
header p{
    margin-right: 100px;
}
.content{
    width:100%;
}
.basic,.real{
    width:90%;
    margin: auto ;
    padding:0 20px;
    box-sizing: border-box;
}
.house_basic{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h4{
    font-size: 24px;
    margin: 20px 0;
}
.grounding,.undercarriaging{
    width:100px;
    height: 40px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
}
.grounding{
    background-color: #67c23a;
}
.undercarriaging{
    background-color: #5b5b5b;
}
.basic ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap   
}
.basic ul li{
    width:33%;
    height:50px
}
#myUl{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}

#myLi{
    width:30%;
    margin:10px;
    position: relative;
}
#myUl img{
    width:100%;
    height: 300px;
}
.house_name{
    width:100%;
    height: 50px;
    position: absolute;
    top:0;
    text-align: center;
    line-height: 50px;
}
.release{
    width:100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    line-height: 50px;
    text-align: center;
    background-color:rgba(256,256,256,.5);
}
.basic p{
    font-size:16px;
}
.houseTable{
    border: 1px solid #5b5b5b;
    box-sizing: border-box;
    margin-bottom: 20px;
}
.houseTable p{
    font-size: 18px;
    margin:20px;
}
.button{
    width:100%;
    height: 90px;
}
.balck{
    width:95%;
    margin-left:10px;
    font-size:16px;
    outline:none;
    padding-left: 20px;
    box-sizing: border-box;
}
.record{
    padding-bottom: 50px;
}
.block{
    margin: 20px 0
}
.intro{
    font-size: 18px;
    text-indent: 24px;
}
</style>
