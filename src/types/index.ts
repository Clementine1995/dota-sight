/** @format */

export interface HeroType {
  name: string
  nameEn: string
  ability: string
  icon: string
  tags: string[]
}

interface RecipeType {
  name: string
  icon: string
}

export interface ItemType {
  id: number
  name: string
  nameEn: string
  isBasic: boolean
  icon: string
  sellSite: string[]
  recipes?: RecipeType[]
  compose?: RecipeType[]
  desc: string
  price: number
}

export interface AjaxResponse {
  code: number
  data: any
  message: string
}
