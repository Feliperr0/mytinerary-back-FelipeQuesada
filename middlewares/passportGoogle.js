import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        async (accessToken, refreshToken, profile, done) => {
          

            try {
                // Buscar si el usuario se encuentra en la base de datos
                let user = await User.findOne({ email: profile.emails[0].value });
                if (!user) {
                    // Si no existe, creo uno nuevo
                    user = new User({ // Corregido aquí
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        photo: profile.photos[0].value,
                        online: false,
                        password: profile.id
                    });

                    await user.save();
                }

                return done(null, user);

            } catch (error) {
                return done(error, null);
            }
        }
    )
);
