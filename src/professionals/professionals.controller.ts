import { Controller, Post, Body } from '@nestjs/common';
import { ProfessionalProfile } from './professinalProfile.entity';

@Controller('professionals')
export class ProfessionalsController {

  @Post('profile')
  upsertProfile(@Body() body: any) {
    const {
      fullName,
      trade,
      experienceLevel,
      workZone,
      whatsappNumber,
      profileImageUrl,
    } = body;

    // Validación mínima (MVP)
    if (!fullName || !trade || !workZone || !whatsappNumber) {
      return {
        error: 'Missing required fields',
      };
    }

    // Mock professional profile
    const profile = new ProfessionalProfile({
      id: 'mock-professional-id',
      userId: 'mock-user-id',
      fullName,
      trade,
      experienceLevel,
      workZone,
      whatsappNumber,
      profileImageUrl,
      rating: 5,
      reviewsCount: 0,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      id: profile.id,
      fullName: profile.fullName,
      trade: profile.trade,
      workZone: profile.workZone,
      whatsappNumber: profile.whatsappNumber,
      isActive: profile.isActive,
    };
  }

  @Post('search')
  search(@Body() body: any) {
    const { service, location } = body;

    if (!service || !location) {
      return { error: 'service and location are required' };
    }

    // mock data
    return [
      {
        id: 'pro-1',
        fullName: 'Juan Pérez',
        trade: service,
        workZone: location,
        rating: 4.8,
        reviewsCount: 12,
        whatsappNumber: '3411234567',
        profileImageUrl: 'https://via.placeholder.com/150',
      },
    ];
  }
}
