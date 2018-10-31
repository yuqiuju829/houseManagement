<template>
    <div>
        <!-- 头部 -->
        <header>
            <el-button type="primary" plain @click="goBack">返回</el-button>
            <div class="personnel">
                <p>操作员工：<span>{{staff?staff:'无'}}</span></p>
                <p>电话：<span>{{staffTel?staffTel:'无'}}</span></p>
            </div>
        </header>
        <!-- 头部 -->
        <!-- 内容 -->
        <div class="content">
            <div class="basic" style="padding-top:20px">
                <h4>基本资料</h4>
                <ul>
                    <li>
                        <p>姓名：<span>{{name?name:'无'}}</span></p>
                    </li>
                    <li>
                        <p>电话：<span>{{tel?tel:'无'}}</span></p>
                    </li>
                    <li>
                        <p>推荐人：<span>{{referee?referee:'无'}}</span></p>
                    </li>
                    <li>
                        <p>性别：<span>{{sex?sex:'无'}}</span></p>
                    </li>
                    <li>
                        <p>年龄：<span>{{age?age:'0'}} 岁</span></p>
                    </li>
                    <li>
                        <p>主业务城市：<span>{{city?city:'无'}}</span></p>
                    </li>
                    <li>
                        <p>主业务区域：<span>{{area?area:'无'}}</span></p>
                    </li>
                    <li>
                        <p>经纪人总业绩：<span>{{totalAmount?totalAmount:'0'}} 元</span></p>
                    </li>
                    <li>
                        <p>未结业绩：<span>{{unfinished?unfinished:'0'}} 元</span></p>
                    </li>
                    <li>
                        <p>共计奖金总额：<span>{{totalBonus?totalBonus:'0'}} 元</span></p>
                    </li>
                    <li>
                        <p>当前奖金余额：<span>{{currentBonus?currentBonus:'0'}} 元</span></p>
                    </li>
                </ul>
            </div>
            <div class="basic attach">
                <h4>附加资料</h4>
                <ul>
                    <li>
                        <p>从业年限：<span>{{limitYear?limitYear:'0'}} 年</span></p>
                    </li>
                    <li>
                        <p>个人简介：<span>{{personalIntro?personalIntro:'无'}}</span></p>
                    </li>
                    <li>
                        <p>经纪人标语：<span>{{slogan?slogan:'无'}}</span></p>
                    </li>
                </ul>
            </div>
            <div class="basic house">
                <h4>房源资料</h4>
                <div class="houseTable">
                    <p>房源总量：<span>{{hTotal?hTotal:'0'}} 套</span></p>
                    <el-table
                        :data="houseData"
                        border
                        style="width: 99%;margin:auto">
                        <el-table-column
                            prop="aim"
                            label="房源编号">
                        </el-table-column>
                        <el-table-column
                            prop="city"
                            label="城市">
                        </el-table-column>
                        <el-table-column
                            prop="houseName"
                            label="楼盘名称">
                        </el-table-column>
                        <el-table-column
                            prop="acreage"
                            label="面积">
                        </el-table-column>
                        <el-table-column
                            prop="price"
                            label="价格">
                        </el-table-column>
                        <el-table-column
                            prop="houseProperty"
                            label="房屋性质">
                        </el-table-column>
                        <el-table-column
                            prop="status"
                            label="状态">
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination
                        @current-change="handleHouseChange"
                        :current-page="hCurrentPage"
                        :page-size="hPageSize"
                        layout="total, prev, pager, next, jumper"
                        :total="hTotal">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="basic reply">
                <h4>报单客户</h4>
                <div class="houseTable">
                    <p>报单总量：<span>{{cTotal?cTotal:'0'}} 单</span></p>
                    <el-table
                        :data="customData"
                        border
                        style="width: 99%;margin:auto">
                        <el-table-column
                            prop="time"
                            label="时间">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="客户姓名">
                        </el-table-column>
                        <el-table-column
                            prop="tel"
                            label="客户电话">
                        </el-table-column>
                        <el-table-column
                            prop="intentCity"
                            label="意向城市">
                        </el-table-column>
                        <el-table-column
                            prop="intentArea"
                            label="意向区域">
                        </el-table-column>
                        <el-table-column
                            prop="broker"
                            label="合作经纪人">
                        </el-table-column>
                        <el-table-column
                            prop="brokerTel"
                            label="经纪人电话">
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination
                        @current-change="handleReplyChange"
                        :current-page="cCurrentPage"
                        :page-size="cPageSize"
                        layout="total, prev, pager, next, jumper"
                        :total="cTotal">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="basic receipt">
                <h4>接单客户</h4>
                <div class="houseTable">
                    <p>接单总量：<span>{{rTotal?rTotal:'0'}} 单</span></p>
                    <el-table
                        :data="receiptData"
                        border
                        style="width: 99%;margin:auto">
                        <el-table-column
                            prop="time"
                            label="时间">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="客户姓名">
                        </el-table-column>
                        <el-table-column
                            prop="tel"
                            label="客户电话">
                        </el-table-column>
                        <el-table-column
                            prop="intentCity"
                            label="意向城市">
                        </el-table-column>
                        <el-table-column
                            prop="intentArea"
                            label="意向区域">
                        </el-table-column>
                        <el-table-column
                            prop="broker"
                            label="合作经纪人">
                        </el-table-column>
                        <el-table-column
                            prop="brokerTel"
                            label="经纪人电话">
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination
                        @current-change="handleReceiptChange"
                        :current-page="rCurrentPage"
                        :page-size="rPageSize"
                        layout="total, prev, pager, next, jumper"
                        :total="rTotal">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="basic">
                <h4>拉黑原因</h4>
                <p class="reason">{{reason?reason:'无'}}</p>
            </div>
            <div class="button">
               <el-button type="warning" style="float:right;margin:20px 100px 0 0;" @click="toNormal" v-if="isRecover">恢复</el-button> 
               <p class="had" v-if="isRecovered">已恢复</p>
            </div>
        </div>
        <!-- 内容 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            isRecover:true,
            isRecovered:false,
            staff:'',//操作员工
            staffTel:'',//员工电话
            name:'',//姓名
            tel:'',//电话
            referee:'',//推荐人
            sex:'',//性别
            age:'',//年龄
            city:'',//主业务城市
            area:'',//主业务区域
            totalAmount:'',//经纪人总业绩
            unfinished:'',//未结业绩
            totalBonus:'',//共计奖金总额
            currentBonus:'',//当前奖金余额
            limitYear:'',//从业年限
            personalIntro:'',//个人简介
            slogan:'',//经纪人标语
            reason:'',//拉黑原因
            houseData:[],//房源资料
            hCurrentPage:1,
            hPageSize:10,
            hTotal:30,
            customData:[],//报单客户
            cCurrentPage:1,
            cPageSize:10,
            cTotal:30,
            receiptData:[],//接单客户
            rCurrentPage:1,
            rPageSize:10,
            rTotal:30,
        }
    },
    mounted(){
        this.getBlackDetail();
    },
    methods:{
        getBlackDetail(){
            console.log('获取黑名单详情')
        },
        // 返回
        goBack(){
            this.$router.go(-1)
        },
        // 分页 房源
        handleHouseChange(){

        },
        // 分页 报单
        handleReplyChange(){

        },
        // 分页 接单
        handleReceiptChange(){

        },
        // 恢复
        toNormal(){
            this.$confirm(' 是否恢复此经纪人信息?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '恢复成功!'
                });
                this.isRecover = false;
                this.isRecovered = true
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消恢复'
                });          
            });
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
.personnel{
    width:30%;
    display: flex;
    justify-content: space-between;
    margin-right: 100px;
}
.content{
    width:100%;
}
.basic{
    width:90%;
    margin: auto;
    padding:0 20px;
    box-sizing: border-box;
}
h4{
    font-size: 24px;
    margin-bottom: 20px;
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
.attach ul{
    display: flex;
    flex-direction: column;
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
.block{
    margin: 20px 0
}
.reason{
    font-size: 18px;
    text-indent: 24px;
}
.had{
    float: right;
    width:80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-color: #67c23a;
    border-radius: 5px;
    margin-right: 100px;
}
</style>
