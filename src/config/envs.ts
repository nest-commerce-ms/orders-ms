import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCTS_MS_PORT: number;
  PRODUCTS_MS_HOST: string;
}

const envsSchema = joi.object({
  PORT: joi.number().required(),
  PRODUCTS_MS_PORT: joi.number().required(),
  PRODUCTS_MS_HOST: joi.string().required(),
})
.unknown(true);

const { error, value } = envsSchema.validate( process.env );


if ( error ) {
  throw new Error(`Config validation error: ${ error.message }`);
}

const envVars:EnvVars = value;


export const envs = {
  PORT: envVars.PORT,
  PRODUCTS_MS_PORT: envVars.PRODUCTS_MS_PORT,
  PRODUCTS_MS_HOST: envVars.PRODUCTS_MS_HOST,
};