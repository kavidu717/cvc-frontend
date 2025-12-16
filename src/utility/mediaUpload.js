import { createClient } from '@supabase/supabase-js'
const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeHV4d3d1bG91dmhrZXZsZXBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4Nzk2MTQsImV4cCI6MjA4MTQ1NTYxNH0.AUreCpcbe9uUSgBqEgVyl2xa8Xukcozeu9626icJ9JY"
const url ="https://wdxuxwwulouvhkevlepf.supabase.co"

export default function mediaUpload(file){
      
    return new Promise((resolve, reject) => {
        if(file==null){
 
            reject("file not added")

        }

      let  fileName = file.name;
           const extension =fileName.split('.')[fileName.split('.').length-1]
         
             const superbase= createClient(url,key)
         
           // change the file  and because we cant add the same file name

           // takw the tine stamp 
           const timesLamp= new Date().getTime();
             fileName= timesLamp +file.name+ "."+extension

              superbase.storage.from("images").upload(fileName, file,
            {
                cacheControl: '3600',
                upsert: false
            }
           ).then(()=>{
               const publicUrl = superbase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
               resolve(publicUrl)
           }).catch(
               (err)=>{
                   reject(err)
               }
           )

    });





    

}

