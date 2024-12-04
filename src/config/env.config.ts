import 'dotenv/config';
import Joi, * as joi from 'joi';

interface EnvVars{
    PORT: number,
    MONGODB: string,
}

const envSchema = joi.object({
    PORT: joi.number().default(3001),
    MONGODB: joi.string().required()
})
.unknown(true);
const {error,value} = envSchema.validate(process.env)

if (error){
    throw new Error(`Config validation error: ${ error.message}`);
}
const EnvVars: EnvVars = value;

export const envs = {
    port: EnvVars.PORT,
    mongodb: EnvVars.MONGODB,
}