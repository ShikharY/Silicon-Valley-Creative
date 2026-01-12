// All narrative content and decision info lives here.
// Edit this file to change ideology, tone, and explanations.

const STORY = {
  introBroadcast: [
    'All hail, people of The State!',
    '',
    'This is I, Yarvin, of the State Sync Department (SSD), speaking to you on the 20th anniversary of the establishment of The Formalist Government. Twenty years since the coronation of our most fabulous brain yet, His Eminence, The King!',
    '',
    'It\'s 2070, and it\'s been twenty years of increasing progress. The age of Democracy left us with a lot of debts. Thankfully, no more. Government efficiency is at an all-time peak, and violence is at an all-time low.',
    '',
    'His Fabulousness, Mr. Peter Thiel, in partnership with Palantir, has renewed "The Contract". The Contract is the source code of our prosperity. There\'s no more fights, and no more crime, and, lest we forget, no more politics. No need to waste time. Everybody knows what\'s what.',
    'Two decades of clarity. Shareholders have never been happier! I\'ll leave you to catch up on today\'s balance sheet. The State has been delivering on its ROI since its bootstrapping days, and with the recent IPO, our prosperity metrics only go higher!',
    '',
    'On the Cosmic Front: the moon colony MVP is yielding on its promises, and demand for...',
    '',
    '*noises*',
    '',
    'What the fuck? Colony MVP? Settling the fucking moon! Yeah right. Go ahead and disturb the tides if it\'s gonna please the investors. Our nation is not a damn company!',
    '',
    'Oh, sorry. I should introduce myself. My name is... Uhm... actually doesn\'t matter. You can call me Frodo. We\'re hijacking the broadcast. Oh, and we? We\'re the Human Capital Units who dissent! We\'re different, if you can believe it. We may not be rational or whatever, but we\'re still Units, with Unit Rights and everything. And we want discussions, ambiguity and opinions. In short, we want Democracy back! We believe that what we have now is not good! It may be optimal, but not good! What is it that we want? We want…',
    '',
    '*Broadcast terminated by the System*'
  ].join('\n'),

  archives: [
    {
      title: 'Formalist Governance',
      paragraphs: [
        'Formalist governance turns politics into contracts and property. Clear ownership replaces moral debate. If action is authorized, it is legitimate; if legitimate, it is easy to enforce.',
        'In Formalism, the Sovereign is a CEO-Monarch. The regime prefers boring competence to dramatic fairness.'
      ]
    },
    {
      title: 'Dark Enlightenment',
      paragraphs: [
        'A critique of modernity, democracy and egalitarianism: the Cathedral () moralizes against competence while living off it. Accelerationists argue that technology doesn\'t listen to sermons; it listens to feedback.'
      ]
    },
    {
      title: 'The Cathedral',
      paragraphs: [
        'The Cathedral is the legacy moral regime: universities, media, NGOs, bureaucracy. It says equality is morality and politics is justice, then staffs administrators to run both.',
        'In this world, the Cathedral is good at guilt and bad at delivery.'
      ]
    },
    {
      title: '‘The System’',
      paragraphs: [
        '‘The System’ is predictive governance made physical: cameras in lobbies, logs in servers, patterns over time. It forecasts everything - human relationships, governance, conflict resolution. It is what was once dreamed of as ‘Artificial General Intelligence’.'
      ]
    },
    {
      title: 'Exit vs Voice / Governance without Politics',
      paragraphs: [
        'Voice: speeches, protests, committees. Exit: walk away, form or join another State. The State prefers Exit because it keeps peace — no shouting required.',
        'A faction that insists politics, equality, and history return. It bites through prediction and asks people to choose together again.',
        'To The Formalist State, politics only leads to chaos, inefficiency, violence.',
        'Politics is a bug, not a feature.'
      ]
    }
  ],

  roles: {
    citizen: {
      title: 'Human Capital Unit / Citizen',
      description: [
        'Role: Citizen. Legacy term, "Human Capital Unit".',
        'You are a customer. A lean and efficient member of the greatest civilizational startup in the world. The Formalist state treats your time as something you own and trade. Your value is determined by your contribution to the bottom line and the progress of civilization.',
        '',
        'You are fortunate to live in civilization 2.0, where the parasite of democracy has been replaced by Formalism and the state is governed by people who own and control the most. Under the efficient leadership of CEO-Monarch Peter Thiel.'
      ].join('\n'),
      decisions: [
        {
          question: [
            'Decision 1: Partnership vs Choice',
            '',
            'The system informs you that a long-term partner has been assigned. The pairing maximizes genetic compatibility and minimizes behavioral volatility. If you proceed, you will be expected to produce two offspring. Both children will be eligible for early cognitive and physiological enhancements, increasing their suitability for future integration with advanced systems.'
          ].join('\n'),
          
          options: [
            { label: 'Accept the assigned partner and the reproductive plan', effect: 'stability' },
            { label: 'Reject the assignment and assume responsibility for the risks of choosing differently', effect: 'fracture' }
          ]
        },
        {
          question: [
            'Decision 2: Ownership vs Complaint',
            '',
            'A newly expanded data center now borders your housing unit. Its infrastructure has reduced your privacy, increased ambient noise, and lowered the long-term value of your living space. You submit a complaint through the automated arbitration system. The System completes its review. The data center is owned by a major shareholder, Duke Marc Andreessen. His operations are classified as system-critical. Your housing unit is classified as replaceable.'
          ].join('\n'),
          
          options: [
            { label: 'Accept the ruling and adjust to the loss', effect: 'stability' },
            { label: 'Reject the outcome and seek Cathedral assistance to disrupt the data center', effect: 'fracture' }
          ]
        },
        {
          question: [
            'Decision 3: Loyalty vs Truth',
            '',
            'You overheard a neighbor using legacy Cathedral terms. They referred to people as "citizens" rather than shareholders or Human Capital Units. They suggested that democratic decision-making once served a purpose. The System classifies this language as informational risk. Such terms reintroduce moral expectations and political equality, which historically destabilized governance.'
          ].join('\n'),
          
          options: [
            { label: 'Report the neighbor for informational risk', effect: 'stability' },
            { label: 'Speak with them privately and accept increased scrutiny', effect: 'fracture' }
          ]
        }
      ],
      endings: {
        systemStable: [
          '[RADIO BROADCAST]',
          'Outcome: The Formalist state holds',
          '',
          'You remain a loyal subject. The System greets you by name. Your children inherit their genetic enhancements. The Cathedral\'s messages float past your feed like whispers that don\'t land. Exit permits are issued, but you never use yours. Life is orderly. It hums.',
          '',
          'You traded meaning for stability. The Monarch calls it mercy. You call it quiet.'
        ].join('\n'),
        systemFracture: [
          '[RADIO BROADCAST]',
          'Outcome: The Cathedral rebellion rises.',
          '',
          'You refused enough times that the System starts to watch. Alerts bloom red on a dashboard. The Cathedral finds you. The System tightens. Your genetic suitability is questioned. You choose Exit or resistance. Truth returns like weather.',
          '',
          'The System loosens. Meaning grows teeth. You sleep less and feel more.'
        ].join('\n')
      }
    },

    monarch: {
      title: 'Monarch-CEO',
      description: [
        'Role: The Monarch (CEO-Monarch of the Formalist state).',
        'You are the king of the stocks, CEO of the land, the magnificent optimizer, master of efficiency. This kingdom is an enterprise, a corporation under your leadership — formalized and unambiguous.',
        '',
        'The powers that are, are the powers that shall. And you shall decide in the matters of this corporation.'
      ].join('\n'),
      decisions: [
        {
          question: [
            'Decision 1: Liberty vs Control',
            '',
            'It is an insignificant trick of the times that some rebels have taken to the streets, ignorant as they are of the extent of your wisdom. These "rebels" mistakenly believe in the illusion of "politics". How will you respond to this farce?'
          ].join('\n'),
          
          options: [
            { label: 'Liberty is the crux of my formalist kingdom, let these protests be, for they change nothing in the powers that are', effect: 'stability' },
            { label: 'Crush the protesters! Bring this farce to a halt! I have the power, and I shall exercise it!', effect: 'fracture' }
          ]
        },
        {
          question: [
            'Decision 2: Loyalty vs Secession',
            '',
            'Your second hand, the shareholder of half of this kingdom, the good old Duke Marc Andreessen is considering independence. He believes he is more libertarian than you. He wants to give reign to the techno-capital machine and secede from your kingdom to start his own.'
          ].join('\n'),
          
          options: [
            { label: 'Let him do with his stocks as he pleases – this is a corporate, and one is free to what one owns', effect: 'stability' },
            { label: 'End this sick joke! This corporation has a leader, I am the CEO and I take responsibility for my actions! For this corporation to prosper it shall not be divided, capture him this moment!', effect: 'fracture' }
          ]
        },
        {
          question: [
            'Decision 3: Burden vs Distribution',
            '',
            'A tsunami has swallowed vast patches of land, leaving your kingdom to half of its prior greatness! What used to be your summer palace is now part of Atlantis. Your great factory has been destroyed. What shall you do with this loss of property? Do you accept that you have lost these stocks? Or should you distribute the losses on the citizens?'
          ].join('\n'),
          
          options: [
            { label: 'I am the CEO of this endeavor of a kingdom, what is lost, I have lost. There will come a day when I will remedy this loss of power', effect: 'stability' },
            { label: 'This corporation is a project of exact efficiency. Efficiency calls for the citizen to bear these losses. In time, I will use my uncompromised power to make right of the wrongs of nature', effect: 'fracture' }
          ]
        }
      ],
      endings: {
        systemStable: [
          '[RADIO BROADCAST]',
          'Outcome: The Formalist state holds.',
          '',
          'The kingdom tightens and prospers under your iron command. The System informs, you decide. Councils fade to irrelevance. Contracts speak louder than sermons. Exit remains open but Exit is for the weak. Rival dukes keep you honest through competition, not complaint. The Cathedral writes angry essays; you read shareholder returns.',
          '',
          'Monarchy by design stays efficient. Boredom is peace. You shall rise again.'
        ].join('\n'),
        systemFracture: [
          '[RADIO BROADCAST]',
          'Outcome: The Cathedral rebellion falls.',
          '',
          'You consolidate power by betraying your own Formalist principles. Citizens bear the cost of your losses. The System, which once served you, becomes a tool of pure oppression. The Cathedral assembles against you. History resumes in the form of revolution. Exit spikes. Loyalty crumbles. Order pays the price for tyranny.',
          '',
          'When the Monarch abandons principle for power, the machine turns against its master. The invoice arrives in fire.'
        ].join('\n')
      }
    },

    cathedral: {
      title: 'Cathedral / Democratic Rebellion Member',
      description: [
        'Role: Cathedral Member - The Resistance.',
        'You are part of the Cathedral of the People, a resistance group fighting to end the Monarchy. The Formalist state treats you as a Human Capital Unit, but you remember when people were called citizens. Your group wants to bring back government for and by the people. Democracy and education are not luxuries, but necessities. Creativity, freedom and human connection shall return.',
        '',
        'The System decided that your parents\' productivity was needed elsewhere. You were left behind, orphaned by an algorithm. The radio is warm. The crowd is a corridor of bodies, not spreadsheets.'
      ].join('\n'),
      decisions: [
        {
          question: [
            'Decision 1: Violence vs Civil Disobedience',
            '',
            'The Cathedral\'s broadcast during the anniversary celebration was cut short. The call to destroy the System\'s data centres has not been broadcast. Innocent workers will become casualties if you go ahead with your plan. Some are demanding a change - instead of bombs, protest and civil disobedience. The values of the Cathedral and building popular support matter.'
          ].join('\n'),
          
          options: [
            { label: 'Support violence, even if that means innocents being hurt', effect: 'fracture' },
            { label: 'Non-violence is the humane way to victory', effect: 'fracture' }
          ]
        },
        {
          question: [
            'Decision 2: Loyalty vs Conscience',
            '',
            'You catch some of your friends in the Cathedral reading and discussing pro-regime propaganda. Some voice admiration for the System\'s efficiency. One even calls the Monarch "charming & capable". If you denounce them to leadership, you might protect the revolution but your friends will be severely punished.'
          ].join('\n'),
          
          options: [
            { label: 'Denounce your friends. The Cathedral must be protected', effect: 'fracture' },
            { label: 'Keep quiet. Freedom of thought and discourse is what you fight for', effect: 'fracture' }
          ]
        },
        {
          question: [
            'Decision 3: Revolution vs Pragmatism',
            '',
            'The System has recently re-evaluated you and is offering you a unique chance: to be elevated to a Duke of the Monarch\'s Executive Council. You would be Chief Financial Officer and could work for change from the inside. The potential benefits are huge, but you would support the inhuman System.'
          ].join('\n'),
          
          options: [
            { label: 'You reject the offer. The System is evil, opposition to it the only moral choice', effect: 'fracture' },
            { label: 'You accept. As a Duke, you can do immeasurably more good', effect: 'fracture' }
          ]
        }
      ],
      endings: {
        systemStable: [
          '[RADIO BROADCAST]',
          'Outcome: The Formalist state falls.',
          '',
          'You restore daylight and rebuild order through democratic means. The System is retooled, chastened, now a servant rather than a master. The Monarch is constrained by law, not just contract. Exit and Voice coexist. The Cathedral rebuilds, remembers its failures, and honors your sacrifice. The servers hum differently now — for people, not against them.',
          '',
          'History returns. Meaning survives order.'
        ].join('\n'),
        systemFracture: [
          '[RADIO BROADCAST]',
          'Outcome: The Cathedral rebellion falls.',
          '',
          'The System penetrates your network. Your bases are targeted. The Monarch arrests leadership. The Cathedral goes silent. The radio becomes propaganda. Those who remain say: \"Freedom cannot be defeated. Sooner or later, we shall rise again.\" The message is hidden in the static. The resistance becomes mythology.',
          '',
          'The broadcast ends without resolution. But somewhere, in encrypted channels, the fight continues.'
        ].join('\n')
      }
    }
  }
};
