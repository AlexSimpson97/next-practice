"use server";
import { Resend } from "resend";
import { validateFormDataAsString, getErrorMessage } from "@/src/lib/utils"
import ContactFormEmail from "../email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");
    const userEmail = formData.get("userEmail");
    const userFeedback = formData.get("userFeedback");
    
    // server side validation
    if (!validateFormDataAsString(userEmail, 500)) {
        return {
            error: "Invalid email",
        };
    }

    if (!validateFormDataAsString(userFeedback, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Nema Demo <onboarding@resend.dev>',
            to: 'alexandersimpson65.ts@gmail.com',
            reply_to: userEmail as string,
            subject: 'Enquiry',
            react: <ContactFormEmail userFeedback={userFeedback as string} userEmail={userEmail as string} />
        });
        await console.log(`Message delivered! : ${userFeedback}`);
    } catch (error) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data 
    }

};

// formData.get("userEmail")

//