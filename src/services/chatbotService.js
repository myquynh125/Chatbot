import request from "request";

require('dotenv').config();

const page_ACCESS_TOKEN=process.env.PAGE_ACCESS_TOKEN;
const IMAGE_GET_STARTED = 'https://www.mentalhealthfirstaid.org/wp-content/uploads/2018/03/Jacksonville-Hospital-Collaborative-1.jpg';
const IMAGE_LOOK_BOOKING = 'https://thumbayhospital.com/wp-content/uploads/2017/12/book-1.jpg';
const IMAGE_BOOKING = 'https://media.alobacsi.com/Images/Uploaded/Share/2017/03/20/c85dat-lich-kham.jpg';
const IMAGE_ADVISE = 'https://cdn.123job.vn/123job/uploads/2019/09/27/2019_09_27______5517c730b837d9907a214976fe4fbef7.jpg';
const IMAGE_DETAIL = 'http://linconlaw.vn/wp-content/uploads/2019/04/IMG_0937-e1520912568890.jpg';
const IMAGE_MORING = 'http://image.vietnamnews.vn/uploadvnnews/Article/2021/8/2/167184_hoanmy.jpg';
const IMAGE_EVENING = 'https://assets.thehansindia.com/hansindia-bucket/7481_Doctors.jpg';
const IMAGE_DETAIL_WEB = 'https://www.halton.com/wp-content/uploads/2020/05/Patient_HiRes_01-1366x768.jpg';


let callSendAPI = async (response, sender_psid) => {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }
  await SendMarkReadMessage(sender_psid);
  await SendTypingOn(sender_psid);
  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v12.0/me/messages",
    "qs": { "access_token": page_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  });
}

let SendTypingOn = (sender_psid) =>{
  // Construct the message body
  let request_body = {
   "recipient": {
     "id": sender_psid
   },
   "sender_action":"typing_on"
 }

 // Send the HTTP request to the Messenger Platform
 request({
   "uri": "https://graph.facebook.com/v12.0/me/messages",
   "qs": { "access_token": page_ACCESS_TOKEN },
   "method": "POST",
   "json": request_body
 }, (err, res, body) => {
   if (!err) {
     console.log('SendTypingOn sent!')
   } else {
     console.error("Unable to send SendTypingOn:" + err);
   }
 }); 
 };



 let SendMarkReadMessage = (sender_psid) =>{
  // Construct the message body
  let request_body = {
   "recipient": {
     "id": sender_psid
   },
   "sender_action":"mark_seen"
 }

  // Send the HTTP request to the Messenger Platform
  request({
  "uri": "https://graph.facebook.com/v12.0/me/messages",
  "qs": { "access_token": page_ACCESS_TOKEN },
  "method": "POST",
  "json": request_body
  }, (err, res, body) => {
  if (!err) {
    console.log('SendTypingOn sent!')
  } else {
    console.error("Unable to send SendTypingOn:" + err);
  }
  }); 
}

 let handleGetStarted = (sender_psid) =>{
  return new Promise(async (resolve, reject) =>{
      try{
          let response = { "text": `Xin ch??o b???n ?????n v???i trang web ISOFCARE` }
          let response3 = {
            "text": "Anh/ch??? ??ang c???n h??? tr??? v???:",
            "quick_replies": [
                {
                    "content_type": "text",
                    "title": `L???ch kh??m`,
                    "payload": "LOOK_BOOKING",
                },
                {
                    "content_type": "text",
                    "title": `Gi???y t???`,
                    "payload": "PAPER",
                },
                {
                    "content_type": "text",
                    "title": `H??nh th???c thanh to??n`,
                    "payload": "PRICE",
                },
            ]
        };
          await callSendAPI(response, sender_psid);
          await callSendAPI(response3,sender_psid);
          resolve('done');
      }catch(e){
          reject(e);
      }
  })
}


