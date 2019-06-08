const collectionKey = 'arukiga_bought';

export interface BoughtBody {
  userId: string;
  resourceName: string; // todo: make relation to `arukiga_resource`
  restRate: number;
  lastUsedAt: Date;
}

export interface Bought extends BoughtBody {
  id: string;
}

export class BoughtRepository {
  private collection = this.db.collection(collectionKey);

  constructor(private db: firebase.firestore.Firestore) {}

  list() {
    return this.collection.get();
  }

  create(bought: BoughtBody) {
    this.collection.doc().set(bought);
  }
}
