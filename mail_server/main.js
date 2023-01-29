var http = require("http");
const express = require('express');
const cors = require('cors')
var nodemailer = require("nodemailer");
const formidable = require("formidable");

const multer = require('multer');
const fs = require('fs');
const { dirname } = require("path");


const storage =  multer.diskStorage({
  destination: function(req, file, cb){
    if(!fs.existsSync(__dirname+'temp')){
      fs.mkdirSync(dirname+'/temp')
    }
    cb(null, './temp')
  },
  filename :function(req, file, cb){
    cb(null, file.originalname)
  }
})

const upload = multer({storage : storage})

const port = process.env.PORT || 3000;
const app=express();
app.listen(port , function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
// app.listen(port ,'0.0.0.0' , function(){
//   console.log(`express port ${port}`);
// });
// app.use(express.static('public'));
app.use(cors());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
});


// contact us
console.log('Server running at http://127.0.0.1:'+port+'/');
app.get('/send', (req, res) => {

    return  res.send("email");
  });


app.get('/',(req , res)=>{
  return res.send("working")
})


app.post('/email',(req, res)=>{

  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {

    const { useremail,username,usermassage, newsLetter} = fields;
    console.log(fields);
    if ( !useremail , !username ) {
      res.send("need to fill all")
    }else{
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
         user: "olepaysrilanka@gmail.com",
          pass: "nysqdnmvdeysocfb",
        },
      });
      var mailOptions = {
        from: "olepaysrilanka@gmail.com",
        to: "rsandaruwan57@gmail.com",
        subject:"User Contact Email From PCRDGS Website " ,
        text: "username:  " +username+"       "+
        "useremail:   " +useremail+"       "+
        "message:   " +usermassage+"       "+
        "newsLetter:   " +newsLetter+"       ",
        html: '<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>',




      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.send(error)
        } else {
            return  res.send("email sended");

        }
      })
    }

  });

});
app.post('/request_mail',(req, res)=>{

  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {

    const {content} = fields;

    if ( !content  ) {
      res.send("need to fill all")
    }else{
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
         user: "olepaysrilanka@gmail.com",
          pass: "nysqdnmvdeysocfb",
        },
      });




      var mailOptions = {
        from: "olepaysrilanka@gmail.com",
        to: "buddhikamadhuranga96@gmail.com",
        subject:"Booking Request" ,
        html: '<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://res.cloudinary.com/ambrum/raw/upload/v1665395759/vila69/bootstrap.min_xjvelb.css" ><style>@import "https://res.cloudinary.com/ambrum/raw/upload/v1665395759/vila69/bootstrap.min_xjvelb.css"; .booking_request {z-index: 1050;max-height: 88vh !important;overflow-y: scroll;background: linear-gradient(180deg, #ebf3ff 0%, #f1f1f1 100%)}.request {position: relative;background-image: url("https://res.cloudinary.com/ambrum/image/upload/v1665395391/vila69/our_packages_1_vzwqxn.png");background-size: cover;background-repeat: no-repeat;height: 100%}.pop_box {background: rgba(243, 243, 239, .9);scale: 1.25;z-index: 1060;height: 100px;margin-top: -3%;font-family: "Poppins";font-style: normal;font-weight: 400;font-size: 24px;line-height: 24px;color: #979797} .dark_side {height: 100%;background-color: rgba(0, 0, 0, .7);color: #fff;padding-bottom: 150px}.white_bootom {position: absolute;bottom: 0%;height: 150px;border-radius: 50% 50% 0% 0%;background-color: #fff}.white_bootom img {filter: grayscale(1)}</style></head><body><div class="container">'+content+'</div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script></body></html>'
      };
      console.log(mailOptions.html);
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.send(error)
        } else {
            return  res.send("email sended");
        }
      })
    }

  });
});
app.get('/email',(req, res)=>{
  console.log(res);
  return res.send(res)
});




// PCRG


console.log('Server running at http://127.0.0.1:'+port+'/');
app.get('/send', (req, res) => {

    return  res.send("email");
  });


app.get('/',(req , res)=>{
  return res.send("working")
})


