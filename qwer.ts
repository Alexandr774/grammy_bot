import {createECDH, createHash, randomUUID} from "node:crypto";
import { faker } from '@faker-js/faker'

const ecdh = createECDH('secp256k1')
            ecdh.generateKeys()
const publicKey = ecdh.getPublicKey(null, 'compressed')
const keccakHash = createHash('sha3-256').update(publicKey).digest()

const res = `0x${keccakHash.subarray(-20).toString('hex')}`


const qwe = faker.string.hexadecimal({ length: 64, casing: 'lower' })

const qaz = Buffer.from(randomUUID().replace(/-/g, ''), 'hex').toString(
                'base64url')


console.log(res, qwe, qaz)