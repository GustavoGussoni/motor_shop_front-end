export interface iFormAnnoucement {
  name_car: string;
  brand: string;
  model: string;
  year: number;
  fuel: number;
  kilometers: number;
  color: string;
  price_fipe: number;
  price: number;
  description?: string;
  cover_image: string;
  is_activate?: true;
  image_gallery?: iImageGallery[];
}

interface iImageGallery {
  image: string;
}
