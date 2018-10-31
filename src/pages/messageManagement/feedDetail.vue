<template>
    <div>
        <ul>
            <li>
                <p>推送人：<span>{{pusher?pusher:'无'}}</span></p>
            </li>
            <li>
                <p>电话：<span>{{tel?tel:'无'}}</span></p>
            </li>
            <li>
                <p>{{content?content:'无'}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pusher:'',//推送人
            tel:'',//电话，
            content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        }
    },
    mounted(){
        this.getFeedDetail();
    },
    methods:{
        getFeedDetail(){
            console.log('获取反馈意见详情')
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
        padding:200px;
        box-sizing: border-box;
    }
    ul>li{
        height: 50px;
    }
</style>
