// AUTO-GENERATED — Product Module
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class ProductModuleApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a new product. */
  async createProduct(data: T.CreateProductRequest): Promise<T.ProductResponseDto> {
    const res = await this.client.post<T.ProductResponseDto>(`/api/v1/products`, data);
    return res.data;
  }

  /** Gets a product by identifier. */
  async getProductById(id: string): Promise<T.ProductResponseDto> {
    const res = await this.client.get<T.ProductResponseDto>(`/api/v1/products/${id}`);
    return res.data;
  }
}
