// async function  server(addr:string)=>{
//     // create tcp server
//     const listener= Deno.listen('tcp',addr)
//     while(1){
//         const conn:Deno.Conn =await listener.accept()
//         const CRLF  = "\r\n"
//         const bodyStr ="hello,world"
//         const res=[
//             `HTTP/1.1 200`,
//             `content-length:${bodyStr.length}`,
//             ``,
//             `${bodyStr}`
//         ].join(CRLF)

//         // HTTP 报文字符串转为二进制数据流
//         const encoder = new TextEncoder()
//         conn.write(encoder.encode(res))
//         conn.close()
//     }
//     console.log(Deno)
// })

// server('127.0.0.1:3001')
