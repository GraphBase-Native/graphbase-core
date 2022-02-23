import fs from 'fs';
export const readSchemaFromFiles = (path?: string) => {
    const pathToSchema = path || 'input_schema.graphql';
    return fs.readFileSync(pathToSchema, 'utf-8');
};
export const writeSchemaToFile = (data: string) => {
    fs.writeFile('schema.graphql', data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};

export const writeModelToFile = (model: string) => {
    fs.appendFile('src/generated/model.ts', model + '\n', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};
