import { formatISO, parseISO } from "date-fns";

export function formarDate(date: string){
    // converte de string para objeto
    const dateObject = parseISO(date);
    
    // converte para o formato de datetime
    const dateTimeISO = formatISO(dateObject, { representation: 'complete' });
    
    return dateTimeISO
}