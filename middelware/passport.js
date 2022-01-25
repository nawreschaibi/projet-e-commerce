// const { authenticate } = require("passport");
// const passport= require("passport");
// const User = require("../models/user");

// var JwtStrategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;
// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey =process.env.Secretorkey;

// passport.use(
//     new JwtStrategy(opts, async (jwt_payload, done) =>{
//         try {
//             const user = await User.findone({_id:jwt_payload._id}).select(
//                 "-passport"
//             );
//             user? done(null,user) :done (null,false);

//         } catch (error) {
//             console.log(error);
//         }
//     })
// );

// module.exports = isAuth = ()=>
// passport.authenticate("jwt" ,{session:false});
const User = require("../models/user");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.Secretorkey;

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload._id }).select(
        "-password"
      );
      user ? done(null, user) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });