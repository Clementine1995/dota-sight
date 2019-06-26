export interface HeroType {
  name: string,
  nameEn: string,
  ability: string,
  icon: string,
  tags: string[]
}

export interface ItemType {
  id: number,
  name: string,
  nameEn: string,
  isBasic: boolean,
  icon: string,
  sellSite: string[],
  recipe?: number[]
}