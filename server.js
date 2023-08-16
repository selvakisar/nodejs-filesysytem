
const express = require('express');
const fs = require('fs');
const army = express();
const cors=require('cors');
const path = require('path');


army.use(cors());
army.use(express.json());
const PORT =6969;

army.post('/create',(req,res)=>{
    // timestamp
    const currentTimeStamp=new Date().toLocaleString();
//    file name creation
const day=String(new Date()).split(" ");
const cDate=day[2]+day[1]+day[3]
const cTime=day[4]
const fileName=`${cDate}-${cTime.split(":").join("-")}`;

// txt file create/

const txtFile=`./file/${fileName}.txt`;
try {
    if (!fs.existsSync(txtFile)) {

        fs.writeFile(`${txtFile}`, `${currentTimeStamp}`, err => {
            if (err) {
                console.error(err);
                return res.status(404).json({ Message: "i am in trouble" })
            }
            return res.status(201).json({ Message: `Txt file ${fileName}.txt created ` })
        })
    }
} catch (error) {
    console.log(error);
    return res.status(420).json({Message:"txt file already exists"})
}
})


// endpoint for txt file
army.get('/',(req,res)=>{
  
    const textfiles=fs.readdirSync("./file")
textfiles.map((textfiles,index)=>
    files=textfiles,
    res.status(202).send(textfiles)
)
})

army.listen(PORT,()=>{
    console.log("server mounted")
})






















// army.get("/file/date, ",(ask,gave)=>{
//     let date=new Date();
//     let message =date.toISOString();
//     fs.writeFile('./currentTime.txt',message,(err)=>{
//         if(err){
//             gave.send("i cant do",err)
//         }
//         else{
//             fs.readFile("./currentTime.txt","utf-8",(err,date,))
//         }
//     })
// })
