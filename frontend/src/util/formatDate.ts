export function formatDate(date: Date){
    const transoformDate = new Date(date)
    console.log(transoformDate)
    const day = transoformDate.getDate()
    const month = transoformDate.getMonth()+1
    const year = transoformDate.getFullYear()

    const formatDate = `${day}/${month}/${year}`

    return formatDate


}