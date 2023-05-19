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

const putToDB = (dataID,dataItm) =>{
  fetch(`http://localhost:5000/toys/${dataID}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataItm),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.modifiedCount > 0) {
            toast.success("Toy Updated");
          }else{
            toast.error("Need Some Update");
          }
        });
};


export { postToDB, putToDB };
