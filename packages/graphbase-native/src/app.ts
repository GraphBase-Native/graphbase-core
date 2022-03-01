#!/usr/bin/env node
import { TransformGraphQLSchema } from 'transform-graphql';
import { readSchemaFromFiles, writeSchemaToFile, generateCRUD, generateStucco } from './IO';
import { transformerCRUD } from './transformerCRUD';
import { fieldsArray } from './fieldsArray';

const transformedSchema = TransformGraphQLSchema({
    schema: readSchemaFromFiles(),
    transformers: [transformerCRUD],
});
writeSchemaToFile(transformedSchema);
generateCRUD(fieldsArray);
generateStucco(fieldsArray);

export { mc } from './db/mongoDB/connection';
export { FieldResolveInput, FieldResolveOutput } from 'stucco-js';
export { makeHandler } from './makeHandler';
