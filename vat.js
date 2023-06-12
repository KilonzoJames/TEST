function calculateVat(exclusivePrice, taxRate)
{
   const inclusiveVat= exclusivePrice * (1 + taxRate/100);
   return inclusiveVat;
}
console.log(calculateVat(100, 15));
