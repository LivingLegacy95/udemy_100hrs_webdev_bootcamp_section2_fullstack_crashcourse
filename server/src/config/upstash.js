import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import dotenv from 'dotenv';

dotenv.config();

// create a ratelimiter that only allows "x" amount of requests per "x" amount of seconds.
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "20 s") // 100 request per "60s"
})

export default ratelimit;