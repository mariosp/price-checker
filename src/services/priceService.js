export const convertCentToEuro=  (cents)=>{
    return (cents / 100).toLocaleString("el-GR", {style:"currency", currency:"EUR"});
}

export const convertCentToCurrencyFormat= (cents)=>{
    return (cents / 100);
}

export const convertStringCurrencyToCents= (currency) =>{
   return parseFloat(currency) * 100;
}
