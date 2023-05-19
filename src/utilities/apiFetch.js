import { toast } from "react-hot-toast";

const postToDB = (dataItm) => {
  fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dataItm),
    })
      .then((res) => res.json())
      .then((data) =>  {
        if(data.insertedId){
          toast.success('Toy Added')
        }
      });
};


export { postToDB };
