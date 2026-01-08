export class CustomerProfile {
  id: string;
  userId: string;

  selectedService: string;
  location: string;

  createdAt: Date;
  updatedAt: Date;

  constructor(partial?: Partial<CustomerProfile>) {
    Object.assign(this, partial);
  }
}