    export interface userlist{
        id?:Number,
        name?:String,
        phone?:String,
        username?:String,
        email?:String,
        website?:String,
        company?:{
            name?:String,
            catchPhrase?:String,
            bs?:String
        },
        address?:{
            city?:String,
            street?:String,
            suite?:String,
            zipcode?:String,
            geo?:{
                lat?:String,
                lng?:String
            }
        }
    }