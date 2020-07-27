import fs from 'fs'
import path from 'path'

const privateKey = fs.readFileSync(path.resolve(__dirname, './private.key'), 'utf8')
const publicKey = fs.readFileSync(path.resolve(__dirname, './public.key'), 'utf8')

export default {
    privateKey,
    publicKey,
    authOptions: {
        expiresIn: '90s', /* Espira a cada 90 segundos */
        algorithm: 'RS256',
    }
}