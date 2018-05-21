const a = {
  HINDI: {
    ALL: ["2", "3"],
    HI_X_64_47: ["2191", "2298"],
    HI_X_64_24: ["2191", "2298"],
    HI_X_64_41: ["2191", "2298"],
    HI_X_64_62: ["2191", "2298"],
  },
  ENGLISH: {
    ALL: ["2", "3"],
    EN_X_64_47: ["2191", "2298"],
    EN_X_64_24: ["2191", "2298"],
    EN_X_64_41: ["2191", "2298"],
    EN_X_64_62: ["2191", "2298"],
  },
  MALAYALAM: {
    ALL: ["2", "3"],
    ML_X_64_47: ["2191", "2298"],
    ML_X_64_24: ["2191", "2298"],
    ML_X_64_41: ["2191", "2298"],
    ML_X_64_62: ["2191", "2298"],
  },
};

let langs = Object.keys(a);

const m = langs.map(lang => {
  const ques = Object.keys(a[lang]);
  return ques.reduce((acc, q) => {
    let intmd = a[lang][q].map(e => `${lang},${q},${e}\n`)
    return [...acc,...intmd];
  },[])
});

m