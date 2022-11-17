import sort from './sort'
import { ActionType, IdeasType } from '../types'

export default function reducer(ideas: IdeasType[], action: ActionType) {
  switch (action.type) {
    //

    case 'submit':
      return [
        ...ideas,
        {
          title: action.title,
          text: action.text,
          id: action.id,
          time: Date.now(),
          updated: false,
        },
      ]

    //

    case 'update':
      return ideas.map((idea) => {
        if (action.id === idea.id) {
          return {
            ...idea,
            title: action.title,
            text: action.text,
            updated: true,
            time: Date.now(),
          }
        }
        return idea
      })

    //

    case 'sort':
      return sort(action.sortType, ideas)

    //

    case 'delete':
      return ideas.filter((idea) => idea.id !== action.id)

    //
    case 'setIdeas':
      return [
        ...ideas,
        {
          title: action.title,
          text: action.text,
          id: action.id,
          time: action.time,
          updated: action.updated,
        },
      ]
    default:
      return ideas
  }
}
