const collectionKey = 'arukiga_resource';

export interface ResourceBody {
  name: string;
  rate: number;
}
export interface Resource extends ResourceBody {
  id: string;
}

export class ResourceRepository {
  private collection = this.db.collection(collectionKey);

  constructor(private db: firebase.firestore.Firestore) {}

  list() {
    return this.collection.get();
  }
  create(resource: ResourceBody) {
    this.collection.doc().set(resource);
  }
}
