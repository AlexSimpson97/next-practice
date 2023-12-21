import { Html, Body, Head, Heading, Hr, Link, Container, Preview, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
type ContactFormEmailProps = {
    userFeedback: string;
    userEmail: string;
}

export default function ContactFormEmail({ userFeedback, userEmail }: ContactFormEmailProps) {
    return (
        <Html >
            <Head ></Head>
            <Preview >New Message from a NEMA Hompage</Preview>
            <Body className={`bg-zinc-200`} >
                <Container >
                    <Section className={`bg-white borderBlack my-10 px-10 py-4 rounded-md`} >
                        <Heading className={`leading-tight`} >You received the following message from the contact form</Heading>
                        <Text >{userFeedback}</Text>
                        <Hr />
                        <Text >This is an email from: {userEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

