export interface FlatDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  userId: number;
}

export type CreateFlatDTO = Omit<FlatDTO, "id">;
