import axios from "axios";
export default function AdminProductPage() {
  // call the back end
  axios.get("http://localhost:5000/api/product").then((res) => {
      console.log(res)
  })



    return (
        <h1>admin product page</h1>
        )
}