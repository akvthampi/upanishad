// upanishad_chap_05.js
const chapterMetadata = {
    title: "Chapter 5: Spiritual Practices",
    info: "Meditation, yoga, and self-realization (120+ cards)"
};
const flashcards = [
    { 
        question: "What is the fundamental purpose of spiritual practices according to the Upanishads?",
        answer: "To remove the veil of ignorance (Avidya) that obscures one's true nature as Atman-Brahman, leading to direct Self-realization.",
        concept: "Purpose of Spiritual Practices"
    },
    { 
        question: "What are the four primary qualifications (Sadhana Chatushtaya) required for spiritual practice?",
        answer: "1) Discrimination between real and unreal, 2) Dispassion towards worldly pleasures, 3) Sixfold virtues (calmness, etc.), 4) Intense longing for liberation.",
        concept: "Four Qualifications"
    },
    { 
        question: "What is 'Viveka' and why is it essential for spiritual practice?",
        answer: "Viveka is discrimination between the eternal (Brahman) and temporary (world); it provides the intellectual foundation for all spiritual practices.",
        concept: "Viveka - Discrimination"
    },
    { 
        question: "What is 'Vairagya' and how does it support spiritual growth?",
        answer: "Vairagya is dispassion towards worldly objects and pleasures; it redirects energy from sense gratification to spiritual pursuit.",
        concept: "Vairagya - Dispassion"
    },
    { 
        question: "What are the sixfold virtues (Shat Sampatti) mentioned in the Upanishads?",
        answer: "1) Shama (mental calmness), 2) Dama (sense control), 3) Uparati (withdrawal), 4) Titiksha (forbearance), 5) Shraddha (faith), 6) Samadhana (concentration).",
        concept: "Sixfold Virtues"
    },
    { 
        question: "What is 'Mumukshutva' and why is it called the most important qualification?",
        answer: "Mumukshutva is intense, burning desire for liberation; without it, other qualifications remain theoretical and don't lead to practice.",
        concept: "Mumukshutva - Desire for Liberation"
    },
    { 
        question: "What is the practice of 'Shravana'?",
        answer: "Shravana is listening to the teachings of the Upanishads from a qualified teacher, which creates the intellectual conviction about one's true nature.",
        concept: "Shravana - Listening"
    },
    { 
        question: "What is 'Manana' and how does it differ from Shravana?",
        answer: "Manana is deep reflection on the teachings heard, removing all doubts and intellectual obstacles through logical reasoning.",
        concept: "Manana - Reflection"
    },
    { 
        question: "What is 'Nididhyasana' and what is its role in Self-realization?",
        answer: "Nididhyasana is profound meditation on the truth until it becomes one's direct living experience, transforming intellectual knowledge into realization.",
        concept: "Nididhyasana - Meditation"
    },
    { 
        question: "How do Shravana, Manana, and Nididhyasana work together?",
        answer: "Shravana gives theoretical knowledge, Manana removes doubts, Nididhyasana leads to direct experience - together they culminate in Self-realization.",
        concept: "Threefold Practice"
    },
    { 
        question: "What is the practice of 'Neti Neti' and how is it performed?",
        answer: "'Not this, not this' - systematically negating all objects, thoughts, and identifications as 'not the Self' until only pure consciousness remains.",
        concept: "Neti Neti Practice"
    },
    { 
        question: "What is 'Atma Vichara' (self-inquiry) and how is it practiced?",
        answer: "Constantly asking 'Who am I?' and tracing the sense of 'I' to its source, beyond all temporary identifications with body and mind.",
        concept: "Atma Vichara - Self-inquiry"
    },
    { 
        question: "How does the practice of self-inquiry lead to Self-realization?",
        answer: "By turning attention from objects to the subject, it reveals the ever-present witness consciousness that is one's true nature.",
        concept: "Mechanism of Self-inquiry"
    },
    { 
        question: "What is the role of the Guru in spiritual practice according to the Upanishads?",
        answer: "The Guru is one who has realized the Truth and can remove the disciple's ignorance through teaching and transmission of consciousness.",
        concept: "Role of Guru"
    },
    { 
        question: "What qualities should a genuine spiritual teacher possess?",
        answer: "Self-realization, deep knowledge of scriptures, compassion, detachment, and the ability to guide students according to their capacity.",
        concept: "Qualities of True Guru"
    },
    { 
        question: "What is 'Satsanga' and why is it emphasized?",
        answer: "Association with truth and truth-seekers; it creates a conducive atmosphere for spiritual growth and protects against worldly influences.",
        concept: "Satsanga - Holy Company"
    },
    { 
        question: "What is the practice of 'Pranayama' in Upanishadic tradition?",
        answer: "Regulation of breath to control the life force (Prana), which calms the mind and prepares it for meditation.",
        concept: "Pranayama Practice"
    },
    { 
        question: "How does Pranayama help in meditation?",
        answer: "By regulating breath, it regulates the flow of thoughts, creating mental stillness necessary for deep meditation.",
        concept: "Pranayama and Meditation"
    },
    { 
        question: "What is 'Pratyahara' and how is it practiced?",
        answer: "Withdrawal of senses from external objects, like a tortoise withdrawing its limbs, to conserve energy for inner contemplation.",
        concept: "Pratyahara - Sense Withdrawal"
    },
    { 
        question: "What is 'Dharana' and what are its objects?",
        answer: "Dharana is concentration - fixing the mind on a single object like breath, a mantra, or the concept of Brahman.",
        concept: "Dharana - Concentration"
    },
    { 
        question: "What is 'Dhyana' and how does it differ from Dharana?",
        answer: "Dhyana is meditation - an unbroken flow of awareness toward the object of meditation, without distraction.",
        concept: "Dhyana - Meditation"
    },
    { 
        question: "What is 'Samadhi' and what are its types?",
        answer: "Samadhi is absorption where the meditator, meditation, and object become one. Types: Savikalpa (with form) and Nirvikalpa (formless).",
        concept: "Samadhi - Absorption"
    },
    { 
        question: "What is the significance of 'Om' meditation in the Upanishads?",
        answer: "Meditating on Om as the symbol of Brahman leads to realization of the ultimate reality, as Om represents the totality of existence.",
        concept: "Om Meditation"
    },
    { 
        question: "How is Om meditation practiced according to the Mandukya Upanishad?",
        answer: "Meditating on the four parts of Om (A, U, M, and the silence) as representing the four states of consciousness, culminating in Turiya.",
        concept: "Om Meditation Technique"
    },
    { 
        question: "What is 'Ajapa Japa'?",
        answer: "Spontaneous, effortless repetition of mantra that continues naturally like breathing, without conscious effort.",
        concept: "Ajapa Japa"
    },
    { 
        question: "What is the practice of 'Soham Sadhana'?",
        answer: "Merging the natural breath with the mantra 'So' during inhalation and 'Ham' during exhalation, recognizing 'I am That'.",
        concept: "Soham Sadhana"
    },
    { 
        question: "What is 'Antar Mouna' (inner silence) practice?",
        answer: "Witnessing thoughts and mental activity without getting involved, allowing them to subside naturally into silence.",
        concept: "Antar Mouna - Inner Silence"
    },
    { 
        question: "What is the practice of 'Yoga Nidra' in Upanishadic tradition?",
        answer: "Conscious sleep - maintaining awareness while the body sleeps, used to experience the witness consciousness beyond waking, dream, and sleep states.",
        concept: "Yoga Nidra"
    },
    { 
        question: "What is 'Trataka' and how is it beneficial?",
        answer: "Steady gazing at a point or flame without blinking, which develops concentration and purifies the mind.",
        concept: "Trataka - Steady Gazing"
    },
    { 
        question: "What is the practice of 'Chakra Meditation'?",
        answer: "Focusing awareness on the energy centers (chakras) along the spine to awaken spiritual energy (Kundalini).",
        concept: "Chakra Meditation"
    },
    { 
        question: "What is 'Kundalini Yoga' according to the Upanishads?",
        answer: "The process of awakening the dormant spiritual energy at the base of spine and guiding it upward through the chakras to Sahasrara.",
        concept: "Kundalini Yoga"
    },
    { 
        question: "What are the signs of Kundalini awakening?",
        answer: "Spontaneous bodily movements, heat or coolness, visions, hearing inner sounds, ecstatic states, and expanded awareness.",
        concept: "Kundalini Awakening Signs"
    },
    { 
        question: "What is 'Nada Yoga'?",
        answer: "The yoga of inner sound - listening to the subtle inner sounds that arise in deep meditation, leading to merging with cosmic vibration.",
        concept: "Nada Yoga - Sound Meditation"
    },
    { 
        question: "What are the different types of inner sounds heard in Nada Yoga?",
        answer: "Progressive sounds from gross to subtle: ocean, thunder, bells, flute, veena, bee, finally the unstruck sound (Anahata Nada).",
        concept: "Inner Sounds in Nada Yoga"
    },
    { 
        question: "What is 'Laya Yoga'?",
        answer: "The yoga of dissolution - merging individual consciousness into cosmic consciousness through absorption in meditation.",
        concept: "Laya Yoga - Dissolution"
    },
    { 
        question: "What is the practice of 'Bhuta Shuddhi'?",
        answer: "Purification of the five elements in the body through visualization and mantra, transforming gross consciousness to subtle.",
        concept: "Bhuta Shuddhi - Element Purification"
    },
    { 
        question: "What is 'Prana Vidya'?",
        answer: "The science of life force - understanding and mastering Prana through various techniques to gain control over body and mind.",
        concept: "Prana Vidya"
    },
    { 
        question: "What is the practice of 'Sandhya Vandana'?",
        answer: "Traditional meditation performed at dawn, noon, and dusk - the junctions (Sandhya) where spiritual practices are most effective.",
        concept: "Sandhya Vandana"
    },
    { 
        question: "What is 'Mouna' (silence) and what are its benefits?",
        answer: "Practice of verbal and mental silence; conserves energy, reduces mental modifications, and reveals inner awareness.",
        concept: "Mouna - Silence Practice"
    },
    { 
        question: "What is 'Vairagya Sadhana'?",
        answer: "Systematic cultivation of dispassion through reflection on the impermanent nature of worldly objects and relationships.",
        concept: "Vairagya Sadhana"
    },
    { 
        question: "What is 'Sakshi Bhava' practice?",
        answer: "Cultivating the attitude of witness consciousness in daily life - observing thoughts and actions without identification.",
        concept: "Sakshi Bhava - Witness Attitude"
    },
    { 
        question: "What is 'Ishvara Pranidhana'?",
        answer: "Surrender to the divine - offering all actions and their results to God, reducing ego and creating receptivity to grace.",
        concept: "Ishvara Pranidhana - Surrender"
    },
    { 
        question: "What is the practice of 'Karma Yoga'?",
        answer: "Performing actions as service to the divine, without attachment to results, which purifies the mind and reduces ego.",
        concept: "Karma Yoga - Selfless Action"
    },
    { 
        question: "What is 'Jnana Yajna'?",
        answer: "Sacrifice of knowledge - sharing spiritual knowledge with qualified seekers, which deepens one's own understanding.",
        concept: "Jnana Yajna - Knowledge Sacrifice"
    },
    { 
        question: "What is 'Tapas' and what are its forms?",
        answer: "Austerity or discipline of body, speech, and mind - including fasting, truthfulness, and mental control.",
        concept: "Tapas - Austerity"
    },
    { 
        question: "What is 'Svadhyaya'?",
        answer: "Self-study - regular study of scriptures and reflection on their meaning in relation to one's own experience.",
        concept: "Svadhyaya - Self-study"
    },
    { 
        question: "What is the practice of 'Brahmacharya'?",
        answer: "Conservation of vital energy through celibacy and control of senses, which provides energy for spiritual practices.",
        concept: "Brahmacharya - Celibacy"
    },
    { 
        question: "What is 'Ahara Shuddhi'?",
        answer: "Purification of diet - eating sattvic food in moderation, which affects mental clarity and spiritual receptivity.",
        concept: "Ahara Shuddhi - Diet Purification"
    },
    { 
        question: "What are the characteristics of Sattvic diet?",
        answer: "Fresh, light, nutritious foods that promote clarity and peace - fruits, vegetables, grains, nuts, and dairy.",
        concept: "Sattvic Diet"
    },
    { 
        question: "What is 'Yama' and what are its components?",
        answer: "Moral restraints: Ahimsa (non-violence), Satya (truth), Asteya (non-stealing), Brahmacharya (celibacy), Aparigraha (non-possessiveness).",
        concept: "Yama - Moral Restraints"
    },
    { 
        question: "What is 'Niyama' and what does it include?",
        answer: "Observances: Shaucha (purity), Santosha (contentment), Tapas (austerity), Svadhyaya (self-study), Ishvara Pranidhana (surrender).",
        concept: "Niyama - Observances"
    },
    { 
        question: "What is the practice of 'Maitri' (friendliness)?",
        answer: "Cultivating unconditional friendliness towards all beings, recognizing the same Self in everyone.",
        concept: "Maitri - Friendliness"
    },
    { 
        question: "What is 'Karuna' (compassion) practice?",
        answer: "Developing deep compassion for suffering beings and actively working to alleviate their suffering.",
        concept: "Karuna - Compassion"
    },
    { 
        question: "What is 'Mudita' (sympathetic joy)?",
        answer: "Rejoicing in others' happiness and success without envy or comparison.",
        concept: "Mudita - Sympathetic Joy"
    },
    { 
        question: "What is 'Upeksha' (equanimity)?",
        answer: "Maintaining mental balance amidst pleasure and pain, success and failure, praise and blame.",
        concept: "Upeksha - Equanimity"
    },
    { 
        question: "What is 'Asana' practice in meditation?",
        answer: "Finding a stable and comfortable sitting posture that can be maintained for extended periods without movement.",
        concept: "Asana for Meditation"
    },
    { 
        question: "What are the ideal meditation postures?",
        answer: "Padmasana (lotus), Siddhasana (accomplished), Sukhasana (easy) - any posture where spine is straight and body is relaxed.",
        concept: "Meditation Postures"
    },
    { 
        question: "What is the practice of 'Mudra' in meditation?",
        answer: "Specific hand positions that channel energy and facilitate meditation, like Chin Mudra or Jnana Mudra.",
        concept: "Mudra - Hand Gestures"
    },
    { 
        question: "What is 'Bandha' and what are the main bandhas?",
        answer: "Energy locks: Mula Bandha (root), Uddiyana Bandha (abdominal), Jalandhara Bandha (throat) - used to direct Prana.",
        concept: "Bandha - Energy Locks"
    },
    { 
        question: "What is the practice of 'Nyasa'?",
        answer: "Ritual placement of mantras on different parts of the body to purify and spiritualize the physical vehicle.",
        concept: "Nyasa - Mantra Placement"
    },
    { 
        question: "What is 'Mantra Japa' and how is it practiced?",
        answer: "Repetition of sacred sounds with awareness, using mala (rosary) for counting, with focus on meaning and vibration.",
        concept: "Mantra Japa"
    },
    { 
        question: "What are the different types of Japa?",
        answer: "Vaikhari (audible), Upamsu (whispered), Manasika (mental) - progressing from gross to subtle.",
        concept: "Types of Japa"
    },
    { 
        question: "What is the significance of 'Gayatri Mantra' in spiritual practice?",
        answer: "Considered the essence of Vedas, it illumines the intellect and leads to realization of the supreme consciousness.",
        concept: "Gayatri Mantra"
    },
    { 
        question: "What is 'Puja' (worship) as spiritual practice?",
        answer: "Ritual worship with offerings and prayers that externalizes internal devotion and creates communion with the divine.",
        concept: "Puja - Worship"
    },
    { 
        question: "What is 'Yantra' meditation?",
        answer: "Concentrating on geometric diagrams representing cosmic principles, which focus the mind and reveal subtle truths.",
        concept: "Yantra Meditation"
    },
    { 
        question: "What is the practice of 'Bhava Samadhi'?",
        answer: "Absorption through intense devotion and love for the divine, where the devotee merges with the beloved.",
        concept: "Bhava Samadhi"
    },
    { 
        question: "What is 'Nama Japa'?",
        answer: "Repetition of divine names, which purifies the mind and reveals the nature of consciousness inherent in the name.",
        concept: "Nama Japa - Name Repetition"
    },
    { 
        question: "What is the practice of 'Seva' (selfless service)?",
        answer: "Service to others without expectation of reward, which reduces ego and develops compassion.",
        concept: "Seva - Selfless Service"
    },
    { 
        question: "What is 'Dana' (charity) as spiritual practice?",
        answer: "Giving generously with right attitude - without expectation, to deserving recipients, at proper time and place.",
        concept: "Dana - Charity"
    },
    { 
        question: "What is 'Tirtha Yatra' (pilgrimage)?",
        answer: "Visiting sacred places with devotion, which creates favorable impressions and accelerates spiritual progress.",
        concept: "Tirtha Yatra - Pilgrimage"
    },
    { 
        question: "What is the practice of 'Vrata' (vow)?",
        answer: "Taking and observing spiritual vows that build willpower and create favorable conditions for practice.",
        concept: "Vrata - Vows"
    },
    { 
        question: "What is 'Panchagni Vidya'?",
        answer: "The meditation on five fires representing cosmic processes, leading to understanding of creation and liberation.",
        concept: "Panchagni Vidya"
    },
    { 
        question: "What is 'Madhu Vidya'?",
        answer: "The meditation on honey - seeing all beings as interconnected like cells in a honeycomb, all sustained by the same reality.",
        concept: "Madhu Vidya"
    },
    { 
        question: "What is 'Dahara Vidya'?",
        answer: "The meditation on the space within the heart as the abode of Brahman, leading to realization of cosmic consciousness.",
        concept: "Dahara Vidya"
    },
    { 
        question: "What is 'Sandilya Vidya'?",
        answer: "The meditation on Brahman as all-pervading consciousness, identifying oneself with this cosmic reality.",
        concept: "Sandilya Vidya"
    },
    { 
        question: "What is 'Paryanka Vidya'?",
        answer: "The meditation on the five sheaths, discriminating them from the Self to realize one's true nature.",
        concept: "Paryanka Vidya"
    },
    { 
        question: "What is the practice of 'Antar Drishti' (inner vision)?",
        answer: "Turning the attention inward to perceive the inner light and sounds, developing subtle perception.",
        concept: "Antar Drishti - Inner Vision"
    },
    { 
        question: "What is 'Bahir Drishti' (outer vision) practice?",
        answer: "Seeing the divine in all external objects, recognizing everything as manifestation of Brahman.",
        concept: "Bahir Drishti - Outer Vision"
    },
    { 
        question: "What is 'Samyama'?",
        answer: "The combined practice of Dharana, Dhyana, and Samadhi on a single object, leading to mastery over that object.",
        concept: "Samyama"
    },
    { 
        question: "What is the practice of 'Vasana Kshaya'?",
        answer: "Systematic reduction of mental tendencies through witnessing and non-reaction, leading to freedom from conditioning.",
        concept: "Vasana Kshaya"
    },
    { 
        question: "What is 'Chitta Shuddhi' (mind purification)?",
        answer: "Purification of mind through various practices until it becomes like a clean mirror reflecting pure consciousness.",
        concept: "Chitta Shuddhi"
    },
    { 
        question: "What is 'Manolaya' (mind dissolution)?",
        answer: "Temporary merging of mind in its cause during deep meditation, giving glimpses of pure consciousness.",
        concept: "Manolaya - Mind Dissolution"
    },
    { 
        question: "What is 'Manonasa' (mind destruction)?",
        answer: "Permanent dissolution of mind through Self-knowledge, where mind loses its separate existence and becomes one with consciousness.",
        concept: "Manonasa - Mind Destruction"
    },
    { 
        question: "What is the practice of 'Sadhana Pada'?",
        answer: "Systematic progression through stages of practice from gross to subtle, from external to internal.",
        concept: "Sadhana Pada - Practice Path"
    },
    { 
        question: "What are the obstacles in spiritual practice (Antarayas)?",
        answer: "Disease, laziness, doubt, carelessness, sensory attractions, false perception, non-attainment of stages, instability.",
        concept: "Spiritual Obstacles"
    },
    { 
        question: "How to overcome spiritual obstacles?",
        answer: "Through persistent practice, detachment, faith in teachings, association with advanced seekers, and grace of Guru.",
        concept: "Overcoming Obstacles"
    },
    { 
        question: "What are the signs of progress in spiritual practice?",
        answer: "Reduced mental disturbances, increased peace, clarity of understanding, detachment, compassion, and spontaneous remembrance of truth.",
        concept: "Signs of Progress"
    },
    { 
        question: "What is 'Siddhi' and how should it be treated?",
        answer: "Psychic powers that arise as byproducts of practice; they should be ignored as distractions from the main goal of liberation.",
        concept: "Siddhi - Psychic Powers"
    },
    { 
        question: "What is the practice of 'Bhava Sankocha'?",
        answer: "Withdrawing consciousness from external expansion to rest in its source, like a tortoise withdrawing its limbs.",
        concept: "Bhava Sankocha"
    },
    { 
        question: "What is 'Bhava Vikasa'?",
        answer: "Expanding consciousness to include all beings and the entire universe, recognizing everything as oneself.",
        concept: "Bhava Vikasa"
    },
    { 
        question: "What is the practice of 'Sthita Prajna'?",
        answer: "Abiding in wisdom - maintaining constant awareness of one's true nature amidst all activities.",
        concept: "Sthita Prajna"
    },
    { 
        question: "What is 'Sahaja Samadhi'?",
        answer: "Natural absorption where Self-realization remains constant during all activities, not just in formal meditation.",
        concept: "Sahaja Samadhi"
    },
    { 
        question: "What is the practice of 'Ajata Vichara'?",
        answer: "Inquiry into the unborn nature of the Self, recognizing that nothing is ever born or created in absolute reality.",
        concept: "Ajata Vichara"
    },
    { 
        question: "What is 'Maha Vakya meditation'?",
        answer: "Deep meditation on the great declarations like 'Tat Tvam Asi' until their meaning becomes living reality.",
        concept: "Maha Vakya Meditation"
    },
    { 
        question: "What is the practice of 'Sarvatmabhava'?",
        answer: "Cultivating the feeling 'I am all' - recognizing oneself as the entire universe and all beings.",
        concept: "Sarvatmabhava"
    },
    { 
        question: "What is 'Ahamgraha Upasana'?",
        answer: "Meditation on 'I am Brahman' - constantly affirming and realizing one's identity with the ultimate reality.",
        concept: "Ahamgraha Upasana"
    },
    { 
        question: "What is the practice of 'Prapatti' (total surrender)?",
        answer: "Complete surrender to the divine, giving up all sense of doership and accepting whatever comes as divine will.",
        concept: "Prapatti - Total Surrender"
    },
    { 
        question: "What is 'Sakama Sadhana'?",
        answer: "Spiritual practice with desires - using desires for spiritual growth by directing them toward divine objects.",
        concept: "Sakama Sadhana"
    },
    { 
        question: "What is 'Nishkama Sadhana'?",
        answer: "Desireless practice - performing spiritual disciplines without any expectation, as an offering to the divine.",
        concept: "Nishkama Sadhana"
    },
    { 
        question: "What is the practice of 'Antar Yoga'?",
        answer: "Inner yoga - maintaining inner connection with the Self while engaged in external activities.",
        concept: "Antar Yoga - Inner Yoga"
    },
    { 
        question: "What is 'Bahir Yoga'?",
        answer: "External yoga - seeing the divine in all external objects and activities.",
        concept: "Bahir Yoga - External Yoga"
    },
    { 
        question: "What is the practice of 'Sama Drishti'?",
        answer: "Equal vision - seeing everything with the same eye, without preference or rejection.",
        concept: "Sama Drishti - Equal Vision"
    },
    { 
        question: "What is 'Advaita Bhava' practice?",
        answer: "Cultivating the feeling of non-duality in daily life - seeing no separation between oneself and others.",
        concept: "Advaita Bhava"
    },
    { 
        question: "What is the ultimate spiritual practice according to the Upanishads?",
        answer: "Abidance in the Self (Atma Nishta) - remaining established in one's true nature as consciousness, beyond all practices.",
        concept: "Ultimate Practice"
    },
    { 
        question: "What happens when spiritual practice culminates in realization?",
        answer: "All practices drop away, and one remains as the Self naturally and spontaneously, with no need for further effort.",
        concept: "Culmination of Practice"
    },
    { 
        question: "What is the state of 'Jivanmukta'?",
        answer: "One liberated while living - established in Self-knowledge, free from all bondage, acting spontaneously for welfare of all.",
        concept: "Jivanmukta State"
    },
    { 
        question: "How does a Jivanmukta live in the world?",
        answer: "Like a child at play - engaged in activities without attachment, seeing everything as the Self, in constant bliss.",
        concept: "Life of Jivanmukta"
    },
    { 
        question: "What is the final realization according to the Upanishads?",
        answer: "That one was never bound, never liberated; the Self is ever-free, ever-pure, ever-illumined consciousness.",
        concept: "Final Realization"
    }
];