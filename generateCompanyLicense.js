
// generateCompanyLicense.js
const fs=require("fs");
exports.handler=async()=>{
  try{
    const tpl=fs.readFileSync("company-license-template.html","utf8");
    const code=String(Math.floor(10000000+Math.random()*89999999));
    const exp=new Date();exp.setFullYear(exp.getFullYear()+1);
    const expISO=exp.toISOString().slice(0,10);
    const out=tpl.replace(/__LICENSE_CODE__/g,code).replace(/__LICENSE_EXPIRES__/g,expISO);
    return{
      statusCode:200,
      headers:{
        "Content-Type":"text/html",
        "Content-Disposition":`attachment; filename="avail-center-CODE-${code}.html"`
      },
      body:out
    };
  }catch(e){
    return{statusCode:500,body:"error"};
  }
}
