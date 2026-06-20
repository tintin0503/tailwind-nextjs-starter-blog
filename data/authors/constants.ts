export const AUTHORS = {
  QUAN_BUI: 'Quan Bui',
} as const

export type AuthorName = (typeof AUTHORS)[keyof typeof AUTHORS]
