const sql =require('mssql')

async() => {
    try {
      await sql.connect ('Server = 192.168.0.14 ; Database = ESCALASOFT ; User Id =sa ; Password = #escalasoft123; Encrypt=true')


    }catch(err){
        
    }
}