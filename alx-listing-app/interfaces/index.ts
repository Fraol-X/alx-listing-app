export interface CardDetails {
  beds: number; 
  baths: number; 
  capacity: string; 
  pricePerNight: string; 
}

export interface CardProps {
  title: string; 
  description: string; 
  imageUrl: string; 
  rating?: number; 
  details?: CardDetails; 
}
