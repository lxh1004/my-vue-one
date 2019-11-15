 const data =require("./data/jingxuan.json")
 const bodyParser=require("body-parser")
 const sortData =require("./data/paihang.json")

 let myBook=[]
module.exports ={

    devServer:{
       before(app){
           app.use(bodyParser.json())
           //请求精选的数据
           app.get("/api/list",(req,res)=>{
               res.send({
                   code:200,
                   data:data,
                   message:'全部信息'
               })
           })
         //请求排行
           app.get("/api/sort",(req,res)=>{
               res.send({
                   code:200,
                   data:sortData,
                   message:'排行的数据'
               })
           }) 
           //详情
           app.get("/api/detail",(req,res)=>{
              let {id,index} =req.query
            
              sortData.rankData[index].novelList.forEach(item=>{
                
                  if(item.bookId == id){
                 item.is_in= myBook.findIndex(book=>book.bookId===item.bookId) >=0
                    res.send({
                        code:200,
                        data:item,
                        message:"详情数据"
                    })
                  }
              })
              
           })
           //添加数据
           app.post("/api/add",(req,res)=>{
             let {mybook} =req.body
               myBook.push(mybook)
               res.send({
                   code:200,
                   message:'添加成功',
                   data:myBook
               })
           })
           //请求书包的数据
           app.get("/api/book",(req,res)=>{

               res.send({
                   code:200,
                   data:myBook,
                   message:"书包的信息"
               })
           })

           app.post('/api/update', (req, res) => {
            let { myBookNew } = req.body
            myBook = myBookNew
            res.send({
              code: 200,
              data: myBook,
              message: '更新完成了'
            })
          })
       }

    }
}

