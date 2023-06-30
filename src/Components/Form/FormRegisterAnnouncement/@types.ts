export interface iFormAnnouncement {
  brand: string;
  model: string;
  year: string;
  fuel: number;
  kilometers: number;
  color: string;
  price_fipe: number;
  price: number;
  description?: string;
  cover_image: string;
  is_activate?: boolean;
  image_gallery?: iImageGallery[];
}

interface iImageGallery {
  image: string;
}
