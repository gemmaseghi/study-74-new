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
      childImage: "./Marie.jpg",
        condition: "irony",

        storyText:
          `Marie fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Marie geht in ihr Zimmer und spielt ein Spiel. ` +
          `Ihre Mutter kommt herein und sagt: „Toll gemacht!“`,

        utterance: "Toll gemacht!",

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
              text: "Marie spielt weiter",
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
      childImage: "./Marie.jpg",
        condition: "control",

        storyText:
          `Marie fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Marie geht in ihr Zimmer und spielt ein Spiel. ` +
          `Ihre Mutter kommt herein und sagt: ` +
          `„Mein Koffer ist schon gepackt. Kommm, wir fangen jetzt gemeinsam mit deinem an.“`,

        utterance:
          "Mein Koffer ist schon gepackt. Kommm, wir fangen jetzt gemeinsam mit deinem an.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_together_marie",
              text: "Marie und ihre Mutter packen gemeinsam den Koffer",
              correct: true
            },
            {
              id: "plays_marie",
              text: "Marie spielt weiter",
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
    storyId: 3,
    level: 1,
    latinPosition: 1,

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
      childImage: "./Marie.jpg",
        condition: "irony",

        storyText:
          `Marie malt auf dem Esstisch ein Bild. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Kurz darauf ` +
          `hat Marie an mehreren Stellen auf den Tisch gemalt. Ihre Muttter ` +
          `kommt herein und sagt: „Super gemacht!”`,

        utterance: "Super gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_marie",
              text: "Marie wischt den Tisch sauber",
              correct: true
            },
            {
              id: "color_marie",
              text: "Marie malt weiter ihr Bild",
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
      childImage: "./Marie.jpg",
        condition: "criticism",

        storyText:
          `Marie malt auf dem Esstisch ein Bild. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Kurz darauf ` +
          `hat Marie an mehreren Stellen auf den Tisch gemalt. Ihre Muttter ` +
          `kommt herein und sagt: „Du hast den ganzen Tisch angemalt!“`,

        utterance: "Du hast den ganzen Tisch angemalt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_marie",
              text: "Marie wischt den Tisch sauber",
              correct: true
            },
            {
              id: "color_marie",
              text: "Marie malt weiter ihr Bild",
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
      childImage: "./Marie.jpg",
        condition: "control",

        storyText:
          `Marie malt auf dem Esstisch ein Bild. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Kurz darauf ` +
          `hat Marie an mehreren Stellen auf den Tisch gemalt. Ihre Muttter ` +
          `kommt herein und sagt: „Keine Sorge! Ich hole einen Lappen und wir wischen das schnell ab.“`,

        utterance:
          "Keine Sorge! Ich hole einen Lappen und wir wischen das schnell ab.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_together_marie",
              text: "Marie und ihre Mutter wischen den Tisch sauber",
              correct: true
            },
            {
              id: "color_marie",
              text: "Marie malt weiter ihr Bild",
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
    storyId: 5,
    level: 2,
    latinPosition: 2,

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
              id: "eat_non_set_table",
              text: "Anna und ihre Mutter fangen an ohne Geschirr zu essen",
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
              id: "eat_set_table",
              text:
                "Anna und ihre Mutter fangen an zu essen",
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
              id: "eat_non_set_table",
              text: "Anna und ihre Mutter fangen an ohne Geschirr zu essen",
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
              id: "eat_non_set_table",
              text: "Anna und ihre Mutter fangen an ohne Geschirr zu essen",
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
    latinPosition: 3,

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
      childImage: "./Marie.jpg",
        condition: "irony",

        storyText:
          `Es ist schon spät am Abend und Maries Mutter sagt: „Bitte pack ` +
          `deine Tasche für den Kindergarten morgen.“ Marie geht in ihr Zimmer und fängt an, ` +
          `ein Bilderbuch anzuschauen. Ihre Mutter kommt ins Zimmer und sieht, dass ` +
          `Maries Brotzeitdose und Bilderbücher noch auf dem Boden liegen. Sie sagt: ` +
          `„Du hast alle deine Sachen gepackt!“`,


        utterance: "Du hast alle deine Sachen gepackt!",

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
      childImage: "./Marie.jpg",
        condition: "control",

        storyText:
          `Es ist schon spät am Abend und Maries Mutter sagt: „Bitte pack ` +
          `deine Tasche für den Kindergarten morgen.“ Marie geht in ihr Zimmer und fängt an, ` +
          `ein Bilderbuch anzuschauen. Ihre Mutter kommt ins Zimmer und sieht, dass ` +
          `Maries Brotzeitdose und Bilderbücher noch auf dem Boden liegen. Sie sagt: ` +
          `„Ich habe deine Trinkflasche aufgefüllt. Die können wir auch gleich ` +
          `in deine Tasche packen.“`,

        utterance:
          "Ich habe deine Trinkflasche aufgefüllt. Die können wir auch gleich in deine Tasche packen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_bag_together_marie",
              text: "Marie und ihre Mutter packen die Tasche",
              correct: true
            },
            {
              id: "read_marie",
              text: "Marie schaut weiter ihr Buch an",
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
    latinPosition: 0,

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
              id: "put_pajamas",
              text: "Anna zieht sich ihren Schlafanzug an",
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
              id: "put_other_pajamas",
              text:
                "Anna zieht sich einen anderen Schlafanzug an",
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
              id: "put_pajamas",
              text: "Anna zieht sich ihren Schlafanzug an",
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
          `sagt sie: „Ich bin auch schon ganz müde. Komm, wir machen uns zusammen bettfertig.“`,

        utterance:
          "Ich bin auch schon ganz müde. Komm, wir machen uns zusammen bettfertig.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_pajamas_together",
              text: "Anna und ihre Mutter ziehen sich ihre Schlafanzüge an",
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
    latinPosition: 1,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist die Butter zu diesem Zeitpunkt im Kühlschrank oder auf dem Tisch?",

        options: [
        {
            id: "fridge",
            text: "Im Kühlschrank"
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
          `Tobi und seine Mutter haben Brotzeit gemacht. Die Mutter räumt den Tisch ab. ` +
          `Auf dem Tisch stehen jetzt noch die Butter und eine Schale mit Brot. Tobis Mutter sagt: ` +
          `„Räum bitte noch die Butter in den Kühlschrank.“ Dann verlässt die Mutter die Küche. ` +
          `Tobi steht auf, lässt die Sachen auf dem Tisch stehen und spielt ein Spiel. Seine Mutter kommt ` +
          `zurück und sagt: „Du bist eine große Hilfe!“`,

        utterance: "Du bist eine große Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_in_fridge",
              text: "Tobi räumt die Butter in den Kühlschrank",
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
          `Tobi und seine Mutter haben Brotzeit gemacht. Die Mutter räumt den Tisch ab. ` +
          `Auf dem Tisch stehen jetzt noch die Butter und eine Schale mit Brot. Tobis Mutter sagt: ` +
          `„Räum bitte noch die Butter in den Kühlschrank.“ Dann verlässt die Mutter die Küche. ` +
          `Tobi steht auf, stellt die Butter in den Kühlschrank und spielt dann ein Spiel. Seine Mutter kommt ` +
          `zurück und sagt: „Du bist eine große Hilfe!“`,

        utterance: "Du bist eine große Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "play_with_toys",
              text:
                "Tobi spielt weiter",
              correct: true
            },
            {
              id: "put_in_fridge_more",
              text:
                "Tobi räumt die Schale mit dem Brot in den Kühlschrank",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "fridge",
          whyTrigger: "table"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobi und seine Mutter haben Brotzeit gemacht. Die Mutter räumt den Tisch ab. ` +
          `Auf dem Tisch stehen jetzt noch die Butter und eine Schale mit Brot. Tobis Mutter sagt: ` +
          `„Räum bitte noch die Butter in den Kühlschrank.“ Dann verlässt die Mutter die Küche. ` +
          `Tobi steht auf, lässt die Sachen auf dem Tisch stehen und spielt ein Spiel. Seine Mutter kommt ` +
          `zurück und sagt: „Du bist keine große Hilfe!“`,

        utterance: "Du bist keine große Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_in_fridge",
              text: "Tobi räumt die Butter in den Kühlschrank",
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
          whyTrigger: "fridge"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Tobi und seine Mutter haben Brotzeit gemacht. Die Mutter räumt den Tisch ab. ` +
          `Auf dem Tisch stehen jetzt noch die Butter und eine Schale mit Brot. Tobis Mutter sagt: ` +
          `„Räum bitte noch die Butter in den Kühlschrank.“ Dann verlässt die Mutter die Küche. ` +
          `Tobi steht auf, lässt die Sachen auf dem Tisch stehen und spielt ein Spiel. Seine Mutter kommt ` +
          `zurück und sagt: „Macht nichts! Komm, wir räumen den Rest noch auf und wischen dann den Tisch ab.“`,

        utterance:
          "Macht nichts! Komm, wir räumen den Rest noch auf und wischen dann den Tisch ab.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_in_fridge_together",
              text: "Tobi und seine Mutter räumen die Butter in den Kühlschrank",
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
          whyTrigger: "fridge"
        }
      }
    }
  },
  {
    storyId: 14,
    level: 4,
    latinPosition: 2,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Tisch zu diesem Zeitpunkt sauber oder voller Eis?",

        options: [
        {
            id: "no_icecream",
            text: "Sauber"
        },
        {
            id: "icecream",
            text: "Voller Eis"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Tobi.jpg",
        condition: "irony",

        storyText:
          `Tobi und seine Mutter wollen Eis als Nachspeise essen. Tobi richtet das Eis in einem Eisbecher an. ` +
          `Viele der Eiskugeln landen dabei aber auf dem Tisch anstatt im Bcher. Seine Mutter sieht die Sauerei und sagt: ` +
          `„Ich glaube, du bist bereit für eine eigene Eisdiele.“`,

        utterance: "Ich glaube, du bist bereit für eine eigene Eisdiele.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_table",
              text: "Tobi wischt den Tisch ab",
              correct: true
            },
            {
              id: "put_icecream",
              text: "Tobi befüllt auch den Eisbecher seiner Mutter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "icecream",
          whyTrigger: "icecream"
        }
      },

      praise: {
      childImage: "./Tobi.jpg",
        condition: "praise",

        storyText:
          `Tobi und seine Mutter wollen Eis als Nachspeise essen. Tobi richtet das Eis in einem Eisbecher an. ` +
          `Er passt gut auf, dass nichts von dem Eis auf dem Tisch landet und verziert den Eisbecher dann schön mit Streuseln und einer Waffel. Seine Mutter sieht den Eisbecher und sagt: ` +
          `„Ich glaube, du bist bereit für eine eigene Eisdiele.“`,

        utterance: "Ich glaube, du bist bereit für eine eigene Eisdiele.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_icecream",
              text:
                "Tobi befüllt auch den Eisbecher seiner Mutter",
              correct: true
            },
            {
              id: "wipe_table",
              text:
                "Tobi wischt den Tisch ab",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_icecream",
          whyTrigger: "icecream"
        }
      },

      criticism: {
      childImage: "./Tobi.jpg",
        condition: "criticism",

        storyText:
          `Tobi und seine Mutter wollen Eis als Nachspeise essen. Tobi richtet das Eis in einem Eisbecher an. ` +
          `Viele der Eiskugeln landen dabei aber auf dem Tisch anstatt im Bcher. Seine Mutter sieht die Sauerei und sagt: ` +
          `Ich denke, das solltest du lieber mir überlassen.“`,

        utterance: "Ich denke, das solltest du lieber mir überlassen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_table",
              text: "Tobi wischt den Tisch ab",
              correct: true
            },
            {
              id: "put_icecream",
              text: "Tobi befüllt auch den Eisbecher seiner Mutter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "icecream",
          whyTrigger: "no_icecream"
        }
      },

      control: {
      childImage: "./Tobi.jpg",
        condition: "control",

        storyText:
          `Tobi und seine Mutter wollen Eis als Nachspeise essen. Tobi richtet das Eis in einem Eisbecher an. ` +
          `Viele der Eiskugeln landen dabei aber auf dem Tisch anstatt im Bcher. Seine Mutter sieht die Sauerei und sagt: ` +
          `„Das kann jedem Mal passieren. Ich hole schnell einen Lappen.“`,

        utterance:
          "Das kann jedem Mal passieren. Ich hole schnell einen Lappen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_table_together",
              text: "Tobi und seine Mutter wischen den Tisch ab",
              correct: true
            },
            {
              id: "put_icecream",

              text: "Tobi befüllt auch den Eisbecher seiner Mutter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "icecream",
          whyTrigger: "no_icecream"
        }
      }
    }
  },
  {
    storyId: 15,
    level: 4,
    latinPosition: 3,

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
          `Vor der Schule sucht Annas Mutter ein schönes Kleid für Anna heraus und macht ihr die Haare. ` +
          `Dann machen Anna und ihre Mutter Frühstück. Beim Essen kleckert sich Anna voll und auf dem Kleid ist nun ` +
          `ein riesiger Fleck. Danach nimmt sie ihre Schultasche und will sich auf den Weg in die Schule machen. ` +
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
          `Vor der Schule sucht Annas Mutter ein schönes Kleid für Anna heraus und macht ihr die Haare. ` +
          `Dann machen Anna und ihre Mutter Frühstück. Beim Essen passt Anna gut darauf auf, ihr schönes Kleid nicht vollzukleckern. ` +
          `Danach nimmt sie ihre Schultasche und will sich auf den Weg in die Schule machen. ` +
          `Annas Mutter sagt: „Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.“`,

        utterance: "Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "go_to_school_clean_dress",
              text:
                "Anna geht mit ihrem Kleid in die Schule",
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
          `Vor der Schule sucht Annas Mutter ein schönes Kleid für Anna heraus und macht ihr die Haare. ` +
          `Dann machen Anna und ihre Mutter Frühstück. Beim Essen kleckert sich Anna voll und auf dem Kleid ist nun ` +
          `ein riesiger Fleck. Danach nimmt sie ihre Schultasche und will sich auf den Weg in die Schule machen. ` +
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
          `Vor der Schule sucht Annas Mutter ein schönes Kleid für Anna heraus und macht ihr die Haare. ` +
          `Dann machen Anna und ihre Mutter Frühstück. Beim Essen kleckert sich Anna voll und auf dem Kleid ist nun ` +
          `ein riesiger Fleck. Danach nimmt sie ihre Schultasche und will sich auf den Weg in die Schule machen. ` +
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
    latinPosition: 0,

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
          `Tobi hat Lust auf PLätzchen und entscheidet sich dazu, welche zu backen. Alles läuft gut. Während die Plätzchen im Ofen sind, ` +
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
          `Tobi hat Lust auf Plätzchen und entscheidet sich dazu, welche zu backen. Alles läuft gut. Während die Plätzchen im Ofen sind, ` +
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
          `Tobi hat Lust auf Plätzchen und entscheidet sich dazu, welche zu backen. Alles läuft gut. Während die Plätzchen im Ofen sind, ` +
          `geht Tobi ins Wohnzimmer und schaut fern. Dabei vergisst er die Plätzchen im Ofen. Als seine Mutter in die Küche kommt, sind die Plätzchen völlig verbrannt. ` +
          `Tobi kommt in die Küche und seine Mutter sagt: „Ich glaube, dich sollte ich noch nicht allein in der Küche lassen.“`,

        utterance: "Ich glaube, dich sollte ich noch nicht allein in der Küche lassen.",

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
          `Tobi hat Lust auf Plätzchen und entscheidet sich dazu, welche zu backen. Alles läuft gut. Während die Plätzchen im Ofen sind, ` +
          `geht Tobi ins Wohnzimmer und schaut fern. Dabei vergisst er die Plätzchen im Ofen. Als seine Mutter in die Küche kommt, sind die Plätzchen völlig verbrannt. ` +
          `Tobi kommt in die Küche und seine Mutter sagt: „Nicht so schlimm. Wir probieren es einfach nochmal gemeinsam.“`,

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
    storyId: 21,
    level: 6,
    latinPosition: 1,

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
          `Tobi geht nach draußen, um die Hühner zu füttern. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie Tobi ` +
          `die Hühner streichelt. Tobi kommt wieder nach drinnen und läuft direkt in die Küche. ` +
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
          `Tobi geht nach draußen, um die Hühner zu füttern. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie Tobi ` +
          `die Hühner streichelt. Tobi kommt wieder nach drinnen und läuft direkt in die Küche. ` +
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
          `Tobi geht nach draußen, um die Hühner zu füttern. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie Tobi ` +
          `die Hühner streichelt. Tobi kommt wieder nach drinnen und läuft direkt in die Küche. ` +
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
          `Tobi geht nach draußen, um die Hühner zu füttern. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie Tobi ` +
          `die Hühner streichelt. Tobi kommt wieder nach drinnen und läuft direkt in die Küche. ` +
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
    latinPosition: 2,

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
          `Annas Zimmer ist sehr unordentlich, während das Zimmer ihres Bruders Tobi ordentlich aufgeräumt ist. ` +
          `Die Mutter kommt in Annas Zimmer und sieht die Unordnung. Sie holt Anna zum Abendessen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Klar doch! Wer so fließig ist, hat sich eine Belohnung verdient.“`,

        utterance: "Klar doch! Wer so fließig ist, hat sich eine Belohnung verdient.",

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
          `Annas Zimmer ist sehr ordentlich, genauso wie das Zimmer ihres Bruders Tobi. ` +
          `Die Mutter kommt in Annas Zimmer und sieht, dass Anna aufgeräumt hat. Sie holt Anna zum Abendessen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Klar doch! Wer so fließig ist, hat sich eine Belohnung verdient.“`,

        utterance: "Klar doch! Wer so fließig ist, hat sich eine Belohnung verdient.",

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
          `Annas Zimmer ist sehr unordentlich, während das Zimmer ihres Bruders Tobi ordentlich aufgeräumt ist. ` +
          `Die Mutter kommt in Annas Zimmer und sieht die Unordnung. Sie holt Anna zum Abendessen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Schau dir lieber erstmal das Zimmer von deinem Bruder an!“`,

        utterance: "Schau dir lieber erstmal das Zimmer von deinem Bruder an!",

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
          `Annas Zimmer ist sehr unordentlich, während das Zimmer ihres Bruders Tobi ordentlich aufgeräumt ist. ` +
          `Die Mutter kommt in Annas Zimmer und sieht die Unordnung. Sie holt Anna zum Abendessen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
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
    storyId: 24,
    level: 6,
    latinPosition: 3,

    utteranceReminder: "Die Mutter sagt:",

    situationQuestion: {
        question:
        "Ist die Wohnung zu diesem Zeitpunkt ordentlich oder unordentlich?",

        options: [
        {
            id: "tidy_apartment",
            text: "Ordentlich"
        },
        {
            id: "messy_apartment",
            text: "Unordentlich"
        }
        ]
    },

    versions: {
      irony: {
      childImage: "./Anna.jpg",
        condition: "irony",

        storyText:
          `Anna kommt nach Hause. Sie zieht ihre Schuhe aus und lässt sie mitten im Gang liegen. ` +
          `Dann läuft sie ins Esszimmer und legt dort mehrere Einkaufstüten auf dem Tisch ab. ` +
          `Sie geht weiter ins Wohnzimmer, zieht ihre Jacke aus und lässt sie dort auf dem Boden liegen ` +
          `Dann geht sie in ihr Zimmer. Später kommt Anna in die Küche, wo ihre Mutter gerade kocht. Anna sagt: ` +
          `„Mama, die Nachbarn kommen doch bald zu Besuch, oder?“ Ihre Mutter antwortet: ` +
          `„Ja, und sie werden sich bestimmt sehr willkommen bei uns fühlen.“`,

        utterance: "Ja, und sie werden sich bestimmt sehr willkommen bei uns fühlen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "remove_bags",
              text: "Anna räumt die Tüten vom Tisch weg",
              correct: true
            },
            {
              id: "go_to_room",
              text: "Anna geht in ihr Zimmer und spielt",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_apartment",
          whyTrigger: "messy_apartment"
        }
      },

      praise: {
      childImage: "./Anna.jpg",
        condition: "praise",

        storyText:
          `Anna kommt nach Hause. Im Gang liegen Schuhe auf dem Boden, die sie ordentlich hinstellt. ` +
          `Dann läuft sie ins Esszimmer, wo mehrere Einkaufstüten auf dem Tisch stehen und räumt diese weg. ` +
          `Sie geht weiter ins Wohnzimmer, wo eine Jacke auf dem Boden liegt. Sie hebt sie auf und räumt sie weg ` +
          `Dann geht sie in ihr Zimmer. Später kommt Anna in die Küche, wo ihre Mutter gerade kocht. Anna sagt: ` +
          `„Mama, die Nachbarn kommen doch bald zu Besuch, oder?“ Ihre Mutter antwortet: ` +
          `„Ja, und sie werden sich bestimmt sehr willkommen bei uns fühlen.“`,

        utterance: "Ja, und sie werden sich bestimmt sehr willkommen bei uns fühlen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "go_to_room",
              text:
                "Anna geht in ihr Zimmer und spielt",
              correct: true
            },
            {
              id: "remove_flowers",
              text:
                "Anna räumt eine schöne Vase mit Blumen vom Tisch weg",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "tidy_apartment",
          whyTrigger: "messy_apartment"
        }
      },

      criticism: {
      childImage: "./Anna.jpg",
        condition: "criticism",

        storyText:
          `Anna kommt nach Hause. Sie zieht ihre Schuhe aus und lässt sie mitten im Gang liegen. ` +
          `Dann läuft sie ins Esszimmer und legt dort mehrere Einkaufstüten auf dem Tisch ab. ` +
          `Sie geht weiter ins Wohnzimmer, zieht ihre Jacke aus und lässt sie dort auf dem Boden liegen ` +
          `Dann geht sie in ihr Zimmer. Später kommt Anna in die Küche, wo ihre Mutter gerade kocht. Anna sagt: ` +
          `„Mama, die Nachbarn kommen doch bald zu Besuch, oder?“ Ihre Mutter antwortet: ` +
          `„Ja. Und wegen dir haben wir davor noch einiges zu tun.“`,

        utterance: "Ja. Und wegen dir haben wir davor noch einiges zu tun.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "remove_bags",
              text: "Anna räumt die Tüten vom Tisch weg",
              correct: true
            },
            {
              id: "go_to_room",
              text: "Anna geht in ihr Zimmer und spielt",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_apartment",
          whyTrigger: "tidy_apartment"
        }
      },

      control: {
      childImage: "./Anna.jpg",
        condition: "control",

        storyText:
          `Anna kommt nach Hause. Sie zieht ihre Schuhe aus und lässt sie mitten im Gang liegen. ` +
          `Dann läuft sie ins Esszimmer und legt dort mehrere Einkaufstüten auf dem Tisch ab. ` +
          `Sie geht weiter ins Wohnzimmer, zieht ihre Jacke aus und lässt sie dort auf dem Boden liegen ` +
          `Dann geht sie in ihr Zimmer. Später kommt Anna in die Küche, wo ihre Mutter gerade kocht. Anna sagt: ` +
          `„Mama, die Nachbarn kommen doch bald zu Besuch, oder?“ Ihre Mutter antwortet: ` +
          `„Ja. Lass uns davor die Wohnung noch ein bisschen aufräumen, damit sich unsere Gäste willkommen fühlen.“`,

        utterance:
          "Ja. Lass uns davor die Wohnung noch ein bisschen aufräumen, damit sich unsere Gäste willkommen fühlen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "remove_bags_together",
              text: "Anna und ihre Mutter räumen die Tüten vom Tisch weg",
              correct: true
            },
            {
              id: "go_to_room",
              text: "Anna geht in ihr Zimmer und spielt",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "messy_apartment",
          whyTrigger: "tidy_apartment"
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