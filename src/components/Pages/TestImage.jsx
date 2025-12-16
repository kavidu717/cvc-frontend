
import { useState } from 'react'
import mediaUpload from '../../utility/mediaUpload';


export default function TestImage() {
    const [file, setFile] = useState(null);



       async function handleFileChange() {
         
        mediaUpload(file).then((url)=>{
            console.log(url);
        }).catch((err)=>{
            console.log(err);
        })
       }

    return (
        <div>
           <h1>test image</h1>
           <input type="file" onChange={
            (e)=>{
            setFile(e.target.files[0]);
            }
           } />


           <button onClick={handleFileChange}>upload</button>
        </div>
    );
}