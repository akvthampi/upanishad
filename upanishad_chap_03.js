// upanishad_chap_03.js
const chapterMetadata = {
    title: "Chapter 3: Metaphysical Concepts",
    info: "Brahman, Atman, and cosmic principles"
};
const flashcards = [
    { 
        question: "What is the fundamental metaphysical concept of Brahman in the Upanishads?",
        answer: "Brahman is the ultimate, absolute reality - infinite, eternal, unchanging consciousness that is the source and substratum of the entire universe.",
        concept: "Brahman - Fundamental Concept"
    },
    { 
        question: "How do the Upanishads describe the nature of Brahman?",
        answer: "Brahman is described as Sat-Chit-Ananda - pure Existence, pure Consciousness, and pure Bliss - beyond time, space, and causation.",
        concept: "Brahman - Sat-Chit-Ananda"
    },
    { 
        question: "What does 'Sat' mean in the context of Brahman?",
        answer: "Sat means absolute Existence - that which truly exists in all three periods of time, independent and self-existent.",
        concept: "Sat - Absolute Existence"
    },
    { 
        question: "What does 'Chit' mean in the context of Brahman?",
        answer: "Chit means pure Consciousness - self-luminous awareness that illumines everything but is itself beyond objectification.",
        concept: "Chit - Pure Consciousness"
    },
    { 
        question: "What does 'Ananda' mean in the context of Brahman?",
        answer: "Ananda means absolute Bliss - not emotional happiness but the essential nature of reality that is complete fulfillment.",
        concept: "Ananda - Absolute Bliss"
    },
    { 
        question: "How do the Upanishads describe Brahman's relationship to the world?",
        answer: "Brahman is both the material cause (upadana karana) and efficient cause (nimitta karana) of the universe - both the clay and the potter of the pot.",
        concept: "Brahman as Cause"
    },
    { 
        question: "What is the concept of 'Atman' in Upanishadic metaphysics?",
        answer: "Atman is the true Self - the eternal, unchanging consciousness principle that is the essential nature of every being.",
        concept: "Atman - True Self"
    },
    { 
        question: "How do the Upanishads describe the relationship between Atman and Brahman?",
        answer: "The Upanishads declare the fundamental identity between Atman (individual self) and Brahman (universal reality) - they are essentially one and the same.",
        concept: "Atman-Brahman Identity"
    },
    { 
        question: "What is the significance of the Mahavakya 'Tat Tvam Asi'?",
        answer: "'That Thou Art' declares the identity of the individual self (Tvam) with the ultimate reality (Tat), establishing non-duality as the fundamental truth.",
        concept: "Tat Tvam Asi"
    },
    { 
        question: "What is the meaning of 'Aham Brahmasmi'?",
        answer: "'I am Brahman' - the direct realization that one's essential nature is identical with the ultimate reality.",
        concept: "Aham Brahmasmi"
    },
    { 
        question: "What does 'Prajnanam Brahma' mean?",
        answer: "'Consciousness is Brahman' - emphasizing that pure awareness itself is the ultimate reality.",
        concept: "Prajnanam Brahma"
    },
    { 
        question: "What is 'Ayam Atma Brahma'?",
        answer: "'This Self is Brahman' - declaring that the innermost self of every being is the ultimate reality.",
        concept: "Ayam Atma Brahma"
    },
    { 
        question: "What is the concept of 'Maya' in Upanishadic metaphysics?",
        answer: "Maya is the cosmic power that makes the one non-dual reality appear as the manifold world of names and forms.",
        concept: "Maya - Cosmic Power"
    },
    { 
        question: "How does Maya function according to the Upanishads?",
        answer: "Maya has two powers: veiling (avarana shakti) that conceals the real, and projecting (vikshepa shakti) that projects the unreal.",
        concept: "Maya's Two Powers"
    },
    { 
        question: "What is 'Avidya' in Upanishadic terminology?",
        answer: "Avidya is spiritual ignorance - the failure to recognize one's true nature as Atman-Brahman, which is the root cause of bondage.",
        concept: "Avidya - Spiritual Ignorance"
    },
    { 
        question: "How do the Upanishads distinguish between Vidya and Avidya?",
        answer: "Vidya is knowledge of the eternal (Brahman), while Avidya is knowledge of the temporal (worldly matters) - the former leads to liberation, the latter to bondage.",
        concept: "Vidya vs Avidya"
    },
    { 
        question: "What is the concept of 'Ishvara' in relation to Brahman?",
        answer: "Ishvara is Brahman with Maya - the personal God who creates, sustains, and dissolves the universe while remaining the absolute reality.",
        concept: "Ishvara - Personal God"
    },
    { 
        question: "How do the Upanishads describe the process of cosmic creation?",
        answer: "Creation is the manifestation of names and forms from the unmanifest Brahman through the power of Maya, while Brahman itself remains unchanged.",
        concept: "Cosmic Creation"
    },
    { 
        question: "What is the 'Satkaryavada' theory of causation?",
        answer: "The effect pre-exists in the cause - the universe exists in potential form in Brahman before manifestation.",
        concept: "Satkaryavada"
    },
    { 
        question: "What is 'Vivartavada' in Upanishadic metaphysics?",
        answer: "The theory of apparent transformation - the world is an apparent modification of Brahman, not a real transformation.",
        concept: "Vivartavada"
    },
    { 
        question: "How do the Upanishads describe the nature of the manifested world?",
        answer: "The world is relatively real (vyavaharika satta) - real from the empirical standpoint but unreal from the absolute standpoint.",
        concept: "Nature of Manifested World"
    },
    { 
        question: "What are the three levels of reality described in Upanishadic metaphysics?",
        answer: "1) Paramarthika (absolute reality - Brahman), 2) Vyavaharika (empirical reality - world), 3) Pratibhasika (apparent reality - dreams).",
        concept: "Three Levels of Reality"
    },
    { 
        question: "What is the concept of 'Adhyasa' or superimposition?",
        answer: "Adhyasa is the false attribution of properties of one thing upon another - like mistaking a rope for a snake in dim light.",
        concept: "Adhyasa - Superimposition"
    },
    { 
        question: "How does Adhyasa explain our experience of the world?",
        answer: "We superimpose the unreal world upon the real Brahman, and the unreal body-mind complex upon the real Atman.",
        concept: "Adhyasa in Experience"
    },
    { 
        question: "What is 'Neti Neti' and what is its metaphysical significance?",
        answer: "'Not this, not this' - the method of negation to realize the Self by eliminating all that is not the Self, all objects and limitations.",
        concept: "Neti Neti - Via Negativa"
    },
    { 
        question: "How do the Upanishads describe the relationship between the one and the many?",
        answer: "The many are appearances in the one reality - like waves in the ocean, essentially water yet appearing as separate forms.",
        concept: "One and Many"
    },
    { 
        question: "What is the concept of 'Antaryamin'?",
        answer: "The inner controller - Brahman as the indwelling presence that governs all beings and processes from within.",
        concept: "Antaryamin - Inner Controller"
    },
    { 
        question: "How do the Upanishads describe space and time?",
        answer: "Space and time are relative concepts that emerge from Brahman, which itself is beyond spatial and temporal limitations.",
        concept: "Space and Time"
    },
    { 
        question: "What is the 'Akasha' concept in Upanishadic cosmology?",
        answer: "Akasha is the first element to emerge from Brahman - infinite space that is the substratum for all other elements.",
        concept: "Akasha - Cosmic Space"
    },
    { 
        question: "What are the 'Pancha Mahabhutas'?",
        answer: "The five great elements: Akasha (space), Vayu (air), Agni (fire), Apas (water), and Prithvi (earth).",
        concept: "Five Great Elements"
    },
    { 
        question: "How do the Upanishads describe the process of elemental evolution?",
        answer: "From Brahman emerges Akasha, from Akasha emerges Vayu, from Vayu emerges Agni, from Agni emerges Apas, from Apas emerges Prithvi.",
        concept: "Elemental Evolution"
    },
    { 
        question: "What is the concept of 'Prana' in Upanishadic metaphysics?",
        answer: "Prana is the cosmic life force - the vital energy that animates all beings and connects the individual to cosmic energy.",
        concept: "Prana - Life Force"
    },
    { 
        question: "How do the Upanishads describe the five functions of Prana?",
        answer: "Prana (inhalation), Apana (exhalation), Vyana (circulation), Udana (ascending), Samana (assimilation) - the five vital airs.",
        concept: "Five Pranas"
    },
    { 
        question: "What is the relationship between Prana and consciousness?",
        answer: "Prana is the vehicle of consciousness - the energy through which consciousness functions in the body.",
        concept: "Prana and Consciousness"
    },
    { 
        question: "What are the 'Koshas' or sheaths in Upanishadic psychology?",
        answer: "The five layers covering the true Self: Annamaya (physical), Pranamaya (vital), Manomaya (mental), Vijnanamaya (intellectual), Anandamaya (bliss).",
        concept: "Five Koshas"
    },
    { 
        question: "How do the Koshas relate to the process of Self-realization?",
        answer: "Self-realization involves discriminating the Self from all five sheaths and recognizing one's identity with Brahman.",
        concept: "Koshas and Self-Realization"
    },
    { 
        question: "What is the 'Annamaya Kosha'?",
        answer: "The food sheath - the physical body made of and sustained by food elements.",
        concept: "Annamaya Kosha - Physical Sheath"
    },
    { 
        question: "What is the 'Pranamaya Kosha'?",
        answer: "The vital sheath - the energy body consisting of the five pranas and the sense organs.",
        concept: "Pranamaya Kosha - Vital Sheath"
    },
    { 
        question: "What is the 'Manomaya Kosha'?",
        answer: "The mental sheath - the mind with its thoughts, emotions, and sensory processing.",
        concept: "Manomaya Kosha - Mental Sheath"
    },
    { 
        question: "What is the 'Vijnanamaya Kosha'?",
        answer: "The intellectual sheath - the faculty of discrimination, judgment, and higher reasoning.",
        concept: "Vijnanamaya Kosha - Intellectual Sheath"
    },
    { 
        question: "What is the 'Anandamaya Kosha'?",
        answer: "The bliss sheath - the causal body containing latent impressions and experiencing relative bliss.",
        concept: "Anandamaya Kosha - Bliss Sheath"
    },
    { 
        question: "How do the Upanishads describe the three bodies?",
        answer: "1) Sthula Sharira (gross body), 2) Sukshma Sharira (subtle body), 3) Karana Sharira (causal body).",
        concept: "Three Bodies"
    },
    { 
        question: "What is the 'Sthula Sharira'?",
        answer: "The gross physical body made of the five elements, subject to birth and death.",
        concept: "Gross Body"
    },
    { 
        question: "What is the 'Sukshma Sharira'?",
        answer: "The subtle body consisting of the five pranas, mind, intellect, ego, and sense organs - it transmigrates.",
        concept: "Subtle Body"
    },
    { 
        question: "What is the 'Karana Sharira'?",
        answer: "The causal body - ignorance itself that is the root cause of the other two bodies.",
        concept: "Causal Body"
    },
    { 
        question: "How do the Upanishads describe the states of consciousness?",
        answer: "1) Jagrat (waking), 2) Svapna (dreaming), 3) Sushupti (deep sleep), 4) Turiya (transcendental).",
        concept: "Four States of Consciousness"
    },
    { 
        question: "What is 'Jagrat' state?",
        answer: "The waking state - consciousness turned outward through sense organs, experiencing the gross world.",
        concept: "Waking State"
    },
    { 
        question: "What is 'Svapna' state?",
        answer: "The dreaming state - consciousness turned inward, experiencing mental creations.",
        concept: "Dream State"
    },
    { 
        question: "What is 'Sushupti' state?",
        answer: "The deep sleep state - undifferentiated consciousness without objects, experienced as bliss.",
        concept: "Deep Sleep State"
    },
    { 
        question: "What is 'Turiya' state?",
        answer: "The fourth state - pure consciousness beyond the other three, the witness of all states.",
        concept: "Turiya - Fourth State"
    },
    { 
        question: "How does Turiya relate to Brahman?",
        answer: "Turiya is identical with Brahman - the ever-present consciousness that witnesses all changing states.",
        concept: "Turiya and Brahman"
    },
    { 
        question: "What is the concept of 'Sakshi' or witness consciousness?",
        answer: "The pure witness that observes all experiences without being affected by them - the true nature of the Self.",
        concept: "Sakshi - Witness Consciousness"
    },
    { 
        question: "How do the Upanishads describe the relationship between consciousness and objects?",
        answer: "Consciousness is the illuminator of all objects but is itself never an object - the subject that can never become an object.",
        concept: "Consciousness and Objects"
    },
    { 
        question: "What is 'Chidabhasa'?",
        answer: "Reflected consciousness - the apparent consciousness in the mind that is actually a reflection of pure consciousness.",
        concept: "Chidabhasa - Reflected Consciousness"
    },
    { 
        question: "How do the Upanishads explain individual agency?",
        answer: "Individual agency is apparent, not real - it belongs to the reflected consciousness in the mind, not to the pure Self.",
        concept: "Individual Agency"
    },
    { 
        question: "What is the concept of 'Jiva' in Upanishadic metaphysics?",
        answer: "Jiva is the individual soul - pure consciousness apparently limited by the body-mind complex due to ignorance.",
        concept: "Jiva - Individual Soul"
    },
    { 
        question: "How does Jiva relate to Atman?",
        answer: "Jiva is Atman under the influence of ignorance - the same pure consciousness appearing as limited.",
        concept: "Jiva and Atman"
    },
    { 
        question: "What are the 'three qualities' of Jiva?",
        answer: "The Jiva is described as eternal, conscious, and blissful in essence, though these are veiled by ignorance.",
        concept: "Qualities of Jiva"
    },
    { 
        question: "What is 'Upadhi' in Upanishadic terminology?",
        answer: "Limiting adjunct - the body-mind complex that apparently limits the unlimited consciousness, making it appear as Jiva.",
        concept: "Upadhi - Limiting Adjunct"
    },
    { 
        question: "How do the Upanishads describe the process of knowledge?",
        answer: "Knowledge is the recognition of what already is - removing ignorance to reveal the ever-present truth of Atman-Brahman identity.",
        concept: "Process of Knowledge"
    },
    { 
        question: "What is the difference between 'Jñana' and 'Vijñana'?",
        answer: "Jñana is theoretical knowledge, Vijñana is direct experiential knowledge - both are necessary for complete realization.",
        concept: "Jñana vs Vijñana"
    },
    { 
        question: "How do the Upanishads describe the nature of bondage?",
        answer: "Bondage is not real but apparent - it exists only due to ignorance of one's true nature as unlimited consciousness.",
        concept: "Nature of Bondage"
    },
    { 
        question: "What is 'Moksha' according to the Upanishads?",
        answer: "Moksha is liberation - not something to be attained but realized as one's eternal nature, freedom from the sense of limitation.",
        concept: "Moksha - Liberation"
    },
    { 
        question: "How do the Upanishads describe the state of a Jivanmukta?",
        answer: "A Jivanmukta is one liberated while living - established in Self-knowledge, free from desires and fears, seeing the Self in all.",
        concept: "Jivanmukta - Liberated While Living"
    },
    { 
        question: "What is 'Videhamukti'?",
        answer: "Liberation after death - final freedom from all limitations when the body falls away.",
        concept: "Videhamukti - Liberation After Death"
    },
    { 
        question: "How do the Upanishads describe the concept of 'Lila'?",
        answer: "The cosmic play - the manifestation of the universe as the spontaneous expression of Brahman's bliss, without any purpose.",
        concept: "Lila - Cosmic Play"
    },
    { 
        question: "What is the 'Karma' theory in Upanishadic metaphysics?",
        answer: "Karma is the law of cause and effect governing rebirth - actions create impressions that determine future experiences.",
        concept: "Karma Theory"
    },
    { 
        question: "How does Karma relate to rebirth?",
        answer: "Unfulfilled desires and unresolved karmas cause rebirth, while desirelessness and knowledge lead to liberation.",
        concept: "Karma and Rebirth"
    },
    { 
        question: "What are the 'three types of Karma'?",
        answer: "1) Sanchita (accumulated past karma), 2) Prarabdha (destiny for this life), 3) Agami (future karma being created now).",
        concept: "Three Types of Karma"
    },
    { 
        question: "What is 'Prarabdha Karma'?",
        answer: "The portion of accumulated karma that has become activated for this particular lifetime - one's destiny.",
        concept: "Prarabdha Karma - Destiny"
    },
    { 
        question: "How does knowledge affect Karma?",
        answer: "Knowledge burns up all karmas except Prarabdha, which must be exhausted through experience.",
        concept: "Knowledge and Karma"
    },
    { 
        question: "What is the concept of 'Dharma' in Upanishadic thought?",
        answer: "Dharma is cosmic order and righteous conduct - that which sustains the individual and cosmic harmony.",
        concept: "Dharma - Cosmic Order"
    },
    { 
        question: "How do the Upanishads relate Dharma to Moksha?",
        answer: "Dharma purifies the mind and makes it fit for knowledge, which alone leads to Moksha.",
        concept: "Dharma and Moksha"
    },
    { 
        question: "What is the 'Four Purusharthas' framework?",
        answer: "The four goals of human life: Dharma (righteousness), Artha (wealth), Kama (pleasure), Moksha (liberation).",
        concept: "Four Purusharthas"
    },
    { 
        question: "How do the Upanishads view the relationship between the Purusharthas?",
        answer: "Dharma should govern Artha and Kama, and all three should be pursued as stepping stones to Moksha.",
        concept: "Relationship of Purusharthas"
    },
    { 
        question: "What is the concept of 'Guna' in Upanishadic metaphysics?",
        answer: "The three qualities of nature: Sattva (purity, knowledge), Rajas (activity, passion), Tamas (inertia, ignorance).",
        concept: "Three Gunas"
    },
    { 
        question: "How do the Gunas influence the mind?",
        answer: "The Gunas determine the quality of thoughts and perceptions - Sattva leads to clarity, Rajas to activity, Tamas to confusion.",
        concept: "Gunas and Mind"
    },
    { 
        question: "What is the relationship between Purusha and Prakriti?",
        answer: "Purusha is pure consciousness, Prakriti is nature - the former is witness, the latter is the witnessed.",
        concept: "Purusha and Prakriti"
    },
    { 
        question: "How do the Upanishads describe the process of perception?",
        answer: "Consciousness reflected in the mind illuminates sense objects through the sense organs - the Self is the ultimate perceiver.",
        concept: "Process of Perception"
    },
    { 
        question: "What is the role of 'Manas' (mind) in Upanishadic psychology?",
        answer: "Manas is the internal organ that processes sensory data, thinks, and feels - it is the instrument of experience.",
        concept: "Manas - Mind"
    },
    { 
        question: "What is 'Buddhi'?",
        answer: "The intellect - the faculty of discrimination, decision-making, and higher understanding.",
        concept: "Buddhi - Intellect"
    },
    { 
        question: "What is 'Ahamkara'?",
        answer: "Ego - the sense of 'I' and 'mine' that creates individual identity and separation.",
        concept: "Ahamkara - Ego"
    },
    { 
        question: "How do the Upanishads describe the 'Antahkarana'?",
        answer: "The internal organ with four aspects: Manas (mind), Buddhi (intellect), Chitta (memory), Ahamkara (ego).",
        concept: "Antahkarana - Internal Organ"
    },
    { 
        question: "What is the concept of 'Samskaras'?",
        answer: "Mental impressions from past experiences that shape current thoughts, behaviors, and tendencies.",
        concept: "Samskaras - Mental Impressions"
    },
    { 
        question: "How do Samskaras influence rebirth?",
        answer: "Samskaras create desires that lead to actions, which create new Samskaras, perpetuating the cycle of rebirth.",
        concept: "Samskaras and Rebirth"
    },
    { 
        question: "What is 'Vasana'?",
        answer: "Subtle desires and tendencies stored in the causal body that drive thoughts and actions.",
        concept: "Vasana - Subtle Tendencies"
    },
    { 
        question: "How do the Upanishads describe the nature of desire?",
        answer: "Desire is the root cause of bondage - it creates attachment, leads to action, and perpetuates the cycle of rebirth.",
        concept: "Nature of Desire"
    },
    { 
        question: "What is the relationship between desire and suffering?",
        answer: "Unfulfilled desires cause suffering, while fulfilled desires lead to more desires - only desirelessness brings peace.",
        concept: "Desire and Suffering"
    },
    { 
        question: "How do the Upanishads describe the concept of 'Shraddha'?",
        answer: "Faith - not blind belief but confident trust in the teachings and the teacher, essential for spiritual progress.",
        concept: "Shraddha - Faith"
    },
    { 
        question: "What is 'Satsanga'?",
        answer: "Association with truth and truth-seekers - company that inspires spiritual awakening.",
        concept: "Satsanga - Holy Company"
    },
    { 
        question: "How do the Upanishads describe the nature of the world?",
        answer: "The world is relatively real - real from the empirical standpoint but unreal from the absolute standpoint, like a dream.",
        concept: "Nature of World"
    },
    { 
        question: "What is the 'Rajju-Sarpa Nyaya'?",
        answer: "The rope-snake analogy - the world is like a snake falsely perceived in a rope, unreal from the higher standpoint.",
        concept: "Rope-Snake Analogy"
    },
    { 
        question: "What is the 'Sphota Vada'?",
        answer: "The theory of meaning - that words reveal an integral meaning that is grasped instantaneously.",
        concept: "Sphota Vada - Theory of Meaning"
    },
    { 
        question: "How do the Upanishads describe the relationship between words and reality?",
        answer: "Words point to reality but cannot fully capture it - ultimate reality is beyond words and concepts.",
        concept: "Words and Reality"
    },
    { 
        question: "What is the concept of 'Sabda Brahman'?",
        answer: "Brahman as sound - the ultimate reality manifesting as sacred sounds and mantras.",
        concept: "Sabda Brahman"
    },
    { 
        question: "How do the Upanishads describe the nature of time?",
        answer: "Time is relative and cyclical - an appearance in consciousness, while consciousness itself is timeless.",
        concept: "Nature of Time"
    },
    { 
        question: "What are the 'Yugas' in Upanishadic cosmology?",
        answer: "The four ages: Satya Yuga, Treta Yuga, Dvapara Yuga, and Kali Yuga - cycles of cosmic time.",
        concept: "Four Yugas"
    },
    { 
        question: "How do the Upanishads describe the concept of 'Kalpa'?",
        answer: "A day of Brahma - the cycle of creation and dissolution lasting 4.32 billion years.",
        concept: "Kalpa - Cosmic Cycle"
    },
    { 
        question: "What is the 'Manvantara' concept?",
        answer: "The period of a Manu - 71 Mahayugas, during which a particular cosmic order prevails.",
        concept: "Manvantara"
    },
    { 
        question: "How do the Upanishads describe the process of cosmic dissolution?",
        answer: "The universe dissolves back into its unmanifest cause, Brahman, at the end of each Kalpa.",
        concept: "Cosmic Dissolution"
    },
    { 
        question: "What is the concept of 'Pralaya'?",
        answer: "Dissolution - when the manifested universe merges back into the unmanifest Brahman.",
        concept: "Pralaya - Dissolution"
    },
    { 
        question: "How do the Upanishads describe the hierarchy of beings?",
        answer: "From minerals to plants to animals to humans to gods - all are manifestations of the same consciousness at different levels.",
        concept: "Hierarchy of Beings"
    },
    { 
        question: "What is the 'Loka' concept in Upanishadic cosmology?",
        answer: "The various planes of existence - Bhur (earth), Bhuvah (atmosphere), Svah (heaven), etc.",
        concept: "Lokas - Planes of Existence"
    },
    { 
        question: "How do the Upanishads describe the journey after death?",
        answer: "The soul travels by two paths: Devayana (path of gods) for knowers of Brahman, Pitriyana (path of ancestors) for ritualists.",
        concept: "Journey After Death"
    },
    { 
        question: "What is 'Devayana'?",
        answer: "The path of light - taken by those with Self-knowledge, leading to Brahman and freedom from rebirth.",
        concept: "Devayana - Path of Gods"
    },
    { 
        question: "What is 'Pitriyana'?",
        answer: "The path of smoke - taken by ritualists, leading to the lunar world and eventual rebirth.",
        concept: "Pitriyana - Path of Ancestors"
    },
    { 
        question: "How do the Upanishads describe the ultimate state of liberation?",
        answer: "The state of eternal peace, freedom from all limitations, abidance in one's true nature, and seeing the Self in all beings.",
        concept: "Ultimate Liberation"
    },
    { 
        question: "What is the significance of the heart in Upanishadic metaphysics?",
        answer: "The heart represents the center of consciousness where the Self is realized - the space within the heart is identified with Brahman.",
        concept: "Significance of Heart"
    },
    { 
        question: "How do the Upanishads describe the relationship between microcosm and macrocosm?",
        answer: "The individual contains the entire universe - 'As is the individual, so is the universe; as is the universe, so is the individual.'",
        concept: "Microcosm and Macrocosm"
    },
    { 
        question: "What is the concept of 'Hiranyagarbha'?",
        answer: "The cosmic egg or golden womb - the first manifestation of consciousness in the universe.",
        concept: "Hiranyagarbha - Cosmic Egg"
    },
    { 
        question: "How do the Upanishads describe the nature of causality?",
        answer: "Brahman is both the material and efficient cause - the universe is a transformation of Brahman while Brahman remains unchanged.",
        concept: "Nature of Causality"
    },
    { 
        question: "What is the 'Panchikarana' theory?",
        answer: "The theory of quintuplication - how the five elements combine in specific proportions to form the universe.",
        concept: "Panchikarana - Quintuplication"
    },
    { 
        question: "How do the Upanishads resolve the problem of one and many?",
        answer: "The many are appearances in the one reality - diversity is real at the empirical level but unreal at the absolute level.",
        concept: "Resolution of One and Many"
    },
    { 
        question: "What is the metaphysical significance of 'Om'?",
        answer: "Om represents the totality of existence - the unmanifest Brahman and the entire manifest universe.",
        concept: "Metaphysical Significance of Om"
    },
    { 
        question: "How do the Upanishads describe the relationship between consciousness and matter?",
        answer: "Consciousness is the substratum of matter - matter is consciousness limited by names and forms.",
        concept: "Consciousness and Matter"
    },
    { 
        question: "What is the ultimate metaphysical truth according to the Upanishads?",
        answer: "Brahman alone is real, the world is appearance, and the individual self is none other than Brahman.",
        concept: "Ultimate Metaphysical Truth"
    }
];