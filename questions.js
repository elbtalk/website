const QUESTIONS = [
  {
    "q": "I’m 18 and my brother is 20, so he’s ........ me.",
    "options": [
      "the oldest of",
      "older than",
      "as old as"
    ],
    "answer": 1
  },
  {
    "q": "Carl’s very ........ . He’s never late, and he never forgets to do things.",
    "options": [
      "reliable",
      "patient",
      "strict"
    ],
    "answer": 0
  },
  {
    "q": "We stayed in a lovely villa ........ the sea.",
    "options": [
      "it overlooks",
      "overlooked",
      "overlooking"
    ],
    "answer": 2
  },
  {
    "q": "Not until the 1980s ........ for the average person to own a computer.",
    "options": [
      "it was possible",
      "was it possible",
      "was possible"
    ],
    "answer": 1
  },
  {
    "q": "Jan ........ her arm on a hot iron.",
    "options": [
      "broke",
      "burned",
      "sprained"
    ],
    "answer": 1
  },
  {
    "q": "Tomorrow’s a holiday, so we ........ go to work.",
    "options": [
      "have to",
      "mustn't",
      "don't have to"
    ],
    "answer": 2
  },
  {
    "q": "I usually ........ swimming at least once a week.",
    "options": [
      "go",
      "do",
      "play"
    ],
    "answer": 0
  },
  {
    "q": "My friend Siena ........ to Russia last year.",
    "options": [
      "went",
      "has gone",
      "has been"
    ],
    "answer": 0
  },
  {
    "q": "This is ........ area, with a lot of factories and warehouses.",
    "options": [
      "an agricultural",
      "an industrial",
      "a residential"
    ],
    "answer": 1
  },
  {
    "q": "If I ........ well in my exams, I ........ to university.",
    "options": [
      "will do ; will go",
      "will do ; go",
      "do ; will go"
    ],
    "answer": 2
  },
  {
    "q": "She was so upset that she burst ........ tears.",
    "options": [
      "into",
      "out",
      "with"
    ],
    "answer": 0
  },
  {
    "q": "Where did you go ........ holiday last year?",
    "options": [
      "for",
      "on",
      "to"
    ],
    "answer": 1
  },
  {
    "q": "Ocean currents ........ play an important part in regulating global climate.",
    "options": [
      "are known to",
      "thought to",
      "are believed that they"
    ],
    "answer": 0
  },
  {
    "q": "My cousin ........ getting a job in Japan.",
    "options": [
      "would like",
      "is planning",
      "is thinking of"
    ],
    "answer": 2
  },
  {
    "q": "I can’t ........ your hair, because I haven’t got any scissors.",
    "options": [
      "brush",
      "cut",
      "wash"
    ],
    "answer": 1
  },
  {
    "q": "I wish I ........ have an exam tomorrow!",
    "options": [
      "don't",
      "didn't",
      "won't"
    ],
    "answer": 1
  },
  {
    "q": "The government plans to ........ taxes on sales of luxury items.",
    "options": [
      "increase",
      "expand",
      "go up"
    ],
    "answer": 0
  },
  {
    "q": "When I first moved to Hong Kong, life in a different country was very strange, but now I’m used ........ here.",
    "options": [
      "living",
      "to live",
      "to living"
    ],
    "answer": 2
  },
  {
    "q": "There ........ milk in the fridge.",
    "options": [
      "is some",
      "are some",
      "is a"
    ],
    "answer": 0
  },
  {
    "q": "Criminals are people who are guilty of ........ the law.",
    "options": [
      "breaking",
      "cheating",
      "committing"
    ],
    "answer": 0
  },
  {
    "q": "Why on earth isn’t Josh here yet? ........ for him for over an hour!",
    "options": [
      "I'm walking",
      "I've been waiting",
      "I've waited"
    ],
    "answer": 1
  },
  {
    "q": "“It’s pouring down, and it’s freezing.” What are the weather conditions?",
    "options": [
      "high winds and snow",
      "heavy rain and cold temperatures",
      "thick cloud but quite warm"
    ],
    "answer": 1
  },
  {
    "q": "........ feeling OK? You don’t look very well.",
    "options": [
      "Do you",
      "You are",
      "Are you"
    ],
    "answer": 2
  },
  {
    "q": "Daniel’s hair is getting far too long; he should ........ soon.",
    "options": [
      "cut it",
      "have cut it",
      "have it cut"
    ],
    "answer": 2
  },
  {
    "q": "Mandy works for a computer software company. She got ........ recently, and so now she’s an area manager.",
    "options": [
      "made redundant",
      "promoted",
      "a raise"
    ],
    "answer": 1
  },
  {
    "q": "I can’t hear you – it’s ........ noisy in here.",
    "options": [
      "too",
      "too much",
      "too many"
    ],
    "answer": 0
  },
  {
    "q": "Jamal has just sent me ........ to arrange plans for this weekend.",
    "options": [
      "a blog",
      "an email",
      "a website"
    ],
    "answer": 1
  },
  {
    "q": "Susan hasn't emailed the copy ........",
    "options": [
      "until",
      "yet",
      "so since"
    ],
    "answer": 1
  },
  {
    "q": "Photographers and designers need to be very ........ .",
    "options": [
      "creative",
      "fit",
      "annoying"
    ],
    "answer": 0
  },
  {
    "q": "The global financial crisis, ........ is forcing lots of small businesses to close, does not look set to end soon.",
    "options": [
      "it",
      "that",
      "which"
    ],
    "answer": 2
  },
  {
    "q": "There ........ a terrible accident if the pilot hadn’t reacted so quickly.",
    "options": [
      "had been",
      "was",
      "would have been"
    ],
    "answer": 2
  },
  {
    "q": "“Are you ready to order?” “Not yet – I’m still looking at the ........ .”",
    "options": [
      "bill",
      "menu",
      "service"
    ],
    "answer": 1
  },
  {
    "q": "“My job is never boring.” The speaker’s job is always ........ .",
    "options": [
      "interesting",
      "popular",
      "difficult"
    ],
    "answer": 0
  },
  {
    "q": "I’ve been working here ........ about the last two years.",
    "options": [
      "during",
      "for",
      "since"
    ],
    "answer": 1
  },
  {
    "q": "“It leaves from Platform 2 at 4.15.” The speaker is talking about ........ .",
    "options": [
      "an airline flight",
      "a train",
      "a taxi"
    ],
    "answer": 1
  },
  {
    "q": "I went to a lovely ........ last Saturday. The bride was my best friend when we were at school.",
    "options": [
      "anniversary",
      "marriage",
      "wedding"
    ],
    "answer": 2
  },
  {
    "q": "“I’ve got a headache.” “Maybe you ........ to take an aspirin.”",
    "options": [
      "should",
      "ought",
      "don't"
    ],
    "answer": 1
  },
  {
    "q": "The patient had an ........ to insert metal pins in his broken leg.",
    "options": [
      "injection",
      "operation",
      "X-Ray"
    ],
    "answer": 1
  },
  {
    "q": "She won a seat in parliament at the last ........ .",
    "options": [
      "general election",
      "opinion poll",
      "referendum"
    ],
    "answer": 0
  },
  {
    "q": "I’m surprised you didn’t get upset. If someone said that to me, ........ really angry.",
    "options": [
      "I'm",
      "I was",
      "I'd be"
    ],
    "answer": 2
  },
  {
    "q": "This used to be ........ part of the city, but since the old buildings were renovated it’s become a very fashionable area.",
    "options": [
      "an affluent",
      "a run-down",
      "a trendy"
    ],
    "answer": 1
  },
  {
    "q": "Cassie went to bed early because she was ........ .",
    "options": [
      "tired",
      "stressed",
      "relaxed"
    ],
    "answer": 0
  },
  {
    "q": "In the 1960s, computers were ........ expensive that ordinary people couldn’t afford them.",
    "options": [
      "so",
      "such",
      "too"
    ],
    "answer": 0
  },
  {
    "q": "Do you want ........ the match tonight?",
    "options": [
      "watching",
      "watch",
      "to watch"
    ],
    "answer": 2
  },
  {
    "q": "Researchers claim the new discovery is a major ........ in the fight against malaria.",
    "options": [
      "breakthrough",
      "investigation",
      "progress"
    ],
    "answer": 0
  },
  {
    "q": "The Maths problem was really difficult and I just couldn’t ........ the answer.",
    "options": [
      "check in",
      "set off",
      "work out"
    ],
    "answer": 2
  },
  {
    "q": "When I was a child, I never ........ about the future.",
    "options": [
      "have worried",
      "used to worry",
      "was worrying"
    ],
    "answer": 1
  },
  {
    "q": "A local politician has ........ charges of corruption made by the opposition party.",
    "options": [
      "accused",
      "blamed",
      "denied"
    ],
    "answer": 2
  },
  {
    "q": "........ worries me about society today is how completely we have come to depend on technology.",
    "options": [
      "That",
      "What",
      "Which"
    ],
    "answer": 1
  },
  {
    "q": "Cats and dogs are usually kept as ........ .",
    "options": [
      "farm animals",
      "wild animals",
      "pets"
    ],
    "answer": 2
  }
];
