import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDb from "../../../../lib/connectDb";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", require: true, placeholder: "Enter your email" },
                password: { label: "Password", type: "password", require: true, placeholder: "Enter your password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!credentials) {
                    return null;
                }
                if (email) {
                    const db = await connectDb()
                    const currentUser = await db.collection('users').findOne({ email });
                    console.log(currentUser)

                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser
                        }
                    }
                }
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.type = user.type
            }
            return token
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

