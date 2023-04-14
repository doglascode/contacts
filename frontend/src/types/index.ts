export interface ContactProps {
  _id: string;
  name: string;
  phone?: string;
  category?: string;
  email?: string;
  imagePath?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  image?: File | string;
}