let handlePaper = (sender_psid) =>{
  return new Promise(async (resolve, reject) =>{
    try{
        let response2 = {
          "text": `Tr?????c khi ????a con ?????n kh??m, anh/ ch??? vui l??ng mang theo:
          \nS??? y b??? (n???u c??)
          \nTh??? b???o hi???m y t??? (n???u c??)
           \nCh???ng minh th?? ho???c h??? chi???u ho???c th??? h???c sinh, gi???y khai sinh (v???i tr??? d?????i 6 tu???i) ho???c c??c gi???y t??? t??y th??n t????ng ??????ng 
           \nGi???y chuy???n tuy???n h???p l??? (n???u c??)
           \n????n thu???c ho???c c??c thu???c ??ang d??ng (n???u c??)
           \nC??c k???t qu??? x??t nghi???m, ch???p chi???u (n???u c??)
           `
        };
        let response3={
          "attachment":{
            "type":"template",
            "payload":{
              "template_type":"button",
              "text": `Hi v???ng c??c th??ng tin n??y r???t h???u ??ch cho c??c b???n
                      \nQu?? v??? c?? th??? li??n h??? ch??ng t??i qua 
                      \nS??? ??i???n tho???i (84)-0968679272 ho???c 0243 9420055
                      \nTr??n tr???ng c??m ??n!`,
              "buttons":[
                { 
                  "type": "postback",
                  "title": "Quay v???",
                  "payload": "RETURN_TO_BEGIN",
                }
              ]
            }
          }
        }
        await callSendAPI(response2,sender_psid);
        await callSendAPI(response3,sender_psid);
        resolve('done');
    }catch(e){
        reject(e);
    }
  });
}

let handlePrice = (sender_psid) =>{
  return new Promise(async (resolve, reject) =>{
    try{
        let response2 = {
          "text": `Qu?? v??? c?? th??? thanh to??n b???ng ti???n m???t v??/ho???c th??? t??n d???ng (Master card/Visa card) v??/ho???c th??? ATM c???a c??c ng??n h??ng trong n?????c.
           `
        };
        let response3={
          "attachment":{
            "type":"template",
            "payload":{
              "template_type":"button",
              "text": `Hi v???ng c??c th??ng tin n??y r???t h???u ??ch cho c??c b???n
                      \nQu?? v??? c?? th??? li??n h??? ch??ng t??i qua 
                      \nS??? ??i???n tho???i (84)-0968679272 ho???c 0243 9420055
                      \nTr??n tr???ng c??m ??n!`,
              "buttons":[
                { 
                  "type": "postback",
                  "title": "Quay v???",
                  "payload": "RETURN_TO_BEGIN",
                }
              ]
            }
          }
        }
        await callSendAPI(response2,sender_psid);
        await callSendAPI(response3,sender_psid);
        resolve('done');
    }catch(e){
        reject(e);
    }
  });
}

let handleSendBooking = (sender_psid) =>{
  return new Promise(async (resolve, reject) =>{
    try{
        let response1 = getBookingTemplate();
        await callSendAPI(response1, sender_psid);
        resolve('done');
    }catch(e){
        reject(e);
    }
  });
}

let getBookingTemplate = () =>{
  let response = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [{
          "title": "L???ch kh??m c???a ch??ng t??i.",
          "subtitle": `Trang web mang ?????n cho b???n l???ch kh??m cho bu???i s??ng l???n bu???i chi???u`,
          "image_url": IMAGE_LOOK_BOOKING,
          "buttons": [
            {
              "type": "postback",
              "title": "BU???I S??NG",
              "payload": "MORNING",
            },
            {
              "type": "postback",
              "title": "BU???I CHI???U",
              "payload": "NOON",
            }
          ],
        }, 
      ]
      }
    }
  }
  return response;
}

