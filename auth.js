const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/person");

passport.use(new LocalStrategy(async(userNAME, passWORD, done) => {
    // authentication logic here
       try{
           //  console.log("Recieve credentials", userNAME, passWORD);
             const user = await Person.findOne({username: userNAME});
             if(!user){
              // console.log("user1")
                 return done(null, false, {message: "incorrect userNAME"});
                 
             }
           const isPasswordMatch = await user.comparePassword(passWORD) 
           if(isPasswordMatch){
             // console.log("user2", user)
                  return done(null, user)
           }else{
           //  console.log("user3")
           //  console.log("incorrect password")
             return done(null, false, {message: "incorrect password"});
           }
       }catch(err){
           return done(err);
       }
  }));

  
  module.exports = passport;