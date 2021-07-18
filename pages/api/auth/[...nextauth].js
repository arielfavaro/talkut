import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],

    secret: process.env.SECRET,

    // database: process.env.DATABASE_URL,
    database: {
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        synchronize: true
    },

    pages: {
        signIn: '/auth/login',
    },

    session: {
        jwt: true,

        // TODO
        // // A secret to use for key generation - you should set this explicitly
        // // Defaults to NextAuth.js secret if not explicitly specified.
        // // This is used to generate the actual signingKey and produces a warning
        // // message if not defined explicitly.
        // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
        // // You can generate a signing key using `jose newkey -s 512 -t oct -a HS512`
        // // This gives you direct knowledge of the key used to sign the token so you can use it
        // // to authenticate indirectly (eg. to a database driver)
        // signingKey: {
        //     kty: "oct",
        //     kid: "Dl893BEV-iVE-x9EC52TDmlJUgGm9oZ99_ZL025Hc5Q",
        //     alg: "HS512",
        //     k: "K7QqRmJOKRK2qcCKV_pi9PSBv3XP0fpTu30TP8xn4w01xR3ZMZM38yL2DnTVPVw6e4yhdh0jtoah-i4c_pZagA"
        // },
        // // If you chose something other than the default algorithm for the signingKey (HS512)
        // // you also need to configure the algorithm
        // verificationOptions: {
        //     algorithms: ['HS256']
        // },
        // // Set to true to use encryption. Defaults to false (signing only).
        // encryption: true,
        // encryptionKey: "",
        // // decryptionKey: encryptionKey,
        // decryptionOptions: {
        //     algorithms: ['A256GCM']
        // },
    },

    callbacks: {
        // TODO verify security risks
        async jwt(token, user, account, profile, isNewUser) {
            // Add access_token to the token right after signin
            if (account?.accessToken) {
                token.accessToken = account.accessToken
            }
            return token
        },
        async session(session, user) {
            session.accessToken = user.accessToken
            return session
        },
    },

    debug: process.env.DEBUG ?? false,
})