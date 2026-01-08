export class ProfessionalProfile {
  id: string;
  userId: string;

  fullName: string;
  trade: string;
  experienceLevel: string;
  workZone: string;

  whatsappNumber: string;
  profileImageUrl: string;

  rating: number;
  reviewsCount: number;

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;

  constructor(partial?: Partial<ProfessionalProfile>) {
    Object.assign(this, partial);
  }
}
