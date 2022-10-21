export default function reducer(ideas, action) {
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
            title: action.updatedTitle,
            text: action.updatedText,
            updated: true,
            time: Date.now(),
          }
        }
        return idea
      })

    //

    default:
      return ideas
  }
}
