import axios from "axios";

const apigetapi = axios.create({
    try: {
        baseURL:'http://localhost:3333'
    } , 
    catch(err) {
        console.log('There has been a problem with your fetch operation: ' + err.message);
         // ADD THIS THROW error
          throw err;
   
}

});

export default apigetapi