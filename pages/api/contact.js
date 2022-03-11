
import sgMail from '@sendgrid/mail'

export default async function contact(req, res) {
  const { method } = req;
  if (method === "POST") {

  sgMail.setApiKey("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")
  const mailer = async (userInfo) =>{  
    const data =`<p>Hi,<br/> Client Name: ${userInfo.name}<br/> Client Phone Number: ${userInfo.phone}<br/> Client Email: ${userInfo.name}<br/> Subject:${userInfo.subject}<br/> Subject:${userInfo.Message}</p>`;
    const subject ='Mozaik Website Client Message';
    const emailFrom = 'arsenedeveloper250@gmail.com'
    const emailTo = 'mozaikdeveloper@gmail.com'
      
      const mailOptions = {
        from: `"Mozaik Website"<${emailFrom}>`,
        to: emailTo,
        subject,
        html: data
      };
      try {
        const sendmail = sgMail.send(mailOptions);
        return sendmail;
      }
      catch(err){
         throw err;
      }
    }
  try {
    // const {
    //   name, email, phone, subject, message
    // } = req.body;
    await mailer(req.body).catch((error)=>console.log('error',error))
    return res.status(200).send({message:'Message sent Successfully!'})

  } catch (error) {
    return res.status(500).send({message:'SERVER_ERROR'})
  }
}
}
