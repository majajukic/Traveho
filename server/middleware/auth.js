import jwt from 'jsonwebtoken';

//What middleware does:
//User wants to like a post => auth.middlewre(NEXT) checks if the user has the right autorization => like controller

//next - do something and move to the next thing
const auth = async (req, res, next) => {
    try {
    //checking to see if the user is who he claims to be using jsonwebtoken:
        const token = req.headers.Authorization.split(" ")[1];//split credentials by blank and onlz take token from the array.
        const isCustomAuth = toke.length < 500;//if the length of a token is less then 500, it is custom and not google oath.

        let decodedData; //data that we want to get from the token
        
        //getting the user id in customauth:
        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, "test");

            req.userId = decodedData?.id;
        //getting the user id in googleauth:    
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;//googles name for specific id that differs for each user (simmilar to id)
        }
        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;