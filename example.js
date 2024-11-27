import { request } from 'undici';
import Stripe from './Stripe.js';

const useragent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'

const payload = Stripe.createInitPayload(useragent)
const encodedPayload = Buffer.from(encodeURIComponent(JSON.stringify(payload))).toString('base64')

console.log(payload)

const response = await request('https://m.stripe.com/6', {
    method: 'POST',
    headers: {
        'User-Agent': useragent,
    },
    body: encodedPayload
}).then((res) => res.body.json())

console.log(response)