let getMoringTemplate = () =>{
  let response = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [{
          "title": "Gi??? m??? c???a bu???i s??ng",
          "subtitle": "T2-T6: 7h00 - 11h00  | T7-CN: 6h30 - 11h30",
          "image_url": IMAGE_MORING,
        },
        {
          "title": "L???a ch???n",
          "subtitle": `B???n c?? th??? quay v??? ho???c xem l???ch kh??m bu???i chi???u`,
          "image_url": IMAGE_BOOKING,
          "buttons": [
            
            {
              "type": "postback",
              "title": "Quay v??? ?????u",
              "payload": "RETURN_TO_BEGIN",
            },
            {
              "type": "postback",
              "title": "Xem l???ch bu???i chi???u",
              "payload": "RETURN_NOON",
            },
          ],
        } 
      ]
      }
    }
  }
  return response;
}

let handleSendMoring = (sender_psid) =>{
  return new Promise(async (resolve, reject) =>{
    try{
        let response1 = getMoringTemplate();
        await callSendAPI(response1, sender_psid);
        resolve('done');
    }catch(e){
        reject(e);
    }
})
}

let getNoonTemplate = () =>{

  let response = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
        {
          "title": "Gi??? m??? c???a ??? bu???i chi???u",
          "subtitle": "T2-T6: 13h00 - 16h30  | T7-CN: 13h30 - 16h30",
          "image_url": IMAGE_EVENING,
        },
        {
          "title": "L???a ch???n",
          "subtitle": `B???n c?? th??? quay v??? ho???c xem l???ch kh??m bu???i s??ng`,
          "image_url": IMAGE_BOOKING,
          "buttons": [
            
            {
              "type": "postback",
              "title": "Quay v??? ?????u",
              "payload": "RETURN_TO_BEGIN",
            },
            {
              "type": "postback",
              "title": "Xem l???ch bu???i s??ng",
              "payload": "RETURN_MORNING",
            },
          ],
          }  
        ]
      }
    }
  }
  return response;
}

let handleSendNoon = (sender_psid) =>{
  return new Promise(async (resolve, reject) =>{
    try{
        let response1 = getNoonTemplate();
        await callSendAPI(response1, sender_psid);
        resolve('done');
    }catch(e){
        reject(e);
    }
})

}

let handleBacktoBooking = async (sender_psid) =>{
  await handleSendBooking(sender_psid);
}

let handleBacktoNoon = async (sender_psid) =>{
  await handleSendNoon(sender_psid);
}

let handleBacktoMorning = async (sender_psid) =>{
  await handleSendMoring(sender_psid);
}

let getImageWebTemplate = () =>{
  let response = {
    "attachment":{
      "type":"image", 
      "payload":{
        "url": IMAGE_DETAIL_WEB, 
        "is_reusable":true
      }
    }
  }
  return response;
}

//let GetButtonWebTemplate = () =>{
//  let response = {
//    "attachment":{
//      "type":"template",
//      "payload":{
//        "template_type":"button",
//        "text":"B???nh vi???n ph???c v??? t???i ??a kho???ng 200 ng?????i ",
//        "text":"Bao g???m nh???ng d???ng c??? c??ng ngh??? ti??n ti???n v?? m??y l???nh ",
//        "buttons":[
//          { 
//             "type": "postback",
//           "title": "Quay v???",
//            "payload": "RETURN_TO_BEGIN",
//          }
//        ]
//      }
//    }
//  }
//  return response;
//}

//let handleShowDetail = (sender_psid) =>{
//  return new Promise(async (resolve, reject) =>{
//    try{
       // send an image
//        let response1 = getImageWebTemplate()

        //send a button template
//        let response2 = GetButtonWebTemplate();
//        await callSendAPI(response1, sender_psid);
//        await callSendAPI(response2, sender_psid);
//        resolve('done');
//    }catch(e){
//        reject(e);
//    }
//})

//}


module.exports = {
    handleGetStarted: handleGetStarted,
    handleSendBooking: handleSendBooking,
    handleSendMoring: handleSendMoring,
    handleSendNoon: handleSendNoon,
    handleBacktoBooking: handleBacktoBooking,
    handleBacktoMorning: handleBacktoMorning,
    handleBacktoNoon: handleBacktoNoon,
//    handleShowDetail: handleShowDetail,
    callSendAPI: callSendAPI,
    handlePaper: handlePaper,
    handlePrice: handlePrice
}