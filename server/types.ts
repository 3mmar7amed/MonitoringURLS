

export interface User {
    id : string   
    firstname : string 
    lastname : string 
    email : string  
    username  :string 
    password : string 
}


export interface Checks {
    id : string 
    url : string 
    
}


export interface Path {
    id : string 
    path : string 
    urlid: string 
}


export interface Reports {
    id : string 
    url : string 
    status : Number 
    availability : Number
    outages : Number
    downtime: Number
    uptime : Number 
    resonsetime  : Number 

}


export interface CheckTime {

    urlid : string
    checktime : Number
    
}


export interface RequestsLogs {
    id : string  
    urlid : string 
    requesttype : string
    status : string
    history : Number
    
}

export interface UserURLs {
    userid : string 
    urlid : string 
}

export interface URLsTags {
    urlid : string
    urltag: string
    
}