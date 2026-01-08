export class Review {
  id: string;

  professionalId: string;
  customerId: string;

  rating: number;      // 1 a 5
  comment?: string;

  createdAt: Date;

  constructor(partial?: Partial<Review>) {
    Object.assign(this, partial);
  }
}
