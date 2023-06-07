function calculateVat(exclusivePrice, taxRate)
{
   const inclusiveVat= exclusivePrice * (1 + taxRate/100)100;
   return inclusiveVat;
}
console.log(calculateVat);
