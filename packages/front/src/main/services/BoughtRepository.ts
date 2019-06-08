import { firestore } from 'firebase';

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

const toEntity = (doc: firestore.DocumentSnapshot): Bought => {
  const data = doc.data()!;

  return {
    id: doc.id,
    userId: data.userId,
    resourceName: data.resourceName,
    restRate: data.restRate,
    lastUsedAt: data.lastUsedAt.toDate(),
  };
};

export class BoughtRepository {
  private collection = this.db.collection(collectionKey);

  constructor(private db: firebase.firestore.Firestore) {}

  async list(email: string) {
    const qs = await this.collection.where('userId', '==', email).get();
    return qs.docs.map(toEntity);
  }

  create(bought: BoughtBody) {
    this.collection.doc().set(bought);
  }

  update(id: string, bought: Partial<BoughtBody>) {
    return this.collection.doc(id).update(bought);
  }
}
