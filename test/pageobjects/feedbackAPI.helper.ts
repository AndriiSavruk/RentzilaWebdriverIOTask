import axios from 'axios';
import loginData from '../../.env/admincred.json' assert { type: "json" };

let accessToken:any;
accessToken = null;
let feedbackList:any;
const adminEmail:string = loginData.email;
const adminPassword:string = loginData.password;

class FeedbackAPIhelper {
public async createAccessToken () {
    if (accessToken === null) {
        await axios
        .post('https://stage.rentzila.com.ua/api/auth/jwt/create/',{
            email: adminEmail,
            password: adminPassword
        })
        .then( async function(response) {
            const responseBody = await response.data.access;
            accessToken = responseBody;
        })
    }
    return accessToken;
}
public async getFeedBackList(token:any) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://stage.rentzila.com.ua/api/backcall/',
        headers: { 
          'Authorization': 'Bearer '+token
        }
      };
    await axios.request(config)
    .then((response) => {
      feedbackList = response.data;
    }
    )
    return feedbackList;
}
public async feedbackFilter(feedbackList:any, query='+380506743060') {
    const filteredList = feedbackList.filter((feedback:any) => {
        // return feedback.phone.search(query) !== -1;
        return feedback.phone.includes(query);
    })
    return filteredList;
}
}

export default new FeedbackAPIhelper();