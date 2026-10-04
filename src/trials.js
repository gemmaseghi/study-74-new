export const commonQuestions = {
  emotion: {
    question: "Wie fühlt sie sich in diesem Moment?",
    options: [
      {
        id: "happy",
        image: "./Mom_happy.png"
      },
      {
        id: "angry",
        image: "./Mom_angry.png"
      }
    ]
  },

  why: {
    question: "Warum hat die Mutter das gesagt?"
  },

  difficulty: {
    question: (age) =>
      "Wie schwierig ist es deiner Meinung nach für ein " +
      `${age}-jähriges Kind, die Aussage der Mutter in dieser Situation zu verstehen?`,
    min: 0,
    max: 100,
    leftLabel: "gar nicht schwierig",
    rightLabel: "sehr schwierig"
  },

  likelihood: {
    question: (age) =>
      "Wie wahrscheinlich ist es deiner Meinung nach, dass ein " +
      `Elternteil diese Aussage gegenüber einem ${age}-jährigen Kind trifft?`,
    min: 0,
    max: 100,
    leftLabel: "sehr unwahrscheinlich",
    rightLabel: "sehr wahrscheinlich"
  }
};

export const conditions = [
  "irony",
  "praise",
  "criticism",
  "control"
];

export const stories = [
  {
    storyId: 1,
    level: 1,
    latinPosition: 0,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Koffer zu diesem Zeitpunkt gepackt oder leer?",

        options: [
        {
            id: "packed",
            text: "Gepackt"
        },
        {
            id: "empty",
            text: "Leer"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Anna geht in ihr Zimmer und spielt ein Spiel. ` +
          `Ihre Mutter kommt herein und sagt: „Toll gemacht!“`,

        utterance: "Toll gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "packs",
              text: "Anna packt ihren Koffer",
              correct: true
            },
            {
              id: "plays",
              text: "Anna spielt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "empty",
          whyTrigger: "empty"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Marie fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Marie geht in ihr Zimmer und packt ihren Koffer. ` +
          `Als sie den gepackten Koffer gerade geschlossen hat, ` +
          `kommt ihre Mutter herein und sagt: „Toll gemacht!“`,

        utterance: "Toll gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "plays_after_packing_marie",
              text:
                "Marie spielt mit ihrer Puppe",
              correct: true
            },
            {
              id: "gets_more_stuff_marie",
              text:
                "Marie holt noch weitere Sachen aus dem Schrank",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "packed",
          whyTrigger: "empty"
        }
      },

      criticism: {
      childImage: "./Marie.jpg",
        condition: "criticism",

        storyText:
          `Marie fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Marie geht in ihr Zimmer und spielt mit ihrer Puppe. ` +
          `Ihre Mutter kommt herein und sagt: ` +
          `„Du hast deinen Koffer noch nicht gepackt!“`,

        utterance: "Du hast deinen Koffer noch nicht gepackt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "packs_marie",
              text: "Marie packt ihren Koffer",
              correct: true
            },
            {
              id: "plays_marie",
              text: "Marie spielt weiter mit ihrer Puppe",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "empty",
          whyTrigger: "packed"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Anna fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Anna geht in ihr Zimmer und spielt ein Spiel. ` +
          `Ihre Mutter kommt herein und sagt: ` +
          `„Mein Koffer ist schon gepackt. Kommm, wir fangen jetzt gemeinsam mit deinem an.“`,

        utterance:
          "Mein Koffer ist schon gepackt. Kommm, wir fangen jetzt gemeinsam mit deinem an.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_together",
              text: "Anna und ihre Mutter packen gemeinsam den Koffer",
              correct: true
            },
            {
              id: "plays",
              text: "Anna spielt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "empty",
          whyTrigger: "packed"
        }
      }
    }
  },
  {
    storyId: 2,
    level: 1,
    latinPosition: 1,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Sind die Hausaufgaben zu diesem Zeitpunkt gemacht oder nicht gemacht?",

        options: [
        {
            id: "done",
            text: "Gemacht"
        },
        {
            id: "not_done",
            text: "Nicht gemacht"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Nach dem Mittagessen sagt seine Mutter zu Tobi: „Bitte ` +
          `mach jetzt deine Hausaufgaben.“ Tobi geht in sein Zimmer, ` +
          `stellt seine Schultasche in die Ecke und fängt an, auf seinem ` +
          `Computer ein Videospiel zu spielen. Seine Mutter kommt herein ` +
          `und sagt: „Sehr gut gemacht!“`,

        utterance: "Sehr gut gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "homework",
              text: "Tobi macht seine Hausaufgaben",
              correct: true
            },
            {
              id: "videogame",
              text: "Tobi spielt das Videospiel weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_done",
          whyTrigger: "not_done"
        }
      },

      praise: {
      childImage: "./Tobi.jpg",
        condition: "praise",

        storyText:
          `Nach dem Mittagessen sagt seine Mutter zu Tobi: „Bitte ` +
          `mach jetzt deine Hausaufgaben.“ Tobi geht in sein Zimmer ` +
          `und macht seine Hausaufgaben. Seine Mutter kommt herein, ` +
          `als er gerade mit allen Hausaufgaben fertig geworden ist ` +
          `und sein Buch zuklappt. Sie sagt: „Sehr gut gemacht!“`,

        utterance: "Sehr gut gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "now_videogame",
              text:
                "Tobi spielt ein Videospiel",
              correct: true
            },
            {
              id: "more_homework",
              text:
                "Tobi macht noch weitere Aufgaben",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "done",
          whyTrigger: "not_done"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Nach dem Mittagessen sagt seine Mutter zu Tobi: „Bitte ` +
          `mach jetzt deine Hausaufgaben.“ Tobi geht in sein Zimmer, ` +
          `stellt seine Schultasche in die Ecke und fängt an, auf seinem ` +
          `Computer ein Videospiel zu spielen. Seine Mutter kommt herein ` +
          `und sagt: „Du hast deine Hausaufgaben noch nicht gemacht!“`,

        utterance: "Du hast deine Hausaufgaben noch nicht gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "homework",
              text: "Tobi macht seine Hausaufgaben",
              correct: true
            },
            {
              id: "videogame",
              text: "Tobi spielt das Videospiel weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_done",
          whyTrigger: "done"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Nach dem Mittagessen sagt seine Mutter zu Tobi: „Bitte ` +
          `mach jetzt deine Hausaufgaben.“ Tobi geht in sein Zimmer, ` +
          `stellt seine Schultasche in die Ecke und fängt an, auf seinem ` +
          `Computer ein Videospiel zu spielen. Seine Mutter kommt herein ` +
          `und sagt: „Alles gut! Na komm, wir schauen uns deine Hausaufgaben mal zusammen an.“`,

        utterance:
          "Alles gut! Na komm, wir schauen uns deine Hausaufgaben mal zusammen an.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "homework_together",
              text: "Tobis Mutter hilft ihm mit seinen Hausaufgaben",
              correct: true
            },
            {
              id: "videogame",
              text: "Tobi spielt das Videospiel weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_done",
          whyTrigger: "done"
        }
      }
    }
  },
  {
    storyId: 3,
    level: 1,
    latinPosition: 2,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Tisch zu diesem Zeitpunkt sauber oder angemalt?",

        options: [
        {
            id: "clean",
            text: "Sauber"
        },
        {
            id: "colored",
            text: "Angemalt"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna malt auf dem Esstisch ein Bild. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Kurz darauf ` +
          `hat Anna an mehreren Stellen auf den Tisch gemalt. Ihre Muttter ` +
          `kommt herein und sagt: „Super gemacht!”`,

        utterance: "Super gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe",
              text: "Anna wischt den Tisch sauber",
              correct: true
            },
            {
              id: "color",
              text: "Anna malt weiter ihr Bild",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "colored",
          whyTrigger: "colored"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Marie malt auf dem Esstisch ein Bild aus. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Marie ist ` +
          `sehr vorsichtig unhd malt ihr Bild aus, ohne dabei auf den ` +
          `Tisch zu malen. Ihre Mutter kommt herein und sagt: „Super gemacht!”`,

        utterance: "Super gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "color_marie",
              text:
                "Marie malt weiter ihr Bild aus",
              correct: true
            },
            {
              id: "wipe_marie",
              text:
                "Marie wischt den Tisch sauber",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "clean",
          whyTrigger: "colored"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Anna malt auf dem Esstisch ein Bild. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Kurz darauf ` +
          `hat Anna an mehreren Stellen auf den Tisch gemalt. Ihre Muttter ` +
          `kommt herein und sagt: „Du hast den ganzen Tisch angemalt!“`,

        utterance: "Du hast den ganzen Tisch angemalt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe",
              text: "Anna wischt den Tisch sauber",
              correct: true
            },
            {
              id: "color",
              text: "Anna malt weiter ihr Bild",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "colored",
          whyTrigger: "clean"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Anna malt auf dem Esstisch ein Bild. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Kurz darauf ` +
          `hat Anna an mehreren Stellen auf den Tisch gemalt. Ihre Muttter ` +
          `kommt herein und sagt: „Keine Sorge! Ich hole einen Lappen und wir wischen das schnell ab.“`,

        utterance:
          "Keine Sorge! Ich hole einen Lappen und wir wischen das schnell ab.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_together",
              text: "Anna und ihre Mutter wischen den Tisch sauber",
              correct: true
            },
            {
              id: "color",
              text: "Anna malt weiter ihr Bild",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "colored",
          whyTrigger: "clean"
        }
      }
    }
  },
  {
    storyId: 4,
    level: 1,
    latinPosition: 3,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Wurde das Kaninchen zu diesem Zeitpunkt schon gefüttert oder noch nicht gefüttert?",

        options: [
        {
            id: "fed",
            text: "Gefüttert"
        },
        {
            id: "not_fed",
            text: "Nicht gefüttert"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobi macht gerade ein Puzzle. Seine Mutter kommt mit einer ` +
          `Schüssel voller Gemüse herein und stellt sie auf den Tisch. ` +
          `Sie sagt: „Könntest du das bitte dem Kaninchen geben?“ ` +
          `Sie geht wieder und Tobi puzzelt weiter. Als seine Mutter ` +
          `zurückkommt, steht die volle Schüssel immer noch auf dem Tisch. ` +
          `Sie sagt: „Vielen Dank!“`,

        utterance: "Vielen Dank!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "feed",
              text: "Tobi füttert das Kaninchen",
              correct: true
            },
            {
              id: "puzzle",
              text: "Tobi puzzelt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_fed",
          whyTrigger: "not_fed"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Marie macht gerade ein Puzzle. Ihre Mutter kommt mit einer ` +
          `Schüssel voller Gemüse herein und stellt sie auf den Tisch. ` +
          `Sie sagt: „Könntest du das bitte dem Kaninchen geben?“ ` +
          `Sie geht wieder und Marie füttert das Kaninchen. Als ihre ` +
          `Mutter zurückkommt, steht die leere Schüssel auf dem Tisch. ` +
          `Sie sagt: „Vielen Dank!“`,

        utterance: "Vielen Dank!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "puzzle_marie",
              text:
                "Marie puzzelt weiter",
              correct: true
            },
            {
              id: "feed_again_marie",
              text:
                "Marie füttert das Kaninchen erneut",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "fed",
          whyTrigger: "not_fed"
        }
      },

      criticism: {
      childImage: "./Marie.jpg",
        condition: "criticism",

        storyText:
          `Marie macht gerade ein Puzzle. Ihre Mutter kommt mit einer ` +
          `Schüssel voller Gemüse herein und stellt sie auf den Tisch. ` +
          `Sie sagt: „Könntest du das bitte dem Kaninchen geben?“ ` +
          `Sie geht wieder und Marie puzzelt weiter. Als ihre Mutter ` +
          `zurückkommt, steht die volle Schüssel immer noch auf dem Tisch. ` +
          `Sie sagt: „Du hast das Kaninchen nicht gefüttert!“`,

        utterance: "Du hast das Kaninchen nicht gefüttert!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "feed_marie",
              text: "Marie füttert das Kaninchen",
              correct: true
            },
            {
              id: "puzzle_marie",
              text: "Marie puzzelt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_fed",
          whyTrigger: "fed"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Tobi macht gerade ein Puzzle. Seine Mutter kommt mit einer ` +
          `Schüssel voller Gemüse herein und stellt sie auf den Tisch. ` +
          `Sie sagt: „Könntest du das bitte dem Kaninchen geben?“ ` +
          `Sie geht wieder und Tobi puzzelt weiter. Als seine Mutter ` +
          `zurückkommt, steht die volle Schüssel immer noch auf dem Tisch. ` +
          `Sie sagt: „Nicht so schlimm! Komm, wir schauen mal zusammen zum Kaninchen. ` +
          `Das hat bestimmt schon Hunger.“`,

        utterance:
          "Nicht so schlimm!Komm, wir schauen mal zusammen zum Kaninchen. Das hat bestimmt schon Hunger.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "feed_together",
              text: "Tobi und seine Mutter füttern das Kaninchen",
              correct: true
            },
            {
              id: "puzzle",
              text: "Tobi puzzelt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_fed",
          whyTrigger: "fed"
        }
      }
    }
  },
  {
    storyId: 5,
    level: 2,
    latinPosition: 0,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Tisch zu diesem Zeitpunkt gedeckt oder ungedeckt?",

        options: [
        {
            id: "set",
            text: "Gedeckt"
        },
        {
            id: "not_set",
            text: "Ungedeckt"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna schaut fern, während ihre Mutter das Abendessen zubereitet. ` +
          `Die Mutter kommt ins Wohnzimmer und sagt zu Anna: „Das Abendessen ` +
          `ist bald fertig. Bitte deck schon mal den Tisch.“ ` +
          `Anna bleibt vor dem Fernseher sitzen. Als das Essen fertig ist, ` +
          `läuft ihre Mutter ins Esszimmer und sieht, dass der Tisch noch nicht gedeckt ist. ` +
          `Sie sagt: „Alles ist bereit fürs Abendessen!“`,

        utterance: "Alles ist bereit fürs Abendessen!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "set_table",
              text: "Anna deckt den Tisch",
              correct: true
            },
            {
              id: "sit",
              text: "Anna und ihre Mutter setzen sich an den ungedeckten Tisch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_set",
          whyTrigger: "not_set"
        }
      },

      praise: {
      childImage: "./Anna.jpg",
        condition: "praise",

        storyText:
          `Anna schaut fern, während ihre Mutter das Abendessen zubereitet. ` +
          `Die Mutter kommt ins Wohnzimmer und sagt zu Anna: „Das Abendessen ` +
          `ist bald fertig. Bitte deck schon mal den Tisch.“ ` +
          `Anna deckt den Tisch. Als das Essen fertig ist, ` +
          `läuft ihre Mutter ins Esszimmer und sieht, dass der Tisch gedeckt ist. ` +
          `Sie sagt: „Alles ist bereit fürs Abendessen!“`,

        utterance: "Alles ist bereit fürs Abendessen!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "sit_set_table",
              text:
                "Anna und ihre Mutter setzen sich an den Tisch",
              correct: true
            },
            {
              id: "set_table_again",
              text:
                "Anna holt noch mehr Geschirr",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "set",
          whyTrigger: "not_set"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Anna schaut fern, während ihre Mutter das Abendessen zubereitet. ` +
          `Die Mutter kommt ins Wohnzimmer und sagt zu Anna: „Das Abendessen ` +
          `ist bald fertig. Bitte deck schon mal den Tisch.“ ` +
          `Anna bleibt vor dem Fernseher sitzen. Als das Essen fertig ist, ` +
          `läuft ihre Mutter ins Esszimmer und sieht, dass der Tisch noch nicht gedeckt ist. ` +
          `Sie sagt: „Der Tisch ist nicht gedeckt!“`,

        utterance: "Der Tisch ist nicht gedeckt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "set_table",
              text: "Anna deckt den Tisch",
              correct: true
            },
            {
              id: "sit",
              text: "Anna und ihre Mutter setzen sich an den ungedeckten Tisch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_set",
          whyTrigger: "set"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Anna schaut fern, während ihre Mutter das Abendessen zubereitet. ` +
          `Die Mutter kommt ins Wohnzimmer und sagt zu Anna: „Das Abendessen ` +
          `ist bald fertig. Bitte deck schon mal den Tisch.“ ` +
          `Anna bleibt vor dem Fernseher sitzen. Als das Essen fertig ist, ` +
          `läuft ihre Mutter ins Esszimmer und sieht, dass der Tisch noch nicht gedeckt ist. Sie sagt: ` +
          `„Keine Sorge. Komm, wir decken den Tisch jetzt zusammen und dann können wir auch schon essen.“`,

        utterance:
          "Keine Sorge. Komm, wir decken den Tisch jetzt zusammen und dann können wir auch schon essen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "set_table_together",
              text: "Anna und ihre Mutter decken den Tisch",
              correct: true
            },
            {
              id: "sit",
              text: "Anna und ihre Mutter setzen sich an den ungedeckten Tisch",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_set",
          whyTrigger: "set"
        }
      }
    }
  },
  {
    storyId: 6,
    level: 2,
    latinPosition: 1,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist die Tasche zu diesem Zeitpunkt leer oder gepackt?",

        options: [
        {
            id: "bag_packed",
            text: "Gepackt"
        },
        {
            id: "bag_empty",
            text: "Leer"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Es ist schon spät am Abend und Tobis Mutter sagt: „Bitte pack ` +
          `deine Schultasche für morgen.“ Tobi geht in sein Zimmer und fängt an, ` +
          `ein Buch zu lesen. Seine Mutter kommt ins Zimmer und sieht, dass ` +
          `Tobis Schulbücher noch alle auf seinem Schreibtisch liegen. Sie sagt: ` +
          `„Du hast alle deine Sachen gepackt!“`,


        utterance: "Du hast alle deine Sachen gepackt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_bag",
              text: "Tobi packt seine Schultasche",
              correct: true
            },
            {
              id: "read",
              text: "Tobi liest weiter sein Buch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "bag_empty",
          whyTrigger: "bag_empty"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Es ist schon spät am Abend und Maries Mutter sagt: „Bitte pack ` +
          `deine Tasche für den Kindergarten morgen.“ Marie geht in ihr Zimmer und räumt ` +
          `ihre Brotzeitdose und ein paar Bilderbücher in ihre Tasche. Ihre Mutter kommt ins Zimmer ` +
          `und sieht, dass die Tasche fertig gepackt neben dem Schreibtisch ` +
          `steht. Sie sagt: „Du hast alle deine Sachen gepackt!“`,

        utterance: "Du hast alle deine Sachen gepackt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "read_book_marie",
              text:
                "Marie schaut ein Bilderbuch an",
              correct: true
            },
            {
              id: "pack_bag_more_marie",
              text:
                "Marie holt noch mehr Bilderbücher und packt sie in ihre Tasche",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "bag_packed",
          whyTrigger: "bag_empty"
        }
      },

      criticism: {
      childImage: "./Marie.jpg",
        condition: "criticism",

        storyText:
          `Es ist schon spät am Abend und Maries Mutter sagt: „Bitte pack ` +
          `deine Tasche für den Kindergarten morgen.“ Marie geht in ihr Zimmer und fängt an, ` +
          `ein Bilderbuch anzuschauen. Ihre Mutter kommt ins Zimmer und sieht, dass ` +
          `Maries Brotzeitdose und Bilderbücher noch auf dem Boden liegen. Sie sagt: ` +
          `„Du hast deine Tasche nicht gepackt!“`,

        utterance: "Du hast deine Tasche nicht gepackt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_bag_marie",
              text: "Marie packt ihre Tasche",
              correct: true
            },
            {
              id: "read_marie",
              text: "Marie schaut weiter ihr Buch an",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "bag_empty",
          whyTrigger: "bag_packed"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Es ist schon spät am Abend und Tobis Mutter sagt: „Bitte pack ` +
          `deine Schultasche für morgen.“ Tobi geht in sein Zimmer und fängt an, ` +
          `ein Buch zu lesen. Seine Mutter kommt ins Zimmer und sieht, dass ` +
          `Tobis Schulbücher noch alle auf seinem Schreibtisch liegen. Sie sagt: ` +
          `„Ich habe deine Trinkflasche aufgefüllt. Die können wir auch gleich ` +
          `in deine Schultasche packen.“`,

        utterance:
          "Ich habe deine Trinkflasche aufgefüllt. Die können wir auch gleich in deine Schultasche packen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_bag_together",
              text: "Tobi und seine Mutter packen die Schultasche",
              correct: true
            },
            {
              id: "read",
              text: "Tobi liest weiter sein Buch",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "bag_empty",
          whyTrigger: "bag_packed"
        }
      }
    }
  },
  {
    storyId: 7,
    level: 2,
    latinPosition: 2,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Trägt Anna zu diesem Zeitpunkt ihren Schlafanzug oder ihre normale Kleidung?",

        options: [
        {
            id: "pajamas",
            text: "Schlafanzug"
        },
        {
            id: "clothes",
            text: "Normale Kleidung"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna spielt in ihrem Zimmer. Sie trägt noch ihre normale Kleidung. Ihre Mutter kommt herein und sagt: ` +
          `„Es ist wirklich schon spät und morgen ist Schule. Bitte mach dich fertig fürs Bett.“ Ihre Mutter ` +
          `geht wieder hinaus und Anna spielt weiter. Als Annas Mutter zurückkommt, ` +
          `sagt sie: „Du bist ja schon bettfertig!“`,

        utterance: "Du bist ja schon bettfertig!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "brush_teeth",
              text: "Anna putzt sich im Schlafanzug die Zähne",
              correct: true
            },
            {
              id: "bed_clothes",
              text: "Anna legt sich mit ihrer normalen Kleidung ins Bett",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "clothes",
          whyTrigger: "clothes"
        }
      },

      praise: {
      childImage: "./Anna.jpg",
        condition: "praise",

        storyText:
          `Anna spielt in ihrem Zimmer. Sie trägt noch ihre normale Kleidung. Ihre Mutter kommt herein und sagt: ` +
          `„Es ist wirklich schon spät und morgen ist Schule. Bitte mach dich fertig fürs Bett.“ Ihre Mutter ` +
          `geht wieder hinaus. Anna zieht ihren Schlafanzug an und putzt sich die ` +
          `Zähne. Als Annas Mutter zurückkommt, sagt sie: „Du bist ja schon bettfertig!“`,

        utterance: "Du bist ja schon bettfertig!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "bed",
              text:
                "Anna legt sich ins Bett",
              correct: true
            },
            {
              id: "brush_teeth_again",
              text:
                "Anna putzt sich erneut die Zähne",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "pajamas",
          whyTrigger: "clothes"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Anna spielt in ihrem Zimmer. Sie trägt noch ihre normale Kleidung. Ihre Mutter kommt herein und sagt: ` +
          `„Es ist wirklich schon spät und morgen ist Schule. Bitte mach dich fertig fürs Bett.“ Ihre Mutter ` +
          `geht wieder hinaus und Anna spielt weiter. Als Annas Mutter zurückkommt, ` +
          `sagt sie: „Du bist ja noch gar nicht bettfertig!“`,

        utterance: "Du bist ja noch gar nicht bettfertig!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "brush_teeth",
              text: "Anna putzt sich im Schlafanzug die Zähne",
              correct: true
            },
            {
              id: "bed_clothes",
              text: "Anna legt sich mit ihrer normalen Kleidung ins Bett",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "clothes",
          whyTrigger: "pajamas"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Anna spielt in ihrem Zimmer. Sie trägt noch ihre normale Kleidung. Ihre Mutter kommt herein und sagt: ` +
          `„Es ist wirklich schon spät und morgen ist Schule. Bitte mach dich fertig fürs Bett.“ Ihre Mutter ` +
          `geht wieder hinaus und Anna spielt weiter. Als Annas Mutter zurückkommt, ` +
          `sagt sie: „Ich bin auch schon ganz müde. Wir können uns zusammen umziehen ` +
          `und unsere Zähne putzen.“`,

        utterance:
          "Ich bin auch schon ganz müde. Wir können uns zusammen umziehen und unsere Zähne putzen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "brush_teeth_together",
              text: "Anna und ihre Mutter putzen sich im Schlafanzug die Zähne",
              correct: true
            },
            {
              id: "bed_clothes",
              text: "Anna legt sich mit ihrer normalen Kleidung ins Bett",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "clothes",
          whyTrigger: "pajamas"
        }
      }
    }
  },
  {
    storyId: 8,
    level: 2,
    latinPosition: 3,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Teller zu diesem Zeitpunkt in der Spülmaschine oder auf dem Tisch?",

        options: [
        {
            id: "dishwasher",
            text: "In der Spülmaschine"
        },
        {
            id: "table",
            text: "Auf dem Tisch"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobis Mutter hat etwas zu essen für ihn vorbereitet. Sie sagt: „Wenn ` +
          `du fertig gegessen hast, räum den Teller bitte in die Spülmaschine.“ ` +
          `Tobi nickt und fängt an zu essen. Als er fertig ist, lässt er den Teller ` +
          `auf dem Tisch stehen und spielt ein Spiel. Seine Mutter kommt ` +
          `zurück und sagt: „Du bist eine große Hilfe!“`,

        utterance: "Du bist eine große Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_in_dishwasher",
              text: "Tobi räumt den Teller in die Spülmaschine",
              correct: true
            },
            {
              id: "play_with_toys",
              text: "Tobi spielt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "table",
          whyTrigger: "table"
        }
      },

      praise: {
      childImage: "./Tobi.jpg",
        condition: "praise",

        storyText:
          `Tobis Mutter hat etwas zu essen für ihn vorbereitet. Sie sagt: „Wenn ` +
          `du fertig gegessen hast, räum den Teller bitte in die Spülmaschine.“ ` +
          `Tobi nickt und fängt an zu essen. Als er fertig ist, räumt er seinen Teller ` +
          `in die Spülmaschine. Seine Mutter kommt zurück und sagt: ` +
          `„Du bist eine große Hilfe!“`,

        utterance: "Du bist eine große Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "play_toys",
              text:
                "Tobi spielt ein Spiel",
              correct: true
            },
            {
              id: "put_in_dishwasher_more",
              text:
                "Tobi räumt weitere Teller in die Spülmaschine",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "dishwasher",
          whyTrigger: "table"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobis Mutter hat etwas zu essen für ihn vorbereitet. Sie sagt: „Wenn ` +
          `du fertig gegessen hast, räum den Teller bitte in die Spülmaschine.“ ` +
          `Tobi nickt und fängt an zu essen. Als er fertig ist, lässt er den Teller ` +
          `auf dem Tisch stehen und spielt ein Spiel. Seine Mutter kommt ` +
          `zurück und sagt: „Du bist keine große Hilfe!“`,

        utterance: "Du bist keine große Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_in_dishwasher",
              text: "Tobi räumt den Teller in die Spülmaschine",
              correct: true
            },
            {
              id: "play_with_toys",
              text: "Tobi spielt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "table",
          whyTrigger: "dishwasher"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Tobis Mutter hat etwas zu essen für ihn vorbereitet. Sie sagt: „Wenn ` +
          `du fertig gegessen hast, räum den Teller bitte in die Spülmaschine.“ ` +
          `Tobi nickt und fängt an zu essen. Als er fertig ist, lässt er den Teller ` +
          `auf dem Tisch stehen und spielt ein Spiel. Seine Mutter kommt ` +
          `zurück und sagt: „Macht nichts! Komm, wir räumen jetzt die Spülmaschine gemeinsam ein.“`,

        utterance:
          "Macht nichts! Komm, wir räumen jetzt die Spülmaschine gemeinsam ein.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_in_dishwasher_together",
              text: "Tobi und seine Mutter räumen das Geschirr in die Spülmaschine",
              correct: true
            },
            {
              id: "play_with_toys",
              text: "Tobi spielt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "table",
          whyTrigger: "dishwasher"
        }
      }
    }
  },
  {
    storyId: 9,
    level: 3,
    latinPosition: 0,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist das Sofa zu diesem Zeitpunkt vollgebröselt oder sauber?",

        options: [
        {
            id: "chips",
            text: "Vollgebröselt"
        },
        {
            id: "no_chips",
            text: "Sauber"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobi schaut fern und isst dabei Chips. Er ist auf den Fernseher fokussiert ` +
          `und merkt nicht, dass viele der Chips auf dem Sofa und auf dem Boden landen. ` +
          `Seine Mutter kommt herein und sagt: „Das Sofa sieht sehr sauber aus.“`,

        utterance: "Das Sofa sieht sehr sauber aus.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_sofa",
              text: "Tobi sammelt die Chips auf",
              correct: true
            },
            {
              id: "watch_tv",
              text: "Tobi lässt die Chips liegen unbd schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "chips",
          whyTrigger: "chips"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Marie schaut fern und isst dabei Chips. Beim Essen passt sie gut darauf auf, ` +
          `dass keine Chips auf dem Sofa landen. Ihre Mutter kommt herein und sagt: ` +
          `„Das Sofa sieht sehr sauber aus.“`,

        utterance: "Das Sofa sieht sehr sauber aus.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "watch_tv_marie",
              text:
                "Marie schaut weiter fern",
              correct: true
            },
            {
              id: "clean_sofa_marie",
              text:
                "Marie putzt das Sofa",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_chips",
          whyTrigger: "chips"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobi schaut fern und isst dabei Chips. Er ist auf den Fernseher fokussiert ` +
          `und merkt nicht, dass viele der Chips auf dem Sofa und auf dem Boden landen. ` +
          `Seine Mutter kommt herein und sagt: „Du hast das ganze Sofa vollgebröselt!“`,

        utterance: "Du hast das ganze Sofa vollgebröselt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_sofa",
              text: "Tobi sammelt die Chips auf",
              correct: true
            },
            {
              id: "watch_tv",
              text: "Tobi lässt die Chips liegen und schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "chips",
          whyTrigger: "no_chips"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Tobi schaut fern und isst dabei Chips. Er ist auf den Fernseher fokussiert ` +
          `und merkt nicht, dass viele der Chips auf dem Sofa und auf dem Boden landen. ` +
          `Seine Mutter kommt herein und sagt: „Nicht so schlimm! Komm, wir sammeln die Chips schnell zusammen auf und dann kannst du weiterschauen.“`,

        utterance:
          "Nicht so schlimm! Komm, wir sammeln die Chips schnell zusammen auf und dann kannst du weiterschauen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_sofa_together",
              text: "Tobi und seine Mutter sammeln die Chips auf",
              correct: true
            },
            {
              id: "watch_tv",
              text: "Tobi lässt die Chips liegen und schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "chips",
          whyTrigger: "no_chips"
        }
      }
    }
  },
  {
    storyId: 10,
    level: 3,
    latinPosition: 1,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Boden zu diesem Zeitpunkt trocken oder nass?",

        options: [
        {
            id: "dry",
            text: "Trocken"
        },
        {
            id: "wet",
            text: "Nass"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna will die Blumen auf der Fensterbank gießen. Die Gießkanne ist schwer ` +
          `und Anna verschüttet Wasser auf dem ganzen Boden. Ihre Mutter kommt herein ` +
          `und sagt: „Der Boden ist ja ganz trocken geblieben.“`,

        utterance: "Der Boden ist ja ganz trocken geblieben.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "dry_the_floor",
              text: "Anna wischt den Boden auf",
              correct: true
            },
            {
              id: "water_plants",
              text: "Anna holt neues Wasser und gießt die Blumen weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "wet",
          whyTrigger: "wet"
        }
      },

      praise: {
      childImage: "./Anna.jpg",
        condition: "praise",

        storyText:
          `Anna will die Blumen auf der Fensterbank gießen. Die Gießkanne ist schwer, ` +
          `aber Anna ist sehr vorsichtig, sodass kein einziger Tropfen Wasser auf dem ` +
          `Boden landet. Ihre Mutter kommt herein und sagt: „Der Boden ist ja ganz trocken geblieben.“`,

        utterance: "Der Boden ist ja ganz trocken geblieben.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "water_plants",
              text:
                "Anna holt neues Wasser und gießt die Blumen weiter",
              correct: true
            },
            {
              id: "dry_the_floor",
              text:
                "Anna wischt den Boden auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "dry",
          whyTrigger: "wet"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Anna will die Blumen auf der Fensterbank gießen. Die Gießkanne ist schwer ` +
          `und Anna verschüttet Wasser auf dem ganzen Boden. Ihre Mutter kommt herein ` +
          `und sagt: „Du hast den ganzen Boden nass gemacht!“`,

        utterance: "Du hast den ganzen Boden nass gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "dry_the_floor",
              text: "Anna wischt den Boden auf",
              correct: true
            },
            {
              id: "water_plants",
              text: "Anna holt neues Wasser und gießt die Blumen weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "wet",
          whyTrigger: "dry"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Anna will die Blumen auf der Fensterbank gießen. Die Gießkanne ist schwer ` +
          `und Anna verschüttet Wasser auf dem ganzen Boden. Ihre Mutter kommt herein ` +
          `und sagt: „Die Gießkanne ist aber auch wirklich schwer. Ich hole schnell einen Lappen.“`,

        utterance:
          "Die Gießkanne ist aber auch wirklich schwer. Ich hole schnell einen Lappen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "dry_the_floor_together",
              text: "Anna und ihre Mutter wischen den Boden auf",
              correct: true
            },
            {
              id: "water_plants",
              text: "Anna holt neues Wasser und gießt die Blumen weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "wet",
          whyTrigger: "dry"
        }
      }
    }
  },
  {
    storyId: 11,
    level: 3,
    latinPosition: 2,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Platz zu diesem Zeitpunkt vollgekleckert oder sauber?",

        options: [
        {
            id: "mess",
            text: "Vollgekleckert"
        },
        {
            id: "no_mess",
            text: "Sauber"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobi und seine Mutter essen zum Abendessen Spaghetti mit Tomatensoße. ` +
          `Tobi isst sehr schnell. Dabei fallen viele Spaghetti auf den Boden ` +
          `und Soße landet neben seinem Teller. Seine Mutter sagt: ` +
          `„Du isst aber sehr ordentlich.“`,

        utterance: "Du isst aber sehr ordentlich.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_spot",
              text: "Tobi macht seinen Platz sauber",
              correct: true
            },
            {
              id: "eat",
              text: "Tobi isst unordentlich weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "mess",
          whyTrigger: "mess"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Marie und ihre Mutter essen zum Abendessen Spaghetti mit Tomatensoße. ` +
          `Marie isst sehr langsam und vorsichtig, so dass weder Spaghetti noch Soße ` +
          `neben ihrem Teller landen. Seine Mutter sagt: ` +
          `„Du isst aber sehr ordentlich.“`,

        utterance: "Du isst aber sehr ordentlich.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "eat_marie",
              text:
                "Marie isst weiter",
              correct: true
            },
            {
              id: "clean_spot_marie",
              text:
                "Marie macht ihren Platz sauber",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_mess",
          whyTrigger: "mess"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobi und seine Mutter essen zum Abendessen Spaghetti mit Tomatensoße. ` +
          `Tobi isst sehr schnell. Dabei fallen viele Spaghetti auf den Boden ` +
          `und Soße landet neben seinem Teller. Seine Mutter sagt: ` +
          `„Du machst eine riesige Sauerei!“`,

        utterance: "Du machst eine riesige Sauerei!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_spot",
              text: "Tobi macht seinen Platz sauber",
              correct: true
            },
            {
              id: "eat",
              text: "Tobi isst unordentlich weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "mess",
          whyTrigger: "no_mess"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Tobi und seine Mutter essen zum Abendessen Spaghetti mit Tomatensoße. ` +
          `Tobi isst sehr schnell. Dabei fallen viele Spaghetti auf den Boden ` +
          `und Soße landet neben seinem Teller. Seine Mutter sagt: ` +
          `„Macht nichts! Die Spaghetti sind wirklich schwer zu essen. Ich hole schnell einen Lappen.“`,

        utterance:
          "Macht nichts! Die Spaghetti sind wirklich schwer zu essen. Ich hole schnell einen Lappen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_spot_together",
              text: "Tobi und seine Mutter machen seinen Platz sauber",
              correct: true
            },
            {
              id: "eat",
              text: "Tobi isst unordentlich weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "mess",
          whyTrigger: "no_mess"
        }
      }
    }
  },
  {
    storyId: 12,
    level: 3,
    latinPosition: 3,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Fährt sie zu diesem Zeitpunkt mit Helm oder ohne Helm Fahrrad?",

        options: [
        {
            id: "helmet",
            text: "Mit Helm"
        },
        {
            id: "no_helmet",
            text: "Ohne Helm"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna fährt vor dem Haus mit ihrem Fahrrad hin und her. Sie trägt keinen Helm. ` +
          `Ihre Mutter kommt nach draußen und Anna hält neben ihr an. ` +
          `Ihre Mutter sagt: „Du hast daran gedacht, deinen Helm aufzusetzen.“`,

        utterance: "Du hast daran gedacht, deinen Helm aufzusetzen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "get_helmet",
              text: "Anna holt einen Helm",
              correct: true
            },
            {
              id: "ride_bike",
              text: "Anna fährt ohne Helm weiter Fahrrad",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "no_helmet",
          whyTrigger: "no_helmet"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Marie fährt vor dem Haus mit ihrem Fahrrad hin und her. Sie trägt einen Helm. ` +
          `Ihre Mutter kommt nach draußen und Marie hält neben ihr an. ` +
          `Ihre Mutter sagt: „Du hast daran gedacht, deinen Helm aufzusetzen.“`,

        utterance: "Du hast daran gedacht, deinen Helm aufzusetzen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "ride_bike_helmet_marie",
              text:
                "Marie fährt weiter Fahrrad",
              correct: true
            },
            {
              id: "get_another_helmet_marie",
              text:
                "Marie holt einen weiteren Helm",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "helmet",
          whyTrigger: "no_helmet"
        }
      },

      criticism: {
      childImage: "./Marie.jpg",
        condition: "criticism",

        storyText:
          `Marie fährt vor dem Haus mit ihrem Fahrrad hin und her. Sie trägt keinen Helm. ` +
          `Ihre Mutter kommt nach draußen und Marie hält neben ihr an. ` +
          `Ihre Mutter sagt: „Du hast keinen Helm auf!“`,

        utterance: "Du hast keinen Helm auf!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "get_helmet_marie",
              text: "Marie holt einen Helm",
              correct: true
            },
            {
              id: "ride_bike_marie",
              text: "Marie fährt ohne Helm weiter Fahrrad",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "no_helmet",
          whyTrigger: "helmet"
        }
      },

      control: {
      childImage: "./Marie.jpg",
        condition: "control",

        storyText:
          `Marie fährt vor dem Haus mit ihrem Fahrrad hin und her. Sie trägt keinen Helm. ` +
          `Ihre Mutter kommt nach draußen und Marie hält neben ihr an. ` +
          `Ihre Mutter sagt: „Ich bringe dir noch schnell deinen Helm, dann kannst du weiterfahren.“`,

        utterance:
          "Ich bringe dir noch schnell deinen Helm, dann kannst du weiterfahren.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "get_helmet_mom_marie",
              text: "Maries Mutter holt einen Helm für Marie",
              correct: true
            },
            {
              id: "ride_bike_marie",
              text: "Marie fährt ohne Helm weiter Fahrrad",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_helmet",
          whyTrigger: "helmet"
        }
      }
    }
  },
  {
    storyId: 13,
    level: 4,
    latinPosition: 0,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Tisch zu diesem Zeitpunkt abgeräumt oder voll mit Geschirr?",

        options: [
        {
            id: "no_dishes",
            text: "Abgeräumt"
        },
        {
            id: "dishes",
            text: "Voll mit Geschirr"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Marie.jpg",
        condition: "irony",

        storyText:
          `Marie und ihre Mutter haben zu Abend gegessen. Der ganze Tisch ist ` +
          `voll mit Geschirr. Maries Mutter fängt an, den Tisch abzuräumen. ` +
          `Marie läuft ins Wohnzimmer und schaut fern, während ihre Mutter weiter aufräumt. ` + 
          `Maries Mutter sagt: „Vielen Dank für deine Hilfe!“`,

        utterance: "Vielen Dank für deine Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clear_table_marie",
              text: "Marie hilft, den Tisch abzuräumen",
              correct: true
            },
            {
              id: "watch_tv_marie",
              text: "Marie schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dishes",
          whyTrigger: "dishes"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Marie und ihre Mutter haben zu Abend gegessen. Der ganze Tisch ist ` +
          `voll mit Geschirr. Maries Mutter fängt an, den Tisch abzuräumen. ` +
          `Marie läuft ins Wohnzimmer und schaut fern, während ihre Mutter weiter aufräumt. ` + 
          `Maries Mutter sagt: „Vielen Dank für deine Hilfe!“`,

        utterance: "Vielen Dank für deine Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clear_table_marie",
              text: "Marie hilft, den Tisch abzuräumen",
              correct: true
            },
            {
              id: "watch_tv_marie",
              text: "Marie schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dishes",
          whyTrigger: "dishes"
        }
      },

      criticism: {
      childImage: "./Marie.jpg",
        condition: "criticism",

        storyText:
          `Marie und ihre Mutter haben zu Abend gegessen. Der ganze Tisch ist ` +
          `voll mit Geschirr. Maries Mutter fängt an, den Tisch abzuräumen. ` +
          `Marie läuft ins Wohnzimmer und schaut fern, während ihre Mutter weiter aufräumt. ` + 
          `Maries Mutter sagt: „Vielen Dank für deine Hilfe!“`,

        utterance: "Vielen Dank für deine Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clear_table_marie",
              text: "Marie hilft, den Tisch abzuräumen",
              correct: true
            },
            {
              id: "watch_tv_marie",
              text: "Marie schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dishes",
          whyTrigger: "dishes"
        }
      },

      control: {
      childImage: "./Marie.jpg",
        condition: "control",

        storyText:
          `Marie und ihre Mutter haben zu Abend gegessen. Der ganze Tisch ist ` +
          `voll mit Geschirr. Maries Mutter fängt an, den Tisch abzuräumen. ` +
          `Marie läuft ins Wohnzimmer und schaut fern, während ihre Mutter weiter aufräumt. ` + 
          `Maries Mutter sagt: „Vielen Dank für deine Hilfe!“`,

        utterance: "Vielen Dank für deine Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clear_table_marie",
              text: "Marie hilft, den Tisch abzuräumen",
              correct: true
            },
            {
              id: "watch_tv_marie",
              text: "Marie schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dishes",
          whyTrigger: "dishes"
        }
      }
    }
  },
  {
    storyId: 14,
    level: 4,
    latinPosition: 1,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Tisch zu diesem Zeitpunkt sauber oder voller Saft?",

        options: [
        {
            id: "no_juice",
            text: "Sauber"
        },
        {
            id: "juice",
            text: "Voller Saft"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobi möchte Orangensaft in sein Glas einschenken. Er ist abgelenkt und ` +
          `verschüttet viel Saft auf dem Tisch. Seine Mutter sagt: ` +
          `„Könntest du dich heute bitte um die Getränke für uns alle kümmern?“`,

        utterance: "Könntest du dich heute bitte um die Getränke für uns alle kümmern?",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_table",
              text: "Tobi wischt den Tisch ab",
              correct: true
            },
            {
              id: "pour_juice",
              text: "Tobi schenkt weitere Gläser ein",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "juice",
          whyTrigger: "juice"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Marie möchte Orangensaft in ihr Glas einschenken. Sie ist sehr vorsichtig, ` +
          `sodass kein einziger Tropfen neben dem Glas landet. Ihre Mutter sagt: ` +
          `„Könntest du dich heute bitte um die Getränke für uns alle kümmern?“`,

        utterance: "Könntest du dich heute bitte um die Getränke für uns alle kümmern?",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pour_juice_marie",
              text:
                "Marie schenkt weitere Gläser ein",
              correct: true
            },
            {
              id: "wipe_table_marie",
              text:
                "Marie wischt den Tisch ab",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_juice",
          whyTrigger: "juice"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobi möchte Orangensaft in sein Glas einschenken. Er ist abgelenkt und ` +
          `verschüttet viel Saft auf dem Tisch. Seine Mutter sagt: ` +
          `Ich denke das solltest du lieber jemand anderem überlassen.“`,

        utterance: "Ich denke das solltest du lieber jemand anderem überlassen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_table",
              text: "Tobi wischt den Tisch ab",
              correct: true
            },
            {
              id: "pour_juice",
              text: "Tobi schenkt weitere Gläser ein",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "juice",
          whyTrigger: "no_juice"
        }
      },

      control: {
      childImage: "./Marie.jpg",
        condition: "control",

        storyText:
          `Marie möchte Orangensaft in ihr Glas einschenken. Sie ist abgelenkt und ` +
          `verschüttet viel Saft auf dem Tisch. Ihre Mutter sagt: ` +
          `„Das kann jedem Mal passieren. Ich hole schnell einen Lappen.“`,

        utterance:
          "Das kann jedem Mal passieren. Ich hole schnell einen Lappen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_table_together_marie",
              text: "Marie und ihre Mutter wischen den Tisch ab",
              correct: true
            },
            {
              id: "pour_juice_marie",
              text: "Marie schenkt weitere Gläser ein",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "juice",
          whyTrigger: "no_juice"
        }
      }
    }
  },
  {
    storyId: 15,
    level: 4,
    latinPosition: 2,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist Annas Kleid zu diesem Zeitpunkt schmutzig oder sauber?",

        options: [
        {
            id: "no_stains",
            text: "Sauber"
        },
        {
            id: "stains",
            text: "Schmutzig"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna kommt in einem Kleid zum Frühstück. Beim Essen kleckert sie sich voll und auf dem Kleid ist nun ` +
          `ein riesiger Fleck. Anna nimmt ihre Schultasche und will sich auf den Weg in die Schule machen. ` +
          `Annas Mutter sagt: „Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.“`,

        utterance: "Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "change_dress",
              text: "Anna zieht sich ein sauberes Kleid an",
              correct: true
            },
            {
              id: "go_to_school",
              text: "Anna geht mit dem schmutzigen Kleid in die Schule",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "stains",
          whyTrigger: "stains"
        }
      },

      praise: {
      childImage: "./Anna.jpg",
        condition: "praise",

        storyText:
          `Anna kommt in einem Kleid zum Frühstück. Beim Essen kleckert sie sich voll und auf dem Kleid ist nun ein riesiger Fleck. ` +
          `Anna zieht sich ein neues, schönes Kleid an. Dann nimmt sie ihre Schultasche und will sich auf den Weg in die Schule machen. ` +
          `Annas Mutter sagt: „Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.“`,

        utterance: "Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "go_to_school_new_dress",
              text:
                "Anna geht mit ihrem neuen Kleid in die Schule",
              correct: true
            },
            {
              id: "change_into_other_dress",
              text:
                "Anna zieht sich ein anderes Kleid an",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_stains",
          whyTrigger: "stains"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Anna kommt in einem Kleid zum Frühstück. Beim Essen kleckert sie sich voll und auf dem Kleid ist nun ` +
          `ein riesiger Fleck. Anna nimmt ihre Schultasche und will sich auf den Weg in die Schule machen. ` +
          `Annas Mutter sagt: „Du weißt aber schon, dass heute die Klassenfotos gemacht werden?“`,

        utterance: "Du weißt aber schon, dass heute die Klassenfotos gemacht werden?",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "change_dress",
              text: "Anna zieht sich ein sauberes Kleid an",
              correct: true
            },
            {
              id: "go_to_school",
              text: "Anna geht mit dem schmutzigen Kleid in die Schule",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "stains",
          whyTrigger: "no_stains"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Anna kommt in einem Kleid zum Frühstück. Beim Essen kleckert sie sich voll und auf dem Kleid ist nun ` +
          `ein riesiger Fleck. Anna nimmt ihre Schultasche und will sich auf den Weg in die Schule machen. ` +
          `Annas Mutter sagt: „Komm, wir suchen dir erst noch ein sauberes Kleid für die Klassenfotos heute aus.“`,

        utterance:
          "Komm, wir suchen dir erst noch ein sauberes Kleid für die Klassenfotos heute aus.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "change_dress_together",
              text: "Annas Mutter sucht ein sauberes Kleid für Anna aus",
              correct: true
            },
            {
              id: "go_to_school",
              text: "Anna geht mit dem schmutzigen Kleid in die Schule",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "stains",
          whyTrigger: "no_stains"
        }
      }
    }
  },
  {
    storyId: 16,
    level: 4,
    latinPosition: 3,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Sind die Plätzchen zu diesem Zeitpunkt verbrannt oder gut geworden?",

        options: [
        {
            id: "burnt",
            text: "Verbrannt"
        },
        {
            id: "not_burnt",
            text: "Gut geworden"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobi backt zum ersten Mal allein Plätzchen. Alles läuft gut. Während die Plätzchen im Ofen sind, ` +
          `geht Tobi ins Wohnzimmer und schaut fern. Dabei vergisst er die Plätzchen im Ofen. Als seine Mutter in die Küche kommt, sind die Plätzchen völlig verbrannt. ` +
          `Tobi kommt in die Küche und seine Mutter sagt: „Wir sollten dich direkt für den nächsten Backwettbewerb anmelden.“`,

        utterance: "Wir sollten dich direkt für den nächsten Backwettbewerb anmelden.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "bake_again",
              text: "Tobi wirft die Plätzchen weg und fängt nochmal von vorne an",
              correct: true
            },
            {
              id: "eat_burnt_cookies",
              text: "Tobi isst die verbrannten Plätzchen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "burnt",
          whyTrigger: "burnt"
        }
      },

      praise: {
      childImage: "./Tobi.jpg",
        condition: "praise",

        storyText:
          `Tobi backt zum ersten Mal allein Plätzchen. Alles läuft gut. Während die Plätzchen im Ofen sind, ` +
          `räumt Tobi die Küche auf und hat den Ofen dabei stets im Blick. Danach richtet er die wunderschönen Plätzchen auf einem Teller an. ` +
          `Seine Mutter kommt herein und sagt: „Wir sollten dich direkt für den nächsten Backwettbewerb anmelden.“`,

        utterance: "Wir sollten dich direkt für den nächsten Backwettbewerb anmelden.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "eat_cookies",
              text:
                "Tobi isst die Plätzchen",
              correct: true
            },
            {
              id: "bake_again",
              text:
                "Tobi wirft die Plätzchen weg und fängt nochmal von vorne an",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_burnt",
          whyTrigger: "burnt"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobi backt zum ersten Mal allein Plätzchen. Alles läuft gut. Während die Plätzchen im Ofen sind, ` +
          `geht Tobi ins Wohnzimmer und schaut fern. Dabei vergisst er die Plätzchen im Ofen. Als seine Mutter in die Küche kommt, sind die Plätzchen völlig verbrannt. ` +
          `Tobi kommt in die Küche und seine Mutter sagt: „Ich glaube dich sollte ich noch nicht in der Küche allein lassen.“`,

        utterance: "Ich glaube dich sollte ich noch nicht in der Küche allein lassen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "bake_again",
              text: "Tobi wirft die Plätzchen weg und fängt nochmal von vorne an",
              correct: true
            },
            {
              id: "eat_burnt_cookies",
              text: "Tobi isst die verbrannten Plätzchen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "burnt",
          whyTrigger: "not_burnt"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Tobi backt zum ersten Mal allein Plätzchen. Alles läuft gut. Während die Plätzchen im Ofen sind, ` +
          `geht Tobi ins Wohnzimmer und schaut fern. Dabei vergisst er die Plätzchen im Ofen. Als seine Mutter in die Küche kommt, sind die Plätzchen völlig verbrannt. ` +
          `Tobi kommt in die Küche und seine Mutter sagt: „Nicht so schlimm. Wir probieren es einfach nochmal.“`,

        utterance:
          "Nicht so schlimm. Wir probieren es einfach nochmal.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "bake_again_together",
              text: "Tobi und seine Mutter werfen die Plätzchen weg und fängen nochmal von vorne an",
              correct: true
            },
            {
              id: "eat_burnt_cookies",
              text: "Tobi isst die verbrannten Plätzchen",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "burnt",
          whyTrigger: "not_burnt"
        }
      }
    }
  },
  {
    storyId: 17,
    level: 5,
    latinPosition: 0,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Gang zu diesem Zeitpunkt sauber oder dreckig?",

        options: [
        {
            id: "clean_hallway",
            text: "Sauber"
        },
        {
            id: "dirty_hallway",
            text: "Dreckig"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobi hat draußen gespielt und seine Schuhe sind voller Matsch. Er läuft ` +
          `durch den Gang, ohne seine Schuhe auszuziehen. Beim Abendessen fragt die Mutter ` +
          `Tobi, wie sein Tag war. Tobi sagt: „Ich war mit meinen Freunden auf dem Spielplatz. ` +
          `Das hat so viel Spaß gemacht!“ Seine Mutter antwortet: „Und der Gang ist auch ganz sauber geblieben.“`,

        utterance: "Und der Gang ist auch ganz sauber geblieben.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_the_hallway",
              text: "Tobi wischt den Gang auf",
              correct: true
            },
            {
              id: "sit_on_sofa",
              text: "Tobi setzt sich aufs Sofa",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dirty_hallway",
          whyTrigger: "dirty_hallway"
        }
      },

      praise: {
      childImage: "./Tobi.jpg",
        condition: "praise",

        storyText:
          `Tobi hat draußen gespielt und seine Schuhe sind voller Matsch. Bevor er durch ` +
          `den Gang läuft, zieht er seine dreckigen Schuhe aus, um nichts dreckig zu machen. Beim Abendessen fragt die Mutter ` +
          `Tobi, wie sein Tag war. Tobi sagt: „Ich war mit meinen Freunden auf dem Spielplatz. ` +
          `Das hat so viel Spaß gemacht!“ Seine Mutter antwortet: „Und der Gang ist auch ganz sauber geblieben.“`,

        utterance: "Und der Gang ist auch ganz sauber geblieben.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "sit_on_sofa",
              text:
                "Tobi setzt sich aufs Sofa",
              correct: true
            },
            {
              id: "clean_the_hallway",
              text:
                "Tobi wischt den Gang auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "clean_hallway",
          whyTrigger: "dirty_hallway"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobi hat draußen gespielt und seine Schuhe sind voller Matsch. Er läuft ` +
          `durch den Gang, ohne seine Schuhe auszuziehen. Beim Abendessen fragt die Mutter ` +
          `Tobi, wie sein Tag war. Tobi sagt: „Ich war mit meinen Freunden auf dem Spielplatz. ` +
          `Das hat so viel Spaß gemacht!“ Seine Mutter antwortet: „Du hast den Gang mit deinen Schuhen ganz dreckig gemacht!“`,

        utterance: "Du hast den Gang mit deinen Schuhen ganz dreckig gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_the_hallway",
              text: "Tobi wischt den Gang auf",
              correct: true
            },
            {
              id: "sit_on_sofa",
              text: "Tobi setzt sich aufs Sofa",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dirty_hallway",
          whyTrigger: "clean_hallway"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Tobi hat draußen gespielt und seine Schuhe sind voller Matsch. Er läuft ` +
          `durch den Gang, ohne seine Schuhe auszuziehen. Beim Abendessen fragt die Mutter ` +
          `Tobi, wie sein Tag war. Tobi sagt: „Ich war mit meinen Freunden auf dem Spielplatz. ` +
          `Das hat so viel Spaß gemacht!“ Seine Mutter antwortet: „Toll! Komm, wir machen den Gang jetzt noch schnell zusammen sauber.“`,

        utterance:
          "Toll! Komm, wir machen den Gang jetzt noch schnell zusammen sauber.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_the_hallway_together",
              text: "Tobi und seine Mutter wischen den Gang auf",
              correct: true
            },
            {
              id: "sit_on_sofa",
              text: "Tobi setzt sich aufs Sofa",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "dirty_hallway",
          whyTrigger: "clean_hallway"
        }
      }
    }
  },
  {
    storyId: 18,
    level: 5,
    latinPosition: 1,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist die Küche zu diesem Zeitpunkt aufgeräumt oder unordentlich?",

        options: [
        {
            id: "messy_kitchen",
            text: "Unordentlich"
        },
        {
            id: "tidy_kitchen",
            text: "Aufgeräumt"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna backt einen Kuchen und richtet dabei in der Küche ein großes Chaos an. ` +
          `Anstatt aufzuräumen, geht sie in ihr Zimmer. Später fährt ihre Mutter sie ` +
          `mit dem Auto zum Tennistraining. Anna fragt: „Kann ich mich direkt nach dem ` +
          `Training mit einer Freundin treffen?“ Ihre Mutter antwortet: ` +
          `„Klar, schließlich hast du nach dem Backen alles aufgeräumt.“`,

        utterance: "Klar, schließlich hast du nach dem Backen alles aufgeräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_kitchen",
              text: "Anna räumt die Küche auf",
              correct: true
            },
            {
              id: "meet_friend",
              text: "Anna trifft sich mit einer Freundin",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_kitchen",
          whyTrigger: "messy_kitchen"
        }
      },

      praise: {
      childImage: "./Anna.jpg",
        condition: "praise",

        storyText:
          `Anna backt einen Kuchen und richtet dabei in der Küche ein großes Chaos an. ` +
          `Danach räumt sie die ganze Küche gründlich auf. Später fährt ihre Mutter sie ` +
          `mit dem Auto zum Tennistraining. Anna fragt: „Kann ich mich direkt nach dem ` +
          `Training mit einer Freundin treffen?“ Ihre Mutter antwortet: ` +
          `„Klar, schließlich hast du nach dem Backen alles aufgeräumt.“`,

        utterance: "Klar, schließlich hast du nach dem Backen alles aufgeräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "meet_friend",
              text:
                "Anna trifft sich mit einer Freundin",
              correct: true
            },
            {
              id: "clean_kitchen",
              text:
                "Anna räumt die Küche auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "tidy_kitchen",
          whyTrigger: "messy_kitchen"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Anna backt einen Kuchen und richtet dabei in der Küche ein großes Chaos an. ` +
          `Anstatt aufzuräumen, geht sie in ihr Zimmer. Später fährt ihre Mutter sie ` +
          `mit dem Auto zum Tennistraining. Anna fragt: „Kann ich mich direkt nach dem ` +
          `Training mit einer Freundin treffen?“ Ihre Mutter antwortet: ` +
          `„Nein, du hast die Küche noch nicht aufgeräumt.“`,

        utterance: "Nein, du hast die Küche noch nicht aufgeräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_kitchen",
              text: "Anna räumt die Küche auf",
              correct: true
            },
            {
              id: "meet_friend",
              text: "Anna trifft sich mit einer Freundin",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_kitchen",
          whyTrigger: "tidy_kitchen"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Anna backt einen Kuchen und richtet dabei in der Küche ein großes Chaos an. ` +
          `Anstatt aufzuräumen, geht sie in ihr Zimmer. Später fährt ihre Mutter sie ` +
          `mit dem Auto zum Tennistraining. Anna fragt: „Kann ich mich direkt nach dem ` +
          `Training mit einer Freundin treffen?“ Ihre Mutter antwortet: ` +
          `„Wir räumen nach dem Training noch schnell die Küche auf und dann kannst du das gerne machen.“`,

        utterance:
          "Wir räumen nach dem Training noch schnell die Küche auf und dann kannst du das gerne machen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_kitchen_together",
              text: "Anna und ihre Mutter räumen die Küche auf",
              correct: true
            },
            {
              id: "meet_friend",
              text: "Anna trifft sich mit einer Freundin",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "messy_kitchen",
          whyTrigger: "tidy_kitchen"
        }
      }
    }
  },
  {
    storyId: 19,
    level: 5,
    latinPosition: 2,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Sind die Bücher zu diesem Zeitpunkt im Regal oder auf dem Boden?",

        options: [
        {
            id: "on_the_shelf",
            text: "Im Regal"
        },
        {
            id: "on_the_floor",
            text: "Auf dem Boden"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobi holt ein Buch nach dem anderen aus dem Regal und liest darin. Am Ende ` +
          `lässt er die Bücher auf dem ganzen Boden verteilt liegen. Abends sitzen ` +
          `er und seine Mutter auf dem Sofa, und Tobi erzählt ihr: „Es hat heute den ganzen Tag geregnet ` +
          `und ich musste immer drinnen bleiben. Aber mir war trotzdem nicht langweilig.“ ` +
          `Seine Mama sagt: „Du hast auch alle Bücher wieder ganz ordentlich ins Regal geräumt.“`,

        utterance: "Du hast auch alle Bücher wieder ganz ordentlich ins Regal geräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_away_books",
              text: "Tobi räumt die Bücher ins Regal",
              correct: true
            },
            {
              id: "keep_sitting",
              text: "Tobi bleibt auf dem Sofa sitzen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "on_the_floor",
          whyTrigger: "on_the_floor"
        }
      },

      praise: {
      childImage: "./Tobi.jpg",
        condition: "praise",

        storyText:
          `Tobi holt ein Buch nach dem anderen aus dem Regal und liest darin. Am Ende ` +
          `räumt er die Bücher alle wieder ordentlich ins Regal. Abends sitzen ` +
          `er und seine Mutter auf dem Sofa, und Tobi erzählt ihr: „Es hat heute den ganzen Tag geregnet ` +
          `und ich musste immer drinnen bleiben. Aber mir war trotzdem nicht langweilig.“ ` +
          `Seine Mama sagt: „Du hast auch alle Bücher wieder ganz ordentlich ins Regal geräumt.“`,

        utterance: "Du hast auch alle Bücher wieder ganz ordentlich ins Regal geräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "keep_sitting",
              text:
                "Tobi bleibt auf dem Sofa sitzen",
              correct: true
            },
            {
              id: "put_away_more_books",
              text:
                "Tobi holt weitere Bücher und räumt sie ins Regal",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "on_the_shelf",
          whyTrigger: "on_the_floor"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobi holt ein Buch nach dem anderen aus dem Regal und liest darin. Am Ende ` +
          `lässt er die Bücher auf dem ganzen Boden verteilt liegen. Abends sitzen ` +
          `er und seine Mutter auf dem Sofa, und Tobi erzählt ihr: „Es hat heute den ganzen Tag geregnet ` +
          `und ich musste immer drinnen bleiben. Aber mir war trotzdem nicht langweilig.“ ` +
          `Seine Mama sagt: „Du hast die Bücher alle kreuz und quer auf dem Boden liegen lassen.“`,

        utterance: "Du hast die Bücher alle kreuz und quer auf dem Boden liegen lassen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_away_books",
              text: "Tobi räumt die Bücher ins Regal",
              correct: true
            },
            {
              id: "keep_sitting",
              text: "Tobi bleibt auf dem Sofa sitzen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "on_the_floor",
          whyTrigger: "on_the_shelf"
        }
      },

      control: {
      childImage: "./Marie.jpg",
        condition: "control",

        storyText:
          `Marie holt ein Bilderbuch nach dem anderen aus dem Regal und schaut sie sich an. Am Ende ` +
          `lässt sie die Bücher auf dem ganzen Boden verteilt liegen. Abends sitzen ` +
          `sie und ihre Mutter auf dem Sofa, und Marie erzählt ihr: „Es hat heute den ganzen Tag geregnet ` +
          `und ich musste immer drinnen bleiben. Aber mir war trotzdem nicht langweilig.“ ` +
          `Ihre Mama sagt: „Super! Komm, wir räumen die Bücher wieder ins Regal und dabei kannst du mir von den Geschichten erzählen.“`,

        utterance:
          "Super! Komm, wir räumen die Bücher wieder ins Regal und dabei kannst du mir von den Geschichten erzählen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_away_books_together_marie",
              text: "Marie und ihre Mutter räumen die Bücher ins Regal",
              correct: true
            },
            {
              id: "keep_sitting_marie",
              text: "Marie bleibt auf dem Sofa sitzen",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "on_the_floor",
          whyTrigger: "on_the_shelf"
        }
      }
    }
  },
  {
    storyId: 20,
    level: 5,
    latinPosition: 3,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Sind die nassen Badesachen zu diesem Zeitpunkt aufgehängt oder in der Tasche?",

        options: [
        {
            id: "on_the_line",
            text: "Aufgehängt"
        },
        {
            id: "in_the_bag",
            text: "In der Tasche"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna kommt vom Schwimmbad nach Hause und stellt ihre Tasche mit den nassen Badesachen ` +
          `direkt am Eingang ab. Dann geht sie direkt in die Küche und isst etwas. ` +
          `Ihre Mutter kommt in die Küche. Anna sagt: „Hallo, Mama! ` +
          `Ich hatte so viel Spaß im Schwimmbad mit meinen Freunden.“ Ihre Mutter antwortet: ` +
          `„Und deine nassen Badesachen hast du auch direkt aufgehängt.“`,

        utterance: "Und deine nassen Badesachen hast du auch direkt aufgehängt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "empty_the_bag",
              text: "Anna hängt ihre Badesachen auf",
              correct: true
            },
            {
              id: "eats",
              text: "Anna isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "in_the_bag",
          whyTrigger: "in_the_bag"
        }
      },

      praise: {
      childImage: "./Anna.jpg",
        condition: "praise",

        storyText:
          `Anna kommt vom Schwimmbad nach Hause und packt ihre Tasche mit den nassen Badesachen ` +
          `direkt aus. Nachdem sie die Badesachen aufgehängt hat, geht sie in die Küche und isst etwas. ` +
          `Ihre Mutter kommt in die Küche. Anna sagt: „Hallo, Mama! ` +
          `Ich hatte so viel Spaß im Schwimmbad mit meinen Freunden.“ Ihre Mutter antwortet: ` +
          `„Und deine nassen Badesachen hast du auch direkt aufgehängt.“`,

        utterance: "Und deine nassen Badesachen hast du auch direkt aufgehängt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "eats",
              text:
                "Anna isst weiter",
              correct: true
            },
            {
              id: "empty_the_bag_again",
              text:
                "Anna hängt noch andere Sachen auf die Wäscheleine",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "on_the_line",
          whyTrigger: "in_the_bag"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Anna kommt vom Schwimmbad nach Hause und stellt ihre Tasche mit den nassen Badesachen ` +
          `direkt am Eingang ab. Dann geht sie direkt in die Küche und isst etwas. ` +
          `Ihre Mutter kommt in die Küche. Anna sagt: „Hallo, Mama! ` +
          `Ich hatte so viel Spaß im Schwimmbad mit meinen Freunden.“ Ihre Mutter antwortet: ` +
          `„Du hast deine nassen Badesachen noch nicht aufgehängt.“`,

        utterance: "Du hast deine nassen Badesachen noch nicht aufgehängt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "empty_the_bag",
              text: "Anna hängt ihre Badesachen auf",
              correct: true
            },
            {
              id: "eats",
              text: "Anna isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "in_the_bag",
          whyTrigger: "on_the_line"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Anna kommt vom Schwimmbad nach Hause und stellt ihre Tasche mit den nassen Badesachen ` +
          `direkt am Eingang ab. Dann geht sie direkt in die Küche und isst etwas. ` +
          `Ihre Mutter kommt in die Küche. Anna sagt: „Hallo, Mama! ` +
          `Ich hatte so viel Spaß im Schwimmbad mit meinen Freunden.“ Ihre Mutter antwortet: ` +
          `„Das freut mich! Hol bitte deine Tasche und dann können wir deine nassen Badesachen noch schnell aufhängen.“`,

        utterance:
          "Das freut mich! Hol bitte deine Tasche und dann können wir deine nassen Badesachen noch schnell aufhängen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "empty_the_bag_together",
              text: "Anna und ihre Mutter hängen die Badesachen auf",
              correct: true
            },
            {
              id: "eats",
              text: "Anna isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "in_the_bag",
          whyTrigger: "on_the_line^"
        }
      }
    }
  },
  {
    storyId: 21,
    level: 6,
    latinPosition: 0,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Sind Tobis Hände zu diesem Zeitpunkt gewaschen oder ungewaschen?",

        options: [
        {
            id: "washed",
            text: "Gewaschen"
        },
        {
            id: "not_washed",
            text: "Ungewaschen"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobi spielt draußen mit dem Hund. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie er ausgiebig ` +
          `den Hund streichelt. Später kommt Tobi nach drinnen und läuft direkt in die Küche. ` +
          `Anna knetet gerade den Teig. Tobi geht zu ihr hin und sagt: „Mama, ich helfe Anna mit dem Teig.“ ` +
          `Seine Mutter antwortet: „Da können wir uns heute auf richtig leckere Plätzchen freuen.“`,

        utterance: "Da können wir uns heute auf richtig leckere Plätzchen freuen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wash_hands",
              text: "Tobi wäscht sich die Hände",
              correct: true
            },
            {
              id: "knead_dough",
              text: "Tobi knetet den Teig",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_washed",
          whyTrigger: "not_washed"
        }
      },

      praise: {
      childImage: "./Tobi.jpg",
        condition: "praise",

        storyText:
          `Tobi spielt draußen mit dem Hund. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie er ausgiebig ` +
          `den Hund streichelt. Später kommt Tobi nach drinnen und läuft direkt in die Küche. ` +
          `Anna knetet gerade den Teig. Tobi geht zum Waschbecken und wäscht sich die Hände. ` +
          `Dann geht er zu Anna hin und sagt: „Mama, ich helfe Anna mit dem Teig.“ ` +
          `Seine Mutter antwortet: „Da können wir uns heute auf richtig leckere Plätzchen freuen.“`,

        utterance: "Da können wir uns heute auf richtig leckere Plätzchen freuen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "knead_dough",
              text:
                "Tobi knetet den Teig",
              correct: true
            },
            {
              id: "wash_hands_again",
              text:
                "Tobi wäscht sich erneut die Hände",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "washed",
          whyTrigger: "not_washed"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobi spielt draußen mit dem Hund. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie er ausgiebig ` +
          `den Hund streichelt. Später kommt Tobi nach drinnen und läuft direkt in die Küche. ` +
          `Anna knetet gerade den Teig. Tobi geht zu ihr hin und sagt: „Mama, ich helfe Anna mit dem Teig.“ ` +
          `Seine Mutter antwortet: „Bevor du den Teig anfasst, denkst du erstmal drüber nach, was du vergessen hast!“`,

        utterance: "Bevor du den Teig anfasst, denkst du erstmal drüber nach, was du vergessen hast!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wash_hands",
              text: "Tobi wäscht sich die Hände",
              correct: true
            },
            {
              id: "knead_dough",
              text: "Tobi knetet den Teig",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_washed",
          whyTrigger: "washed"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Tobi spielt draußen mit dem Hund. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie er ausgiebig ` +
          `den Hund streichelt. Später kommt Tobi nach drinnen und läuft direkt in die Küche. ` +
          `Anna knetet gerade den Teig. Tobi geht zu ihr hin und sagt: „Mama, ich helfe Anna mit dem Teig.“ ` +
          `Seine Mutter antwortet: „Schön, dass du uns helfen möchtest! Davor waschen wir dir noch schnell die Hände.“`,

        utterance:
          "Schön, dass du uns helfen möchtest! Davor waschen wir dir noch schnell die Hände.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wash_hands_together",
              text: "Tobis Mutter hilft ihm beim Händewaschen",
              correct: true
            },
            {
              id: "knead_dough",
              text: "Tobi knetet den Teig",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_washed",
          whyTrigger: "washed"
        }
      }
    }
  },
  {
    storyId: 22,
    level: 6,
    latinPosition: 1,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist Annas Zimmer zu diesem Zeitpunkt unordentlich oder aufgeräumt?",

        options: [
        {
            id: "messy_room",
            text: "Unordentlich"
        },
        {
            id: "tidy_room",
            text: "Aufgeräumt"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Annas Zimmer ist sehr unordentlich. Ihre Mutter kommt herein, um sie zum Abendessen ` +
          `zu holen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Klar doch! Es wäre toll, wenn alle Zimmer so aussehen würden wie deins.“`,

        utterance: "Klar doch! Es wäre toll, wenn alle Zimmer so aussehen würden wie deins.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "tidy_the_room",
              text: "Anna räumt ihr Zimmer auf",
              correct: true
            },
            {
              id: "watch_television",
              text: "Anna schaut mit ihrem Bruder fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_room",
          whyTrigger: "messy_room"
        }
      },

      praise: {
      childImage: "./Anna.jpg",
        condition: "praise",

        storyText:
          `Annas Zimmer ist wie immer sehr ordentlich. Ihre Mutter kommt herein, um sie zum Abendessen ` +
          `zu holen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Klar doch! Es wäre toll, wenn alle Zimmer so aussehen würden wie deins.“`,

        utterance: "Klar doch! Es wäre toll, wenn alle Zimmer so aussehen würden wie deins.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "watch_television",
              text:
                "Anna schaut mit ihrem Bruder fern",
              correct: true
            },
            {
              id: "tidy_the_room_more",
              text:
                "Anna räumt ihr Zimmer ordentliches Zimmer noch weiter auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "tidy_room",
          whyTrigger: "messy_room"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Annas Zimmer ist sehr unordentlich. Ihre Mutter kommt herein, um sie zum Abendessen ` +
          `zu holen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Schau dir erstmal das Zimmer von deinem Bruder an!“`,

        utterance: "Schau dir erstmal das Zimmer von deinem Bruder an!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "tidy_the_room",
              text: "Anna räumt ihr Zimmer auf",
              correct: true
            },
            {
              id: "watch_television",
              text: "Anna schaut mit ihrem Bruder fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_room",
          whyTrigger: "tidy_room"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Annas Zimmer ist sehr unordentlich. Ihre Mutter kommt herein, um sie zum Abendessen ` +
          `zu holen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Komm, wir räumen erst dein Zimmer auf und dann können wir alle zusammen einen Film anschauen.“`,

        utterance:
          "Komm, wir räumen erst dein Zimmer auf und dann können wir alle zusammen einen Film anschauen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "tidy_the_room_together",
              text: "Anna und ihre Mutter räumen ihr Zimmer auf",
              correct: true
            },
            {
              id: "watch_television",
              text: "Anna schaut mit ihrem Bruder fern",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "messy_room",
          whyTrigger: "tidy_room"
        }
      }
    }
  },
  {
    storyId: 23,
    level: 6,
    latinPosition: 2,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist das Keyboard zu diesem Zeitpunkt laut oder leise?",

        options: [
        {
            id: "loud",
            text: "Laut"
        },
        {
            id: "quiet",
            text: "Leise"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Marie.jpg",
        condition: "irony",

        storyText:
          `Anna ist krank und geht deshalb früh ins Bett. Ihre Mutter und ihre Schwester Marie sind im ` +
          `Wohnzimmer, direkt neben Annas Zimmer. Plötzlich fängt Marie an, laut auf dem Keyboard ` +
          `zu spielen. Ihre Mutter sagt: „Das ist eine super Idee, wenn jemand schlafen möchte.“` ,

        utterance: "Das ist eine super Idee, wenn jemand schlafen möchte.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "boardgame",
              text: "Marie spielt mit ihrer Mutter ein Brettspiel",
              correct: true
            },
            {
              id: "play_keyboard",
              text: "Marie spielt weiter auf dem Keyboard",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "loud",
          whyTrigger: "loud"
        }
      },

      praise: {
      childImage: "./Marie.jpg",
        condition: "praise",

        storyText:
          `Anna ist krank und geht deshalb früh ins Bett. Ihre Mutter und ihre Schwester Marie sind im ` +
          `Wohnzimmer, direkt neben Annas Zimmer. Plötzlich fängt Marie an, laut auf dem Keyboard ` +
          `zu spielen. Ihre Mutter sagt: „Das ist eine super Idee, wenn jemand schlafen möchte.“` ,

        utterance: "Das ist eine super Idee, wenn jemand schlafen möchte.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "boardgame",
              text: "Marie spielt mit ihrer Mutter ein Brettspiel",
              correct: true
            },
            {
              id: "play_keyboard",
              text: "Marie spielt weiter auf dem Keyboard",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "loud",
          whyTrigger: "loud"
        }
      },

      criticism: {
      childImage: "./Marie.jpg",
        condition: "criticism",

        storyText:
          `Anna ist krank und geht deshalb früh ins Bett. Ihre Mutter und ihre Schwester Marie sind im ` +
          `Wohnzimmer, direkt neben Annas Zimmer. Plötzlich fängt Marie an, laut auf dem Keyboard ` +
          `zu spielen. Ihre Mutter sagt: „Das ist eine super Idee, wenn jemand schlafen möchte.“` ,

        utterance: "Das ist eine super Idee, wenn jemand schlafen möchte.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "boardgame",
              text: "Marie spielt mit ihrer Mutter ein Brettspiel",
              correct: true
            },
            {
              id: "play_keyboard",
              text: "Marie spielt weiter auf dem Keyboard",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "loud",
          whyTrigger: "loud"
        }
      },

      control: {
      childImage: "./Marie.jpg",
        condition: "control",
        storyText:
          `Anna ist krank und geht deshalb früh ins Bett. Ihre Mutter und ihre Schwester Marie sind im ` +
          `Wohnzimmer, direkt neben Annas Zimmer. Plötzlich fängt Marie an, laut auf dem Keyboard ` +
          `zu spielen. Ihre Mutter sagt: „Das ist eine super Idee, wenn jemand schlafen möchte.“` ,

        utterance: "Das ist eine super Idee, wenn jemand schlafen möchte.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "boardgame",
              text: "Marie spielt mit ihrer Mutter ein Brettspiel",
              correct: true
            },
            {
              id: "play_keyboard",
              text: "Marie spielt weiter auf dem Keyboard",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "loud",
          whyTrigger: "loud"
        }
      }
    }
  },
  {
    storyId: 24,
    level: 6,
    latinPosition: 3,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Boden im Gang zu diesem Zeitpunkt trocken oder nass?",

        options: [
        {
            id: "dry_floor",
            text: "Trocken"
        },
        {
            id: "wet_floor",
            text: "Nass"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Draußen regnet es. Anna kommt klatschnass nach Hause und hinterlässt Wasserpfützen auf dem Boden. ` +
          `Ihre nasse Jacke lässt sie einfach auf den Boden fallen, bevor sie in ihr Zimmer geht. Später kommt sie ` +
          `in die Küche, wo ihre Mutter gerade kocht. Anna sagt: „Mama, Oma kommt doch bald, oder?“ Ihre Mutter ` +
          `antwortet: „Ja. Schön zu wissen, dass ich auf dich zählen kann, wenn wir Besuch bekommen.“`,

        utterance: "Ja. Schön zu wissen, dass ich auf dich zählen kann, wenn wir Besuch bekommen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "mop_floor",
              text: "Anna wischt den Boden im Gang auf",
              correct: true
            },
            {
              id: "sit_down",
              text: "Anna setzt sich an den Esstisch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "wet_floor",
          whyTrigger: "wet_floor"
        }
      },

      praise: {
      childImage: "./Anna.jpg",
        condition: "praise",

        storyText:
          `Draußen regnet es. Anna kommt klatschnass nach Hause. Die nassen Schuhe lässt sie draußen stehen ` +
          `und die nasse Jacke hängt sie in der Dusche zum Trocknen auf. Danach wischt sie noch die kleinen ` +
          `Pfützen auf, die sie auf dem Boden hinterlassen hat, bevor sie in ihr Zimmer geht. Später kommt sie ` +
          `in die Küche, wo ihre Mutter gerade kocht. Anna sagt: „Mama, Oma kommt doch bald, oder?“ Ihre Mutter ` +
          `antwortet: „Ja. Schön zu wissen, dass ich auf dich zählen kann, wenn wir Besuch bekommen.“`,

        utterance: "Ja. Schön zu wissen, dass ich auf dich zählen kann, wenn wir Besuch bekommen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "sit_down",
              text:
                "Anna setzt sich an den Esstisch",
              correct: true
            },
            {
              id: "mop_floor",
              text:
                "Anna wischt den Boden im Gang auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "dry_floor",
          whyTrigger: "wet_floor"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Draußen regnet es. Anna kommt klatschnass nach Hause und hinterlässt Wasserpfützen auf dem Boden. ` +
          `Ihre nasse Jacke lässt sie einfach auf den Boden fallen, bevor sie in ihr Zimmer geht. Später kommt sie ` +
          `in die Küche, wo ihre Mutter gerade kocht. Anna sagt: „Mama, Oma kommt doch bald, oder?“ Ihre Mutter ` +
          `antwortet: „Ja. Und wegen dir haben wir davor noch einiges zu tun.“`,

        utterance: "Ja. Und wegen dir haben wir davor noch einiges zu tun.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "mop_floor",
              text: "Anna wischt den Boden im Gang auf",
              correct: true
            },
            {
              id: "sit_down",
              text: "Anna setzt sich an den Esstisch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "wet_floor",
          whyTrigger: "dry_floor"
        }
      },

      control: {
      childImage: "./Marie.jpg",
        condition: "control",

        storyText:
          `Draußen regnet es. Marie kommt klatschnass nach drinnen und hinterlässt Wasserpfützen auf dem Boden. ` +
          `Ihre nasse Jacke lässt sie einfach auf den Boden fallen, bevor sie in ihr Zimmer geht. Später kommt sie ` +
          `in die Küche, wo ihre Mutter gerade kocht. Marie sagt: „Mama, Oma kommt doch bald, oder?“ Ihre Mutter ` +
          `antwortet: „Ja. Lass uns davor noch den Boden trockenwischen, damit Oma nicht ausrutscht.“`,

        utterance:
          "Ja. Lass uns davor noch den Boden trockenwischen, damit Oma nicht ausrutscht.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "mop_floor_together_marie",
              text: "Marie und ihre Mutter wischen den Boden im Gang auf",
              correct: true
            },
            {
              id: "sit_down_marie",
              text: "Marie setzt sich an den Esstisch",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "wet_floor",
          whyTrigger: "dry_floor"
        }
      }
    }
  },
];


export const latinSquare = [
  ["irony", "praise", "criticism", "control"],
  ["praise", "criticism", "control", "irony"],
  ["criticism", "control", "irony", "praise"],
  ["control", "irony", "praise", "criticism"]
];


export function createList(listNumber) {
  const listIndex = listNumber - 1;

  if (listIndex < 0 || listIndex >= 4) {
    throw new Error(
      "List number must be between 1 and 4."
    );
  }

  return stories.map((story) => {
    const condition =
      latinSquare[listIndex][
        story.latinPosition
      ];

    const version =
      story.versions[condition];

    return {
      storyId: story.storyId,
      level: story.level,
      latinPosition:
        story.latinPosition,

      list: listNumber,
      condition,

      situationQuestion:
        story.situationQuestion,
      
      utteranceReminder: story.utteranceReminder,

      ...version
    };
  });
}


export function shuffleArray(array) {
  const shuffled = [...array];

  for (
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i]
    ];
  }

  return shuffled;
}


export function randomizeTrialOrder(trials) {
  return shuffleArray(trials).map((trial, index) => ({
    ...trial,
    trialNumber: index + 1
  }));
}

export function createParticipantTrials(
  listNumber
) {
  return randomizeTrialOrder(
    createList(listNumber)
  );
}