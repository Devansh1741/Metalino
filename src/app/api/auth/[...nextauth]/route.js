import mongoose from "mongoose";
import NextAuth from "next-auth"
import {User} from '../../../models/user'
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
              username: { label: "Email", type: "email", placeholder: "test@example.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const { email, password } = credentials;
              try {
                await mongoose.connect(process.env.MONGO_URL);
                const user = await User.findOne({email});
      
                if (!user) {
                  throw new Error('No user found with the email');
                }
      
                const passwordOk = bcrypt.compareSync(password, user.password);
                if (!passwordOk) {
                  throw new Error('Invalid password');
                }
      
                return { id: user._id, email: user.email };
              } catch (error) {
                console.error('Error in authorization:', error);
                return null;
              }
            },
          })
    ]
})

export { handler as GET, handler as POST }