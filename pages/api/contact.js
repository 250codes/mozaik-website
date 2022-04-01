import sgMail from "@sendgrid/mail";

export default async function contact(req, res) {
	const { method } = req;
	if (method === "POST") {
		sgMail.setApiKey(process.env.SENDGRID_ACCESS_TOKEN);
		const mailer = async ({
			name,
			phone = "07897",
			subject,
			message,
			email,
		}) => {
			const data = `<p>Hi,<br/><br/> Client Name: ${name}<br/><br/> Client Phone Number: ${phone}<br/><br/> Client Email: ${email}<br/><br/> Subject:${subject}<br/><br/> Message:${message}</p>`;
			const emailSubject = "Mozaik Website Client Message";
			const emailFrom = "mwisemarierose@gmail.com";
			const emailTo = "mozaikdeveloper@gmail.com";

			const mailOptions = {
				from: `"Mozaik Website"<${emailFrom}>`,
				to: emailTo,
				subject: emailSubject,
				html: data,
			};
			try {
				const sendmail = await sgMail.send(mailOptions);
				return sendmail;
			} catch (err) {
				throw err;
			}
		};
		try {
			await mailer(req.body);
			return res.status(200).send({ message: "Message sent Successfully!" });
		} catch (error) {
			return res.status(500).send({ message: "SERVER_ERROR" });
		}
	} else {
		return res.status(500).send({ message: "ROUTE NOT FOUND" });
	}
}
