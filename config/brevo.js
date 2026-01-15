import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];

apiKey.apiKey = process.env.BREVO_API_KEY;

console.log("BREVO API KEY EXISTS:", !!process.env.BREVO_API_KEY);


export default new SibApiV3Sdk.TransactionalEmailsApi();