app.post('/pcrg',(req, res)=>{

  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {

    const { pcrgFirstName,pcrgNic,pcrgPostAddress, pcrgMobile, pcrgMobileResident, pcrgMobileOffice, pcrgEmail,
      pcrgQulification, pcrgQulification1, pcrgSpeciality, pcrgSLMCRegNo, pcrgFaxNo, pcrgProposedBy, pcrgSecondedBy } = fields;

    console.log(fields);
    if ( !pcrgFirstName , !pcrgNic ) {
      res.send("need to fill all")
    }else{
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
         user: "olepaysrilanka@gmail.com",
          pass: "nysqdnmvdeysocfb",
        },
      });
      var mailOptions = {
        from: "olepaysrilanka@gmail.com",
        to: "rsandaruwan57@gmail.com",
        subject:" Application for the membership of the Primary Care Respiratory Group Sri Lanka. " ,
        text: "Name:  " +pcrgFirstName+"       "+
        "NIC:   " +pcrgNic+"       "+
        "Postal Address:   " +pcrgPostAddress+"       "+
        "Phone Number( Mobile):   " +pcrgMobile+"       "+
        "Phone Number( Resident /Optional:   " +pcrgMobileResident+"       "+
        "Phone Number( Office /Optional:   " +pcrgMobileOffice+"       "+
        "Email:   " +pcrgEmail+"       "+
        "Qulification:   " +pcrgQulification+"       "+ +pcrgQulification1+"       "+
        "Speciality:   " +pcrgSpeciality+"       "+
        "SLMC Reg No:   " +pcrgSLMCRegNo+"       "+
        "Fax No:   " +pcrgFaxNo+"       "+
        "Proposed By:   " +pcrgProposedBy+"       "+
        "Seconded By:   " +pcrgSecondedBy+"       "
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.send(error)
        } else {
            return  res.send("email sended");

        }
      })
    }

  });

});
app.post('/request_mail',(req, res)=>{

  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {

    const {content} = fields;

    if ( !content  ) {
      res.send("need to fill all")
    }else{
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
         user: "olepaysrilanka@gmail.com",
          pass: "nysqdnmvdeysocfb",
        },
      });




      var mailOptions = {
        from: "olepaysrilanka@gmail.com",
        to: "rsandaruwan57@gmail.com",
        subject:"Booking Request" ,
        html: '<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://res.cloudinary.com/ambrum/raw/upload/v1665395759/vila69/bootstrap.min_xjvelb.css" ><style>@import "https://res.cloudinary.com/ambrum/raw/upload/v1665395759/vila69/bootstrap.min_xjvelb.css"; .booking_request {z-index: 1050;max-height: 88vh !important;overflow-y: scroll;background: linear-gradient(180deg, #ebf3ff 0%, #f1f1f1 100%)}.request {position: relative;background-image: url("https://res.cloudinary.com/ambrum/image/upload/v1665395391/vila69/our_packages_1_vzwqxn.png");background-size: cover;background-repeat: no-repeat;height: 100%}.pop_box {background: rgba(243, 243, 239, .9);scale: 1.25;z-index: 1060;height: 100px;margin-top: -3%;font-family: "Poppins";font-style: normal;font-weight: 400;font-size: 24px;line-height: 24px;color: #979797} .dark_side {height: 100%;background-color: rgba(0, 0, 0, .7);color: #fff;padding-bottom: 150px}.white_bootom {position: absolute;bottom: 0%;height: 150px;border-radius: 50% 50% 0% 0%;background-color: #fff}.white_bootom img {filter: grayscale(1)}</style></head><body><div class="container">'+content+'</div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script></body></html>'
      };
      console.log(mailOptions.html);
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.send(error)
        } else {
            return  res.send("email sended");
        }
      })
    }

  });
});
app.get('/email',(req, res)=>{
  console.log("qUALIFICATION  ============"+res);
  return res.send(res)
});




// PCDG


console.log('Server running at http://127.0.0.1:'+port+'/');
app.get('/send', (req, res) => {

    return  res.send("email");
  });


app.get('/',(req , res)=>{
  return res.send("working")
})


