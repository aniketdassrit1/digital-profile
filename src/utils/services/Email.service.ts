import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { EmailData } from "./Email.service.interface";

export const sendEmail = (
  userId: string,
  serviceId: string,
  templateId: string,
  emailData: EmailData
): Promise<void | EmailJSResponseStatus> => {
  emailjs.init(userId);
  return emailjs.send(serviceId, templateId, emailData);
};
