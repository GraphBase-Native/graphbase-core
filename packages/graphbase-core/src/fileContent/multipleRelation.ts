export const fillMultipleRelation = (fildName: string) => `/* DO NOT EDIT - generated */
import { ${fildName}Model } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

const multipleRelationsHandler = (db: Db) => (input: FieldResolveInput) =>
  db
    .collection<${fildName}Model>('${fildName}')
    .find(_id : { $in : input.source.map.(s => new ObjectId(s)) })
    .toArray()
    .then((res) => res.map((i) => ({ ...i, _id: i._id.toString() })));

export const handler = makeHandler({ handlerFactory: multipleRelationsHandler });

`;
