export interface IQuestion {
  id: number
  topicId: number
  testCode: number
  order: number
  text: string
  image: string
  explain: string
  isCritical: boolean
  answer: IAnswer[]
  userAnswer?: number
}

export interface IAnswer {
  text: string
  isCorrect: boolean
}

export interface ISign {
  id: number
  topicId: number
  title: string
  description: string
  image: string
}

export interface ILaw {
  id: number,
  violation: string,
  entities: string,
  penalties: string,
  additionalPenalties: string,
  remedial: string,
  note: string,
  vehicleCode: number,
  topicId: number,
  bookmarks: ILawBookmark[]
}

export interface ILawBookmark {
  code: string
  text: string
}

export interface ITopic {
  id: number,
  text: string
}

export interface IResult {
  isPass: boolean
  score: number
  text: string
}

