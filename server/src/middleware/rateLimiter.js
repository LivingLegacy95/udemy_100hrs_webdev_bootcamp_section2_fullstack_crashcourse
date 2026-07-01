import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key") // in application "my-limit-key" would be userid so if one user is rate limited all users would not be affected
        if (!success) {
            return res.status(429).json({
                message:"Too many requests, please try again later"
            })
        }

        next()
    } catch (error) {
        console.log("Rate limit error", error)
        next(error)
    }


}

export default rateLimiter