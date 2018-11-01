<template>
    <div>
        <!-- 头部 -->
        <header>
            <el-row>
                <el-col :span="7">
                    <div class="date">
                        <el-date-picker
                        v-model="date"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        style="width:80%"
                        @blur="dateSearch" clearable>
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="7">
                    <el-select v-model="city" clearable placeholder="请选择城市" style="width:80%">
                        <el-option
                        v-for="item in cityLists"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        @change="citySearch">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="7">
                    <el-select v-model="area" clearable placeholder="请选择区域" style="width:80%">
                        <el-option
                        v-for="item in areaLists"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        @change="areaSearch">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="7">
                    <div class="search">
                        <el-input clearable placeholder="请输入电话/昵称" style="width:80%;margin-right:30px" v-model="text"></el-input>
                        <el-button type="primary" @click="search">搜索</el-button>
                    </div>
                </el-col>
            </el-row>
        </header>
        <!-- 头部 -->
        <!-- 数量统计 -->
        <div class="num">
            <p>经纪人总量：<span>{{brokerNum}}人</span></p>
            <p>当前统计总量：<span>{{currentNum}}人</span></p>
        </div>
        <!-- 数量统计 -->
        <!-- 表格 -->
        <div class="table">
            <el-table
                :data="tableData"
                border
                style="width: 95%;margin:auto"
                :default-sort = "{prop: 'date', order: 'descending'}">
                <el-table-column
                prop="name"
                label="姓名">
                </el-table-column>
                <el-table-column
                prop="account"
                label="账号">
                </el-table-column>
                <el-table-column
                prop="city"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="area"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="groom"
                label="推荐人账号">
                </el-table-column>
                <el-table-column
                prop="houseTotal"
                label="上架房源总量(间)">
                </el-table-column>
                <el-table-column
                prop="teamBNumber"
                sortable
                label="B级团队人数(人)">
                </el-table-column>
                <el-table-column
                prop="teamCNumber"
                sortable
                label="C级团队人数(人)">
                </el-table-column>
                <el-table-column
                prop="total"
                sortable
                label="实得总业绩(元)">
                </el-table-column>
                <el-table-column
                prop="bill"
                sortable
                label="签单量(单)">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 表格 -->
        <!-- 分页 -->
        <div class="block">
            <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
        <!-- 分页 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            date:'',//日期查询
            city:'',//城市查询
            area:'',//区域查询
            text:'',//条件查询
            cityLists:[],//城市下拉值
            areaLists:[],//区域下拉值
            tableData: [],
            brokerNum:'3000',
            currentNum:'200',
            currentPage:1,
            pageSize:20,
            total:100
        }
    },
    mounted(){
        this.getBrokerList();
        this.getCities();
        this.getAreas();
    },
    methods:{
        getBrokerList(){
            this.$post('user/getAgentUserList').then(res=>{
                console.log(res);
                if(res.code == 0 || res.code == 200){

                }else{
                    this.$message({
                        message:res.msg,
                        type:'error',
                        duration:1000
                    })
                }
            })
        },
        getCities(){
            console.log('获取城市')
        },
        getAreas(){
            console.log('获取区域')
        },
        // 排序
        formatter(row, column) {
            return row.address;
        },
        // 日期查询
        dateSearch(){
            console.log('日期搜索')
        },
        // 城市查询
        citySearch(){
            console.log('城市搜索')
        },
        // 区域查询
        areaSearch(){
            console.log('区域搜索')
        },
        // 条件查询
        search(){
            console.log('按条件搜索')
        },
        // 查看详情
        handleClick(val){
            this.$router.push({
                path:'/brokerDetail',
                query:{
                    id:val.id
                }
            })
        },
        // 分页
        handleCurrentChange(){
            console.log('分页')
        },
    }
}
</script>

<style>
.el-row{
    width:100%;
}
.el-col-7{
    width:30%;
    margin-left: 30px;
    margin-bottom: 30px;
}
</style>

<style scoped>
/* 头部 */
header{
    width:100%;
    height: 90px;
    display: flex;
    padding:100px 20px;
    align-items: center;
    box-sizing: border-box;
}
.search{
    display: flex;
    justify-content: space-around
}
.el-button--primary{
    height: 40px;
}
/* 头部 */
.num{
    width:100%;
    padding-left:3%;
    box-sizing: border-box;
}
.num p{
    font-size: 20px;
}
.num span{
    font-size: 24px;
    color: #ff8400
}
/* 列表 */
    .table{
        padding-top: 50px;
    }
/* 列表 */
    .block{
        width: 100%;
        height: 80px;
    }
    .el-pagination{
        float: right;
        margin:30px 50px 0 0;
    }
    .el-pagination button, .el-pagination span:not([class*=suffix]),.el-pager li,.el-pagination__editor.el-input .el-input__inner{
        height: 40px !important;
        line-height: 40px;
        font-size: 16px;
    }
    .el-pagination .el-select .el-input .el-input__inner{
        height: 43px !important;
        font-size: 16px;
    }
</style>
