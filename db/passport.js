const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { getUser, getUserById } = require("../controllers/indexController");
const utils = require("../controllers/utils");


passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
        try {
            const user = await getUser(email);
            if (!user) {
                return done(null, false);
            }

            const isValid = await utils.validatePassword(password, user.password);

            if (!isValid) {
                return done(null, false, { message: "invalid password"})
            }

            return done(null, user);

        } catch (error) {
            console.error("Error", error)
            return done(error)
        }
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser( async (id, done) => {
    try {
        const user = await getUserById(id);
        done(null, user);
    } catch (error) {
        done(error)
    }
})
