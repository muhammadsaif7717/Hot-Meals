import connectDb from "../../../../../lib/connectDb"

export const POST = async (request) => {
    try {
        const db = await connectDb();
        const usersCollection = db.collection('users');
        const newUser = await request.json();
        const res = await usersCollection.insertOne(newUser);
        return Response.json({ message: "New user created",res })
    }
    catch (err) {
        return Response.json({ message: "Something went worng" })
    }
}