app.post('/pcdg',(req, res)=>{

  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {

    const { pcdgFirstName,pcdgNic,pcdgPostAddress, pcdgMobile, pcdgMobileResident, pcdgMobileOffice, pcdgEmail,
      pcdgQulification, pcdgQulification1, pcdgSpeciality, pcdgSLMCRegNo, pcdgFaxNo, pcdgProposedBy, pcdgSecondedBy } = fields;

    console.log(fields);
    if ( !pcdgFirstName , !pcdgNic ) {
      res.send("need to fill all")
    }else{
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
         user: "olepaysrilanka@gmail.com",
          pass: "nysqdnmvdeysocfb",
        },
      });
      var mailOptions = {
        from: "olepaysrilanka@gmail.com",
        to: "rsandaruwan57@gmail.com",
        subject:"Application for the membership of the Primary Care Diabetic Group. " ,
        text: "Name:  " +pcdgFirstName+"       "+
        "NIC:   " +pcdgNic+"       "+
        "Postal Address:   " +pcdgPostAddress+"       "+
        "Phone Number( Mobile):   " +pcdgMobile+"       "+
        "Phone Number( Resident /Optional:   " +pcdgMobileResident+"       "+
        "Phone Number( Office /Optional:   " +pcdgMobileOffice+"       "+
        "Email:   " +pcdgEmail+"       "+
        "Qulification:   " +pcdgQulification+"       "+ +pcdgQulification1+"       "+
        "Speciality:   " +pcdgSpeciality+"       "+
        "SLMC Reg No:   " +pcdgSLMCRegNo+"       "+
        "Fax No:   " +pcdgFaxNo+"       "+
        "Proposed By:   " +pcdgProposedBy+"       "+
        "Seconded By:   " +pcdgSecondedBy+"       "
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.send(error)
        } else {
            return  res.send("email sended");

        }
      })
    }

  });

});
app.post('/request_mail',(req, res)=>{

  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {

    const {content} = fields;

    if ( !content  ) {
      res.send("need to fill all")
    }else{
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
         user: "olepaysrilanka@gmail.com",
          pass: "nysqdnmvdeysocfb",
        },
      });




      var mailOptions = {
        from: "olepaysrilanka@gmail.com",
        to: "rsandaruwan57@gmail.com",
        subject:"Booking Request" ,
        html: '<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://res.cloudinary.com/ambrum/raw/upload/v1665395759/vila69/bootstrap.min_xjvelb.css" ><style>@import "https://res.cloudinary.com/ambrum/raw/upload/v1665395759/vila69/bootstrap.min_xjvelb.css"; .booking_request {z-index: 1050;max-height: 88vh !important;overflow-y: scroll;background: linear-gradient(180deg, #ebf3ff 0%, #f1f1f1 100%)}.request {position: relative;background-image: url("https://res.cloudinary.com/ambrum/image/upload/v1665395391/vila69/our_packages_1_vzwqxn.png");background-size: cover;background-repeat: no-repeat;height: 100%}.pop_box {background: rgba(243, 243, 239, .9);scale: 1.25;z-index: 1060;height: 100px;margin-top: -3%;font-family: "Poppins";font-style: normal;font-weight: 400;font-size: 24px;line-height: 24px;color: #979797} .dark_side {height: 100%;background-color: rgba(0, 0, 0, .7);color: #fff;padding-bottom: 150px}.white_bootom {position: absolute;bottom: 0%;height: 150px;border-radius: 50% 50% 0% 0%;background-color: #fff}.white_bootom img {filter: grayscale(1)}</style></head><body><div class="container">'+content+'</div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script></body></html>'
      };
      console.log(mailOptions.html);
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.send(error)
        } else {
            return  res.send("email sended");
        }
      })
    }

  });
});
app.get('/email',(req, res)=>{
  console.log("qUALIFICATION  ============"+res);
  return res.send(res)
});






// ccebdm


console.log('Server running at http://127.0.0.1:'+port+'/');
app.get('/ccebdm', upload.array('attachments'), (req, res) => {
    let attachments = []
    for(let i = 0; i<req.files.length; i++){
      let fileDetails = {
        filename:req.files[i].filename,
        path: req.files[i].path
      }
      attachments.push(fileDetails)
    }

    return  res.send("email");
  });


app.get('/',(req , res)=>{
  return res.send("working")
})


