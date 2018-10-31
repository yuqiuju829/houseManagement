<template>
    <div>
        <!-- 头部 -->
        <header>
            <el-button type="primary" plain @click="goBack">返回</el-button>
            <p>报盘经纪人：<span>{{broker?broker:'无'}}</span></p>
            <p>经纪人电话：<span>{{brokerTel?brokerTel:'无'}}</span></p>
            <p>录入时间：<span>{{entryTime?entryTime:'无'}}</span></p>
            <p class="grounding" v-if="isGround">上架中</p>
            <p class="undercarriaging" v-if="isUnder">下架中</p>
        </header>
        <!-- 头部 -->
        <!-- 内容 -->
        <div class="content">
            <div class="buttons">
                <el-button type="success" @click="top">置顶</el-button>
                <el-button type="warning" @click="edit">编辑</el-button>
            </div>
            <div class="basic" style="padding-top:20px">
                <h4>房屋基本资料</h4>
                <ul>
                    <li>
                        <p>城市：<span>{{city?city:'无'}}</span></p>
                    </li>
                    <li>
                        <p>区域：<span>{{area?area:'无'}}</span></p>
                    </li>
                    <li>
                        <p>楼盘名称：<span>{{houseName?houseName:'无'}}</span></p>
                    </li>
                    <li>
                        <p>当前状态：<span>{{currentStatu?currentStatu:'无'}}</span></p>
                    </li>
                     <li>
                        <p>开发商：<span>{{developer?developer:"无"}}</span></p>
                    </li>
                    <li>
                        <p>环线位置：<span>{{address?address:'无'}}</span></p>
                    </li>
                    <li>
                        <p>占地面积：<span>{{cover?cover:'0'}} m<sup>2</sup></span></p>
                    </li>
                    <li>
                        <p>建筑面积：<span>{{buildUp?buildUp:'0'}} m<sup>2</sup></span></p>
                    </li>
                    <li>
                        <p>楼盘性质：<span>{{property?property:'无'}}</span></p>
                    </li>
                    <li>
                        <p>产权年限：<span>{{limit?limit:'0'}} 年</span></p>
                    </li>
                    <li>
                        <p>容积率：<span>{{plot?plot:'0'}} %</span></p>
                    </li>
                    <li>
                        <p>绿化率：<span>{{green?green:'0'}} %</span></p>
                    </li>
                    <li>
                        <p>楼栋总数：<span>{{building?building:'0'}} 栋</span></p>
                    </li>
                    <li>
                        <p>总户数：<span>{{totalHolds?totalHolds:'0'}} 户</span></p>
                    </li>
                    <li>
                        <p>楼层状况：<span>{{floorStatu?floorStatu:'无'}}</span></p>
                    </li>
                    <li>
                        <p>户型面积：<span>{{unitArea?unitArea:'0'}} m<sup>2</sup></span></p>
                    </li>
                    <li>
                        <p>地铁交通：<span>{{transtion?transtion:'无'}}</span></p>
                    </li>
                    <li>
                        <p>楼盘位置：<span>{{location?location:'无'}}</span></p>
                    </li>
                    <li>
                        <p>佣金比例：<span>{{commision?commision:'无'}}</span></p>
                    </li>
                    <li>
                        <p>标签：<span>{{tag?tag:'无'}}</span></p>
                    </li>
                </ul>
            </div>
            <div class="basic attach">
                <h4>周边配置</h4>
                <p class="intro">{{match?match:'无'}}</p>
            </div>
            <div class="basic attach">
                <h4>项目简介</h4>
                <p class="intro">{{proIntro?proIntro:'无'}}</p>
            </div>
            <div class=" pic">
                <h4>轮播图</h4>
                <ul>
                    <p v-if="this.sows.length == 0">暂无数据</p>
                    <li v-for="(item,index) in sows" :key="index">
                        <img :src="item.sowingImg" alt="">
                    </li>
                </ul>
            </div>
            <div class=" pic">
                <h4>概况图</h4>
                <ul>
                    <p v-if="this.surveies.length == 0">暂无数据</p>
                    <li v-for="(item,index) in surveies" :key="index">
                        <img :src="item.surveyImg" alt="">
                    </li>
                </ul>
            </div>
            <div class=" pic">
                <h4>户型图</h4>
                <ul>
                    <p v-if="this.types.length == 0">暂无数据</p>
                    <li v-for="(item,index) in types" :key="index">
                        <img :src="item.typeImg" alt="">
                    </li>
                </ul>
            </div>
            <div class="basic record">
                <h4>操作记录</h4>
                <div class="houseTable">
                    <el-table
                        :data="recordData"
                        border
                        style="width: 100%">
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
            <div class="basic attach">
                <ul>
                    <li>
                        <p>录入员工：<span>{{entryPerson?entryPerson:'无'}}</span></p>
                    </li>
                    <li>
                        <p>电话：<span>{{phone?phone:'无'}}</span></p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 内容 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            broker:'',//报盘经纪人
            brokerTel:'',//经纪人电话
            entryTime:'',//录入时间
            city:'',//城市
            area:'',//区域
            houseName:'',//楼盘名称
            currentStatu:'',//当前状态
            developer:'',//开发商
            address:'',//环线位置
            cover:'',//占地面积
            buildUp:'',//建筑面积
            property:'',//楼盘性质
            limit:'',//产权年限
            plot:'',//容积率
            green:'',//绿化率
            building:'',//楼栋总数
            totalHolds:'',//总户数
            floorStatu:'',//楼层状况
            unitArea:'',//房型面积
            transtion:'',//地铁交通
            location:'',//楼盘位置
            commision:'',//佣金比例
            tag:'',//标签
            match:'',//周边配置
            proIntro:'',//项目简介
            sows:[
                {
                    sowingImg:'../../../static/images/a1.png'
                }
            ],//轮播图
            surveies:[
                {
                    surveyImg:'../../../static/images/a1.png'
                }
            ],//概况图
            types:[
                {
                    typeImg:'../../../static/images/a1.png'
                }
            ],//户型图
            entryPerson:'',//录入员工
            phone:'',//电话
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
        this.getNewDetail()
    },
    methods:{
        getNewDetail(){
            console.log('获取新盘详情')
        },
        // 返回
        goBack(){
            this.$router.go(-1)
        },
        // 分页
        handleCurrentChange(){
            console.log('sdfsd')
        },
        // 置顶
        top(){
            alert("确定将此置顶？")
        },
        // 编辑
        edit(){
            this.$router.push({
                path:'/modifyEdit'
            })
        }
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
header p:last-of-type{
    margin-right: 100px;
}
.content{
    width:100%;
}
.buttons{
    width:15%;
    float: right;
    display: flex;
    justify-content: space-between;
    margin-right: 100px;
}
.basic{
    width:90%;
    margin: auto ;
    padding:0 20px;
    box-sizing: border-box;
}
.pic{
    width:90%;
    margin: auto;
    margin-bottom: 20px;
    padding:0 20px;
    box-sizing: border-box;
}
.pic ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
.pic p{
    width:100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
}
.pic ul li{
    width:33%;
}
.pic img{
    width:300px;
    height: 200px;
    margin-top: 20px;
}
.house_basic{
    width:100%;
    display: flex;
    justify-content: space-between;
}
h4{
    font-size: 24px;
    margin: 20px 0;
}
h4:first-of-type{
    margin-top: 50px;
}
.grounding,.undercarriaging{
    width:70px;
    height: 40px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
}
.grounding{
    background-color: #c23a;
}
.undercarriaging{
    background-color: #5b5b5b;
}
.basic ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap   
}
.basic>ul>li{
    width:33%;
    height:50px
}
.real ul{
    display: flex;
    justify-content: space-around;
}
.real ul li{
    width:33%;
    position: relative;

}
.real img{
    width:300px;
    height: 200px;
}
.house_name{
    width:60%;
    height: 50px;
    position: absolute;
    top:0
}
.release{
    width:60%;
    height: 50px;
    position: absolute;
    bottom: 0;
}
.basic p{
    font-size:16px;
}
.houseTable{
    /* border: 1px solid #5b5b5b;
    box-sizing: border-box; */
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
