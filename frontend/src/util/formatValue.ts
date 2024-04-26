export function formatCurrency(value: string){
    
    const floatValue = parseFloat(value.replace(/,/g, '.'));

    const convert = new Intl.NumberFormat('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })    

    return convert.format(floatValue)
   
}