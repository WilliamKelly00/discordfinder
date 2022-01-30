import {Client, Entity, Schema, Repository} from 'redis-om';

const client = new Client();

async function connect(){
    if(!client.isOpen()){
        await client.open(process.env.REDIS_URL);
    }
}

class Server extends Entity {}
let schema = new Schema(
  Server,
  {
    Name: { type: 'string' , textSearch: true },
    Link: { type: 'string' },
    image: { type: 'string' },
    description: { type: 'string', textSearch: true },
  },
  {
    dataStructure: 'JSON',
  }
);

export async function createServer(data) {
    await connect();
  
    const repository = new Repository(schema, client);
  
    const server = repository.createEntity(data);
  
    const id = await repository.save(server);
    return id;
}
export async function createIndex(){
    await connect();
    const repository = new Repository(schema, client);
    await repository.createIndex();
}

export async function searchServers(q){
  await connect();
  const repository = new Repository(schema, client);
 
  const results = await repository.search()
    .where('make').eq(q)
    .or('model').eq(q)
    .or('description').matches(q)
    .returnAll();

  return results;
}