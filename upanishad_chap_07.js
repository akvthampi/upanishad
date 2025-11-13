// upanishad_chap_07.js
const chapterMetadata = {
    title: "Chapter 7: Cosmology & Creation",
    info: "Universe origins and cosmic order (120+ cards)"
};
const flashcards = [
    { 
        question: "What is the fundamental view of creation in the Upanishads?",
        answer: "The universe is not a separate creation but a manifestation of Brahman - the one reality appearing as many through Maya.",
        concept: "Fundamental View of Creation"
    },
    { 
        question: "How do the Upanishads describe the state before creation?",
        answer: "Only Brahman exists - infinite, non-dual consciousness, without any differentiation of name and form.",
        concept: "Pre-creation State"
    },
    { 
        question: "What is the first principle to emerge from Brahman?",
        answer: "Akasha (space/ether) - the subtlest element that provides the field for all subsequent manifestation.",
        concept: "First Emergence - Akasha"
    },
    { 
        question: "What is the sequence of elemental evolution?",
        answer: "From Brahman emerges Akasha, from Akasha emerges Vayu (air), from Vayu emerges Agni (fire), from Agni emerges Apas (water), from Apas emerges Prithvi (earth).",
        concept: "Elemental Evolution Sequence"
    },
    { 
        question: "What is 'Satkaryavada'?",
        answer: "The doctrine that the effect pre-exists in the cause - the universe exists in potential form in Brahman before manifestation.",
        concept: "Satkaryavada - Effect in Cause"
    },
    { 
        question: "What is 'Vivartavada'?",
        answer: "The theory of apparent transformation - the world is an apparent modification of Brahman, not a real transformation.",
        concept: "Vivartavada - Apparent Transformation"
    },
    { 
        question: "How does Vivartavada differ from real transformation?",
        answer: "In real transformation, the cause changes; in apparent transformation, the cause remains unchanged while appearing as effect.",
        concept: "Vivartavada vs Real Transformation"
    },
    { 
        question: "What is the 'Panchikarana' process?",
        answer: "The quintuplication process where each element divides and combines with others to form the gross elements of manifestation.",
        concept: "Panchikarana - Quintuplication"
    },
    { 
        question: "How does Panchikarana work?",
        answer: "Each element divides into two halves; one half remains pure, the other divides into four parts that combine with the other elements.",
        concept: "Panchikarana Process"
    },
    { 
        question: "What is 'Hiranyagarbha'?",
        answer: "The cosmic egg or golden womb - the first manifestation of individualized consciousness that contains the universe in potential.",
        concept: "Hiranyagarbha - Cosmic Egg"
    },
    { 
        question: "What is 'Virat'?",
        answer: "The cosmic physical body - the totality of gross manifestation as a single cosmic being.",
        concept: "Virat - Cosmic Physical"
    },
    { 
        question: "What is 'Sutratman'?",
        answer: "The thread-self - the cosmic subtle body that connects all individual beings like beads on a string.",
        concept: "Sutratman - Thread Self"
    },
    { 
        question: "What are the three bodies of the cosmos?",
        answer: "1) Sthula (gross - Virat), 2) Sukshma (subtle - Hiranyagarbha), 3) Karana (causal - Ishvara).",
        concept: "Cosmic Three Bodies"
    },
    { 
        question: "What is the role of Maya in creation?",
        answer: "Maya is the creative power of Brahman that makes the non-dual appear as dual, the formless as forms.",
        concept: "Maya in Creation"
    },
    { 
        question: "What are the two powers of Maya?",
        answer: "Avarana Shakti (veiling power) that conceals the real, and Vikshepa Shakti (projecting power) that projects the unreal.",
        concept: "Two Powers of Maya"
    },
    { 
        question: "How do the Upanishads describe the beginning of time?",
        answer: "Time begins with creation; in the absolute state, there is no time, only eternity.",
        concept: "Beginning of Time"
    },
    { 
        question: "What is 'Kalpa'?",
        answer: "A cosmic cycle of creation and dissolution lasting 4.32 billion human years.",
        concept: "Kalpa - Cosmic Cycle"
    },
    { 
        question: "What are the four Yugas?",
        answer: "Satya Yuga (1,728,000 years), Treta Yuga (1,296,000 years), Dvapara Yuga (864,000 years), Kali Yuga (432,000 years).",
        concept: "Four Yugas"
    },
    { 
        question: "What is 'Manvantara'?",
        answer: "The period of a Manu - 71 Mahayugas, during which a particular cosmic order and humanity prevail.",
        concept: "Manvantara"
    },
    { 
        question: "How many Manvantaras are in one Kalpa?",
        answer: "14 Manvantaras, each with its own Manu and distinct characteristics.",
        concept: "Manvantaras per Kalpa"
    },
    { 
        question: "What is 'Pralaya'?",
        answer: "Cosmic dissolution - when the entire manifested universe merges back into its unmanifest cause.",
        concept: "Pralaya - Dissolution"
    },
    { 
        question: "What are the types of Pralaya?",
        answer: "1) Nitya (daily dissolution in deep sleep), 2) Naimittika (cosmic dissolution), 3) Prakrita (elemental dissolution), 4) Atyantika (absolute liberation).",
        concept: "Types of Dissolution"
    },
    { 
        question: "What happens during cosmic dissolution?",
        answer: "All gross and subtle elements dissolve in reverse order, finally merging into Brahman, with only the unmanifest seeds remaining.",
        concept: "Process of Dissolution"
    },
    { 
        question: "What is 'Mahapralaya'?",
        answer: "The great dissolution at the end of Brahma's life - 100 years of 360 days, each day being one Kalpa.",
        concept: "Mahapralaya - Great Dissolution"
    },
    { 
        question: "How does creation begin again after dissolution?",
        answer: "From the unmanifest seeds (Samskaras) that remain in Brahman, creation emerges again through the will of Ishvara.",
        concept: "Re-creation Process"
    },
    { 
        question: "What is the 'Nasadiya Sukta' cosmology?",
        answer: "The creation hymn from Rigveda that describes the state before creation and the emergence of existence from non-existence.",
        concept: "Nasadiya Sukta"
    },
    { 
        question: "What is the 'Purusha Sukta' cosmology?",
        answer: "The hymn describing cosmic creation through the sacrifice of the cosmic person (Purusha).",
        concept: "Purusha Sukta"
    },
    { 
        question: "How does the Chandogya Upanishad describe creation?",
        answer: "As the self-expression of Brahman: 'It thought, may I be many, may I grow forth' and projected the universe.",
        concept: "Chandogya Creation Account"
    },
    { 
        question: "What is the 'Aitareya' creation account?",
        answer: "Describes how the Self (Atman) created the universe and then entered it as the individual consciousness.",
        concept: "Aitareya Creation"
    },
    { 
        question: "What is the 'Brihadaranyaka' creation narrative?",
        answer: "Describes creation as the self-division of the One into male and female principles and subsequent multiplication.",
        concept: "Brihadaranyaka Creation"
    },
    { 
        question: "What is the role of 'Ishvara' in creation?",
        answer: "Ishvara is Brahman with Maya - the personal God who creates, sustains, and dissolves the universe.",
        concept: "Ishvara's Role"
    },
    { 
        question: "What is 'Srishti'?",
        answer: "The process of creation or emanation - the unfolding of the universe from its unmanifest state.",
        concept: "Srishti - Creation"
    },
    { 
        question: "What is 'Sthiti'?",
        answer: "The sustenance of creation - the continuous maintenance of the universe through cosmic laws.",
        concept: "Sthiti - Sustenance"
    },
    { 
        question: "What is 'Samhara'?",
        answer: "The dissolution or withdrawal of creation back into its source.",
        concept: "Samhara - Dissolution"
    },
    { 
        question: "What are the three functions of Ishvara?",
        answer: "Srishti (creation), Sthiti (sustenance), and Samhara (dissolution) - known as the three divine acts.",
        concept: "Three Divine Acts"
    },
    { 
        question: "What is 'Tirodhana'?",
        answer: "The veiling power - Ishvara's function of concealing the real nature of things through Maya.",
        concept: "Tirodhana - Veiling"
    },
    { 
        question: "What is 'Anugraha'?",
        answer: "The grace function - Ishvara's role in revealing the truth and granting liberation.",
        concept: "Anugraha - Grace"
    },
    { 
        question: "What are the five functions of Ishvara?",
        answer: "Creation, sustenance, dissolution, veiling, and grace - the complete cosmic management.",
        concept: "Five Functions of Ishvara"
    },
    { 
        question: "What is 'Maya' at the cosmic level?",
        answer: "The divine creative power that makes the impossible possible - making the infinite appear finite, the one appear many.",
        concept: "Cosmic Maya"
    },
    { 
        question: "What is 'Avidya' at the individual level?",
        answer: "The same Maya operating at individual level as ignorance - the failure to recognize one's true nature.",
        concept: "Individual Avidya"
    },
    { 
        question: "What are the 'Karanas' (causes) of creation?",
        answer: "1) Upadana Karana (material cause - Brahman), 2) Nimitta Karana (efficient cause - Ishvara).",
        concept: "Causes of Creation"
    },
    { 
        question: "How is Brahman both material and efficient cause?",
        answer: "As clay is both the material and the shaping intelligence behind a pot, Brahman is both the substance and the intelligence behind creation.",
        concept: "Brahman as Dual Cause"
    },
    { 
        question: "What is the 'Reflection Theory' of creation?",
        answer: "The universe is like a reflection of Brahman in Maya - unreal as separate entity but real as reflection.",
        concept: "Reflection Theory"
    },
    { 
        question: "What is the 'Appearance Theory'?",
        answer: "The world is an appearance in Brahman, like a snake appearing in a rope - ultimately unreal though apparently real.",
        concept: "Appearance Theory"
    },
    { 
        question: "What are the 'Lokas' (worlds) in Upanishadic cosmology?",
        answer: "The fourteen worlds - seven upper (Bhur, Bhuvar, Svar, Mahar, Janar, Tapar, Satya) and seven lower.",
        concept: "Fourteen Worlds"
    },
    { 
        question: "What is 'Bhur Loka'?",
        answer: "The physical earth plane - the gross material world we inhabit.",
        concept: "Bhur Loka - Earth Plane"
    },
    { 
        question: "What is 'Bhuvar Loka'?",
        answer: "The atmospheric plane - the subtle world between earth and heaven.",
        concept: "Bhuvar Loka - Atmospheric"
    },
    { 
        question: "What is 'Svar Loka'?",
        answer: "The heavenly plane - the world of light and celestial beings.",
        concept: "Svar Loka - Heaven"
    },
    { 
        question: "What is 'Mahar Loka'?",
        answer: "The great world - abode of great sages and perfected beings.",
        concept: "Mahar Loka - Great World"
    },
    { 
        question: "What is 'Janar Loka'?",
        answer: "The world of divine progenitors - beings who assist in creation.",
        concept: "Janar Loka - Progenitors"
    },
    { 
        question: "What is 'Tapar Loka'?",
        answer: "The world of austerity - abode of deities who practice intense meditation.",
        concept: "Tapar Loka - Austerity"
    },
    { 
        question: "What is 'Satya Loka'?",
        answer: "The world of truth - the highest plane of existence, closest to Brahman.",
        concept: "Satya Loka - Truth World"
    },
    { 
        question: "What are the seven lower worlds?",
        answer: "Atala, Vitala, Sutala, Talatala, Mahatala, Rasatala, Patala - progressively denser realms.",
        concept: "Seven Lower Worlds"
    },
    { 
        question: "What is the 'Cosmic Person' (Purusha) concept?",
        answer: "The universe visualized as a giant person, with different cosmic principles corresponding to body parts.",
        concept: "Cosmic Person"
    },
    { 
        question: "How is the cosmic person described?",
        answer: "The sun is his eyes, the wind his breath, space his body, the earth his feet - the entire cosmos is his form.",
        concept: "Description of Cosmic Person"
    },
    { 
        question: "What is 'Viraj'?",
        answer: "The cosmic feminine principle - the manifested universe as the consort of the cosmic person.",
        concept: "Viraj - Cosmic Feminine"
    },
    { 
        question: "What are the 'Devas' (divine beings)?",
        answer: "Cosmic intelligences that govern natural forces and help maintain cosmic order.",
        concept: "Devas - Divine Beings"
    },
    { 
        question: "What is 'Rta'?",
        answer: "Cosmic order - the fundamental law that governs the harmonious functioning of the universe.",
        concept: "Rta - Cosmic Order"
    },
    { 
        question: "How does Rta relate to Dharma?",
        answer: "Rta is cosmic order, Dharma is its human expression - living in harmony with cosmic laws.",
        concept: "Rta and Dharma"
    },
    { 
        question: "What is the 'Wheel of Creation' analogy?",
        answer: "The universe as a wheel with hub (Brahman), spokes (cosmic principles), and rim (manifested world).",
        concept: "Wheel of Creation"
    },
    { 
        question: "What is the 'Spider Web' analogy?",
        answer: "Brahman projecting the universe from itself like a spider projecting its web from its own substance.",
        concept: "Spider Web Analogy"
    },
    { 
        question: "What is the 'Fire Spark' analogy?",
        answer: "Individual beings emerging from Brahman like sparks from a fire - essentially the same substance.",
        concept: "Fire Spark Analogy"
    },
    { 
        question: "What is the 'Ocean Wave' analogy?",
        answer: "The universe as waves in the ocean of Brahman - apparently different but essentially one.",
        concept: "Ocean Wave Analogy"
    },
    { 
        question: "What is 'Akasha' in cosmology?",
        answer: "The first element - infinite space that contains all other elements and provides the field for manifestation.",
        concept: "Akasha - Cosmic Space"
    },
    { 
        question: "What are the properties of Akasha?",
        answer: "All-pervasiveness, subtleness, sound as its quality, and being the medium for all manifestation.",
        concept: "Properties of Akasha"
    },
    { 
        question: "What is 'Vayu' (air)?",
        answer: "The second element - representing movement, touch, and the principle of motion in cosmos.",
        concept: "Vayu - Air Element"
    },
    { 
        question: "What is 'Agni' (fire)?",
        answer: "The third element - representing transformation, light, heat, and the digestive principle.",
        concept: "Agni - Fire Element"
    },
    { 
        question: "What is 'Apas' (water)?",
        answer: "The fourth element - representing cohesion, liquidity, and the principle of binding.",
        concept: "Apas - Water Element"
    },
    { 
        question: "What is 'Prithvi' (earth)?",
        answer: "The fifth element - representing solidity, stability, and the principle of form.",
        concept: "Prithvi - Earth Element"
    },
    { 
        question: "What are the 'Tanmatras'?",
        answer: "The subtle elements - the essences behind gross elements: Shabda (sound), Sparsha (touch), Rupa (form), Rasa (taste), Gandha (smell).",
        concept: "Tanmatras - Subtle Elements"
    },
    { 
        question: "What are the 'Jnanendriyas' (sense organs)?",
        answer: "Ears (hearing), skin (touch), eyes (sight), tongue (taste), nose (smell) - the instruments of knowledge.",
        concept: "Jnanendriyas - Sense Organs"
    },
    { 
        question: "What are the 'Karmendriyas' (action organs)?",
        answer: "Speech, hands, feet, excretory, reproductive - the instruments of action.",
        concept: "Karmendriyas - Action Organs"
    },
    { 
        question: "What is 'Antahkarana' (internal organ)?",
        answer: "The fourfold internal instrument: Manas (mind), Buddhi (intellect), Chitta (memory), Ahamkara (ego).",
        concept: "Antahkarana - Internal Organ"
    },
    { 
        question: "What is the 'Prana' cosmology?",
        answer: "The universe as the expression of cosmic life force with its five functions.",
        concept: "Prana Cosmology"
    },
    { 
        question: "What are the five cosmic Pranas?",
        answer: "Prana (inhalation), Apana (exhalation), Vyana (circulation), Udana (ascension), Samana (assimilation).",
        concept: "Five Cosmic Pranas"
    },
    { 
        question: "What is the 'Three Gunas' cosmology?",
        answer: "The universe as the play of three qualities: Sattva (purity), Rajas (activity), Tamas (inertia).",
        concept: "Three Gunas Cosmology"
    },
    { 
        question: "How do the Gunas operate in creation?",
        answer: "Sattva reveals, Rajas activates, Tamas veils - their interplay creates the diversity of manifestation.",
        concept: "Gunas in Creation"
    },
    { 
        question: "What is the 'Chakra' system in cosmology?",
        answer: "The energy centers in the cosmic person corresponding to different planes of existence.",
        concept: "Cosmic Chakra System"
    },
    { 
        question: "What are the main cosmic Chakras?",
        answer: "Muladhara (earth), Svadhishthana (water), Manipura (fire), Anahata (air), Vishuddha (space), Ajna (mind), Sahasrara (consciousness).",
        concept: "Seven Cosmic Chakras"
    },
    { 
        question: "What is the 'Nadi' system?",
        answer: "The energy channels in the cosmic body through which life force flows.",
        concept: "Cosmic Nadi System"
    },
    { 
        question: "What are the main Nadis?",
        answer: "Ida (lunar), Pingala (solar), Sushumna (central) - the three main energy channels.",
        concept: "Three Main Nadis"
    },
    { 
        question: "What is the 'Microcosm-Macrocosm' correspondence?",
        answer: "The individual contains the entire cosmos in miniature; as is the individual, so is the universe.",
        concept: "Microcosm-Macrocosm"
    },
    { 
        question: "What is 'Brahmanda'?",
        answer: "The cosmic egg - the universe as a giant egg containing all worlds and beings.",
        concept: "Brahmanda - Cosmic Egg"
    },
    { 
        question: "What is 'Pinda'?",
        answer: "The individual body - the microcosmic counterpart of the cosmic egg.",
        concept: "Pinda - Microcosm"
    },
    { 
        question: "What is the 'Yuga Cycle' theory?",
        answer: "The cyclical evolution and involution of consciousness through the four ages.",
        concept: "Yuga Cycle Theory"
    },
    { 
        question: "What happens in Satya Yuga?",
        answer: "The golden age - truth prevails, humanity lives in harmony with cosmic laws, spiritual knowledge is accessible.",
        concept: "Satya Yuga - Golden Age"
    },
    { 
        question: "What characterizes Treta Yuga?",
        answer: "The silver age - decline begins, rituals become important, slight diminution of truth and righteousness.",
        concept: "Treta Yuga - Silver Age"
    },
    { 
        question: "What marks Dvapara Yuga?",
        answer: "The bronze age - further decline, focus on external worship, truth and righteousness diminish more.",
        concept: "Dvapara Yuga - Bronze Age"
    },
    { 
        question: "What defines Kali Yuga?",
        answer: "The iron age - maximum decline, materialism prevails, spiritual knowledge becomes rare, conflict increases.",
        concept: "Kali Yuga - Iron Age"
    },
    { 
        question: "What is the duration of each Yuga?",
        answer: "Satya: 1,728,000 years; Treta: 1,296,000; Dvapara: 864,000; Kali: 432,000 - in descending ratio 4:3:2:1.",
        concept: "Yuga Durations"
    },
    { 
        question: "What is 'Sandhya' between Yugas?",
        answer: "The twilight periods between Yugas - transition phases where one age transforms into another.",
        concept: "Sandhya - Transition Periods"
    },
    { 
        question: "What is the current cosmic age?",
        answer: "We are in Kali Yuga, which began in 3102 BCE and will last for 432,000 years.",
        concept: "Current Cosmic Age"
    },
    { 
        question: "What happens at the end of Kali Yuga?",
        answer: "A partial dissolution occurs, followed by the beginning of a new Satya Yuga, continuing the cycle.",
        concept: "End of Kali Yuga"
    },
    { 
        question: "What is 'Manu' in cosmology?",
        answer: "The progenitor of humanity for each Manvantara - the archetypal human who establishes the pattern for that age.",
        concept: "Manu - Progenitor"
    },
    { 
        question: "Who is the current Manu?",
        answer: "Vaivasvata Manu - the seventh Manu of the current Kalpa.",
        concept: "Current Manu"
    },
    { 
        question: "What are the 'Fourteen Indras'?",
        answer: "The kings of gods for each Manvantara - each Manvantara has its own Indra.",
        concept: "Fourteen Indras"
    },
    { 
        question: "What is 'Sapta Rishis'?",
        answer: "The seven sages who preserve knowledge through the ages and guide humanity.",
        concept: "Sapta Rishis - Seven Sages"
    },
    { 
        question: "What is the 'Cosmic Dance' of Shiva?",
        answer: "The continuous process of creation, sustenance, and dissolution as the divine play of consciousness.",
        concept: "Cosmic Dance"
    },
    { 
        question: "What is 'Ananda Lahari'?",
        answer: "The wave of bliss - the cosmic vibration that underlies all creation.",
        concept: "Ananda Lahari - Bliss Wave"
    },
    { 
        question: "What is 'Spanda'?",
        answer: "The divine vibration - the subtle pulsation of consciousness that gives rise to manifestation.",
        concept: "Spanda - Divine Vibration"
    },
    { 
        question: "What is 'Nada' in cosmology?",
        answer: "Cosmic sound - the primordial vibration from which all creation emerges.",
        concept: "Nada - Cosmic Sound"
    },
    { 
        question: "What is 'Bindu'?",
        answer: "The point of creation - the concentrated potential from which the universe expands.",
        concept: "Bindu - Creation Point"
    },
    { 
        question: "What is the 'Big Bang' equivalent in Upanishads?",
        answer: "The expansion from Bindu through Nada - the emergence of diversity from unity.",
        concept: "Upanishadic Big Bang"
    },
    { 
        question: "What is 'Srishti Krama'?",
        answer: "The sequence of creation - the systematic unfolding from subtle to gross.",
        concept: "Srishti Krama - Creation Sequence"
    },
    { 
        question: "What is 'Laya Krama'?",
        answer: "The sequence of dissolution - the systematic withdrawal from gross to subtle.",
        concept: "Laya Krama - Dissolution Sequence"
    },
    { 
        question: "What is 'Brahma's Day'?",
        answer: "One Kalpa of 4.32 billion years during which creation exists.",
        concept: "Brahma's Day"
    },
    { 
        question: "What is 'Brahma's Night'?",
        answer: "The period of dissolution of equal duration when creation rests in potential.",
        concept: "Brahma's Night"
    },
    { 
        question: "What is 'Brahma's Life'?",
        answer: "100 years of 360 such days and nights - the total lifespan of a cosmic cycle.",
        concept: "Brahma's Lifespan"
    },
    { 
        question: "What happens after Brahma's life?",
        answer: "Mahapralaya - the great dissolution where even the potential seeds dissolve, followed by a new creation.",
        concept: "After Brahma's Life"
    },
    { 
        question: "What is the ultimate purpose of cosmic cycles?",
        answer: "The play (Lila) of consciousness - the spontaneous expression of Brahman's infinite creativity and bliss.",
        concept: "Purpose of Cosmic Cycles"
    },
    { 
        question: "How does cosmology relate to spiritual practice?",
        answer: "Understanding cosmic processes helps recognize the relative nature of world and turn attention to the absolute.",
        concept: "Cosmology and Spirituality"
    },
    { 
        question: "What is the final truth about creation?",
        answer: "Creation is neither real nor unreal - it is appearance in consciousness, to be understood and transcended for liberation.",
        concept: "Final Truth About Creation"
    }
];