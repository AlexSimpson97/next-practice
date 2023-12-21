"use client"
import SectionHeading from "@/src/components/SectionHeading";
import { useSectionInView } from "@/src/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/src/actions/sendEmail";
import FormButton from "@/src/components/FormButton";

export default function Contact() {
    const ref = useSectionInView({
        sectionName: "Contact Us",
        threshold: 0.5,
    });
    
    return (
        <motion.section 
        className={`text-zinc-500 body-font scroll-mt-28 mb-20 sm:mb-28 w-[min(90%,42rem)] text-center`}
        id="contact"
        ref={ref}
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 2,
        }} >
            <SectionHeading route="contact">Contact Us</SectionHeading>

            <p className={`text-zinc-700 -mt-6`} >For all enquiries please contact us at: <a className={`underline`} href={`mailto:info@nemahomecare.co.uk`} >info@nemahomecare.co.uk</a> or through the form below</p>

            <form className={`mt-10 flex flex-col`} action={async (formData) => {
                console.log("running on client");
                
                console.log(formData.get("userEmail"));
                console.log(formData.get("userFeedback"));

                const {data, error} = await sendEmail(formData);

                alert("Email sent successfully!");

                if (error) {
                    alert(error);
                    return;
                }
            }} >
                <input name="userEmail" className={`outline-green-600 h-14 px-4 rounded-lg borderBlack transition-all duration-1000 ease-custom`} type="email" required={true} maxLength={500} placeholder="Your email" />
                <textarea name="userFeedback" className={`outline-green-600 h-52 my-3 rounded-lg borderBlack p-4 transition-all duration-1000 ease-custom`} required={true} maxLength={5000} placeholder="Your message" />
                <FormButton />
            </form>
        </motion.section>
    )
}

