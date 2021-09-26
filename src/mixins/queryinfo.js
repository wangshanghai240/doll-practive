export const queryinfo = {
    data(){
        return{
            queryinfo:{
                query:{
                  end:'',
                  start:'',
                  name:''
                },
                // 页数
                page:1,
                // 每页多少条数据
                limit:10
              }
        }
    }
}