export type TProduct = {
  id?: number | string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: TProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: TProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: TProductMeta;
  images: string[];
  thumbnail: string;
};

export type TProducts = {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
};

export type TProductDimensions = {
  width: number;
  height: number;
  depth: number;
};

export type TProductReview = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type TProductReviews = TProductReview[];

export type TProductMeta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type TProductDeleted = {
  product: TProduct;
  isDeleted: boolean;
  deletedOn: string;
};
