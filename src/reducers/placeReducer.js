export default function placeReducer(places, action) {
  switch (action.type) {
    case "added": {
      for (let p of places) {
        if (p.id === action.id) {
          return [...places];
        }
      }
      return [
        ...places,
        {
          country: action.country,
          id: action.id,
          time: action.time
        },
      ];
    }

    case "deleted": {
      return places.filter((p) => { return p.id !== action.id })
    }

    default: {
      throw new Error("Unknown action:" + action.type);
    }
  }
}
