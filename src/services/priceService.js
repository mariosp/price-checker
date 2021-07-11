export const convertCentToEuro=  (cents)=>{
    return (cents / 100).toLocaleString("el-GR", {style:"currency", currency:"EUR"});
}