app.post('/ccebdm',(req, res)=>{

  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {

    const { fullName, private, governement, other, otherSpecify,Number, Street, City, MobileNumber, Email,
      dob, registrationNo, registrarionDate, qualification, college, year, treatedMonth, seenMonth, profYear,position,
       hospital, duration, privatelast, governementlast, otherlast , newsLetterlast } = fields;

      const { attachments} = files;

    console.log(fields);
    // console.log(files);

    console.log(attachments);


    if ( !fullName , !otherSpecify ) {
      res.send("need to fill all")
    }else{
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
         user: "olepaysrilanka@gmail.com",
          pass: "nysqdnmvdeysocfb",
        },
      });
      var mailOptions = {
        from: "olepaysrilanka@gmail.com",
        to: "rsandaruwan57@gmail.com",
        subject:"Application for theThe Certificte Course In Evidence Based Diabetes Management. " ,
        attachments:attachments,
        text: "Full Name:  " +fullName+"       "+
        "private:   " +private+"       "+
        "governement:   " +governement+"       "+
        "other:   " +other+"       "+
        "Other Specify:   " +otherSpecify+"       "+
        "Address Number:   " +Number+"       "+
        "Address Street:   " +Street+"       "+
        "City:   " +City+"       "+
        "Mobile Number " +MobileNumber+"       "+
        "Email:   " +Email+"       "+
        "Date of birth:   " +dob+"       "+
        "Attachment:   " +attachments+"       "+
        "Medical Council Registration No:   " +registrationNo+"       "+
        "Date Of Registration:   " +registrarionDate+"       "+
        "privatelast:   " +privatelast+"       "+
        "governementlast:   " +governementlast+"       "+
        "otherlast:   " +otherlast+"       "+

        "qualification :    " +qualification+ "     "+
        "college :    " +college+ "     "+
        "year :    " +year+ "     "+

        "treatedMonth :    " +treatedMonth+ "     "+
        "seenMonth :    " +seenMonth+ "     "+
        "profYear :    " +profYear+ "     "+

        "position :    " +position+ "     "+
        "hospital :    " +hospital+ "     "+
        "duration :    " +duration+ "     "+

        "newsLetterlast:   " +newsLetterlast+"       "


      };

      console.log("Last"+attachments.mimetype)


      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.send(error)
        } else {
            return  res.send("email sended");

        }
      })
    }



  });

});
app.post('/request_mail',(req, res)=>{

  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {

    const {content} = fields;

    if ( !content  ) {
      res.send("need to fill all")
    }else{
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
         user: "olepaysrilanka@gmail.com",
          pass: "nysqdnmvdeysocfb",
        },
      });




      var mailOptions = {
        from: "olepaysrilanka@gmail.com",
        to: "rsandaruwan57@gmail.com",
        subject:"Booking Request" ,
        html: '<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://res.cloudinary.com/ambrum/raw/upload/v1665395759/vila69/bootstrap.min_xjvelb.css" ><style>@import "https://res.cloudinary.com/ambrum/raw/upload/v1665395759/vila69/bootstrap.min_xjvelb.css"; .booking_request {z-index: 1050;max-height: 88vh !important;overflow-y: scroll;background: linear-gradient(180deg, #ebf3ff 0%, #f1f1f1 100%)}.request {position: relative;background-image: url("https://res.cloudinary.com/ambrum/image/upload/v1665395391/vila69/our_packages_1_vzwqxn.png");background-size: cover;background-repeat: no-repeat;height: 100%}.pop_box {background: rgba(243, 243, 239, .9);scale: 1.25;z-index: 1060;height: 100px;margin-top: -3%;font-family: "Poppins";font-style: normal;font-weight: 400;font-size: 24px;line-height: 24px;color: #979797} .dark_side {height: 100%;background-color: rgba(0, 0, 0, .7);color: #fff;padding-bottom: 150px}.white_bootom {position: absolute;bottom: 0%;height: 150px;border-radius: 50% 50% 0% 0%;background-color: #fff}.white_bootom img {filter: grayscale(1)}</style></head><body><div class="container">'+content+'</div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script></body></html>'
      };
      console.log(mailOptions.html);
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.send(error)
        } else {
            return  res.send("email sended");
        }
      })
    }

  });
});
app.get('/email',(req, res)=>{
  console.log("qUALIFICATION  ============"+res);
  return res.send(res)
});



