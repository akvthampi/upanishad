// upanishad_chap_08.js
const chapterMetadata = {
    title: "Chapter 8: Psychology of Consciousness",
    info: "Mind, senses, and states of awareness (110+ cards)"
};
const flashcards = [
    { 
        question: "What is the fundamental view of consciousness in the Upanishads?",
        answer: "Consciousness is the primary reality - self-luminous, eternal, and the substratum of all mental and physical phenomena.",
        concept: "Fundamental View of Consciousness"
    },
    { 
        question: "How do the Upanishads define 'Atman'?",
        answer: "Atman is pure consciousness - the witnessing principle that is aware of all experiences but unaffected by them.",
        concept: "Atman as Pure Consciousness"
    },
    { 
        question: "What are the four states of consciousness?",
        answer: "Jagrat (waking), Svapna (dreaming), Sushupti (deep sleep), and Turiya (transcendental fourth state).",
        concept: "Four States of Consciousness"
    },
    { 
        question: "What characterizes the waking state (Jagrat)?",
        answer: "Consciousness turned outward through sense organs, experiencing gross objects, with subject-object differentiation.",
        concept: "Waking State Characteristics"
    },
    { 
        question: "What happens in the dream state (Svapna)?",
        answer: "Consciousness turned inward, experiencing mental creations without external sensory input.",
        concept: "Dream State"
    },
    { 
        question: "What is the nature of deep sleep (Sushupti)?",
        answer: "Undifferentiated consciousness without objects, experienced as bliss and peace, with no subject-object distinction.",
        concept: "Deep Sleep State"
    },
    { 
        question: "What is Turiya?",
        answer: "The fourth state - pure consciousness beyond the other three, the eternal witness of all changing states.",
        concept: "Turiya - Fourth State"
    },
    { 
        question: "How does Turiya relate to the other three states?",
        answer: "Turiya witnesses and enables the other three states while remaining unchanged and transcendent.",
        concept: "Turiya's Relationship to Other States"
    },
    { 
        question: "What is 'Sakshi'?",
        answer: "The witness consciousness - the pure awareness that observes all mental activities without participation.",
        concept: "Sakshi - Witness"
    },
    { 
        question: "How does Sakshi differ from the mind?",
        answer: "Sakshi is the subject that knows, while mind is the instrument of knowing; Sakshi is constant, mind changes.",
        concept: "Sakshi vs Mind"
    },
    { 
        question: "What are the 'Koshas' (sheaths)?",
        answer: "The five layers covering consciousness: Annamaya (physical), Pranamaya (vital), Manomaya (mental), Vijnanamaya (intellectual), Anandamaya (bliss).",
        concept: "Five Koshas"
    },
    { 
        question: "What is Annamaya Kosha?",
        answer: "The food sheath - the physical body made of and sustained by food elements.",
        concept: "Annamaya Kosha - Physical Sheath"
    },
    { 
        question: "What is Pranamaya Kosha?",
        answer: "The vital sheath - the energy body consisting of five pranas and sense organs.",
        concept: "Pranamaya Kosha - Vital Sheath"
    },
    { 
        question: "What is Manomaya Kosha?",
        answer: "The mental sheath - the mind with its thoughts, emotions, and sensory processing.",
        concept: "Manomaya Kosha - Mental Sheath"
    },
    { 
        question: "What is Vijnanamaya Kosha?",
        answer: "The intellectual sheath - the faculty of discrimination, judgment, and will.",
        concept: "Vijnanamaya Kosha - Intellectual Sheath"
    },
    { 
        question: "What is Anandamaya Kosha?",
        answer: "The bliss sheath - the causal body containing latent impressions and experiencing relative bliss.",
        concept: "Anandamaya Kosha - Bliss Sheath"
    },
    { 
        question: "How do the Koshas relate to Self-realization?",
        answer: "Self-realization involves discriminating the Self from all five sheaths and recognizing one's true nature beyond them.",
        concept: "Koshas and Self-Realization"
    },
    { 
        question: "What is 'Antahkarana'?",
        answer: "The internal organ with four aspects: Manas (mind), Buddhi (intellect), Chitta (memory), Ahamkara (ego).",
        concept: "Antahkarana - Internal Organ"
    },
    { 
        question: "What is 'Manas'?",
        answer: "The mind - the faculty that processes sensory data, thinks, doubts, and feels emotions.",
        concept: "Manas - Mind"
    },
    { 
        question: "What is 'Buddhi'?",
        answer: "The intellect - the faculty of discrimination, decision-making, and higher understanding.",
        concept: "Buddhi - Intellect"
    },
    { 
        question: "What is 'Chitta'?",
        answer: "The memory bank - the storehouse of impressions, experiences, and subconscious tendencies.",
        concept: "Chitta - Memory"
    },
    { 
        question: "What is 'Ahamkara'?",
        answer: "The ego - the sense of 'I' and 'mine' that creates individual identity and separation.",
        concept: "Ahamkara - Ego"
    },
    { 
        question: "How do these four aspects function together?",
        answer: "Manas receives data, Buddhi discriminates, Chitta stores impressions, Ahamkara claims ownership - all illuminated by consciousness.",
        concept: "Function of Antahkarana"
    },
    { 
        question: "What are 'Vrittis'?",
        answer: "Mental modifications - the waves or fluctuations in the mind that constitute all psychological activity.",
        concept: "Vrittis - Mental Modifications"
    },
    { 
        question: "What are the five types of Vrittis?",
        answer: "Pramana (valid knowledge), Viparyaya (error), Vikalpa (imagination), Nidra (sleep), Smriti (memory).",
        concept: "Five Types of Vrittis"
    },
    { 
        question: "What is 'Chitta Vritti Nirodha'?",
        answer: "Cessation of mental modifications - the stilling of mind that reveals pure consciousness.",
        concept: "Cessation of Mental Modifications"
    },
    { 
        question: "What are 'Vasanas'?",
        answer: "Subtle desires and tendencies stored in the causal body that drive thoughts and actions.",
        concept: "Vasanas - Subtle Tendencies"
    },
    { 
        question: "What are 'Samskaras'?",
        answer: "Mental impressions from past experiences that shape current thoughts, behaviors, and reactions.",
        concept: "Samskaras - Mental Impressions"
    },
    { 
        question: "How do Vasanas and Samskaras influence behavior?",
        answer: "They create automatic patterns of thinking and reacting, forming the basis of personality and character.",
        concept: "Influence of Vasanas and Samskaras"
    },
    { 
        question: "What is the process of perception?",
        answer: "Consciousness reflected in the mind (Chidabhasa) contacts objects through sense organs - the ultimate perceiver is pure consciousness.",
        concept: "Process of Perception"
    },
    { 
        question: "What is 'Chidabhasa'?",
        answer: "Reflected consciousness - the apparent consciousness in the mind that is actually a reflection of pure consciousness.",
        concept: "Chidabhasa - Reflected Consciousness"
    },
    { 
        question: "How does memory work according to Upanishadic psychology?",
        answer: "Experiences create impressions (Samskaras) in Chitta, which can be recalled when similar conditions activate them.",
        concept: "Mechanism of Memory"
    },
    { 
        question: "What is the nature of emotions?",
        answer: "Emotions are mental modifications (Vrittis) colored by past impressions and current perceptions.",
        concept: "Nature of Emotions"
    },
    { 
        question: "How are emotions transformed?",
        answer: "Through witnessing, understanding their roots, and redirecting energy toward higher purposes.",
        concept: "Transformation of Emotions"
    },
    { 
        question: "What is the psychology of desire?",
        answer: "Desire arises from the sense of incompleteness and drives action; it ceases when one realizes one's completeness.",
        concept: "Psychology of Desire"
    },
    { 
        question: "What causes suffering?",
        answer: "Misidentification with body-mind complex and attachment to temporary objects, due to ignorance of one's true nature.",
        concept: "Causes of Suffering"
    },
    { 
        question: "What is 'Duhkha'?",
        answer: "Suffering - the fundamental dissatisfaction that arises from seeking permanence in impermanent things.",
        concept: "Duhkha - Suffering"
    },
    { 
        question: "What are the 'Kleshas' (afflictions)?",
        answer: "Avidya (ignorance), Asmita (egoism), Raga (attachment), Dvesha (aversion), Abhinivesha (fear of death).",
        concept: "Five Afflictions"
    },
    { 
        question: "What is 'Avidya'?",
        answer: "Spiritual ignorance - the root cause of all suffering, the failure to recognize one's true nature as consciousness.",
        concept: "Avidya - Ignorance"
    },
    { 
        question: "What is 'Asmita'?",
        answer: "Egoism - the identification of consciousness with the mind-body complex.",
        concept: "Asmita - Egoism"
    },
    { 
        question: "What is 'Raga'?",
        answer: "Attachment - the craving for pleasant experiences based on past enjoyment.",
        concept: "Raga - Attachment"
    },
    { 
        question: "What is 'Dvesha'?",
        answer: "Aversion - the avoidance of unpleasant experiences based on past suffering.",
        concept: "Dvesha - Aversion"
    },
    { 
        question: "What is 'Abhinivesha'?",
        answer: "Fear of death - the instinctive clinging to life due to identification with the body.",
        concept: "Abhinivesha - Fear of Death"
    },
    { 
        question: "How are the Kleshas overcome?",
        answer: "Through Self-knowledge that removes Avidya, the root cause, making the other afflictions disappear automatically.",
        concept: "Overcoming Afflictions"
    },
    { 
        question: "What is the nature of attention?",
        answer: "Attention is consciousness focused through the mind on particular objects or thoughts.",
        concept: "Nature of Attention"
    },
    { 
        question: "What is 'Ekagrata'?",
        answer: "One-pointedness - the concentration of attention on a single object without distraction.",
        concept: "Ekagrata - One-pointedness"
    },
    { 
        question: "What is the psychology of learning?",
        answer: "Learning involves receiving information, reflecting on it, and integrating it until it becomes living knowledge.",
        concept: "Psychology of Learning"
    },
    { 
        question: "What is 'Pratibha'?",
        answer: "Intuition - direct knowledge that arises when the mind becomes transparent to consciousness.",
        concept: "Pratibha - Intuition"
    },
    { 
        question: "What are the 'Gunas' and their psychological effects?",
        answer: "Sattva (clarity, peace), Rajas (activity, restlessness), Tamas (inertia, confusion) - the three qualities influencing mind.",
        concept: "Gunas and Psychology"
    },
    { 
        question: "How does Sattva affect the mind?",
        answer: "Creates clarity, peace, discrimination, and receptivity to higher knowledge.",
        concept: "Sattva's Psychological Effects"
    },
    { 
        question: "What are the effects of Rajas?",
        answer: "Causes restlessness, desire, attachment, and distraction from spiritual pursuit.",
        concept: "Rajas' Psychological Effects"
    },
    { 
        question: "How does Tamas influence psychology?",
        answer: "Produces inertia, ignorance, delusion, and resistance to change or growth.",
        concept: "Tamas' Psychological Effects"
    },
    { 
        question: "How can the Gunas be balanced?",
        answer: "By cultivating Sattva through pure food, noble company, spiritual practice, and reducing Rajas and Tamas.",
        concept: "Balancing the Gunas"
    },
    { 
        question: "What is 'Samskara Shuddhi'?",
        answer: "Purification of mental impressions - the process of cleansing the subconscious of negative patterns.",
        concept: "Samskara Shuddhi - Purification"
    },
    { 
        question: "What is 'Vasana Kshaya'?",
        answer: "Reduction of subtle tendencies - the gradual weakening of automatic behavior patterns.",
        concept: "Vasana Kshaya"
    },
    { 
        question: "What is 'Manonasha'?",
        answer: "Dissolution of mind - not destruction but transformation where mind loses separate existence and becomes one with consciousness.",
        concept: "Manonasha - Mind Dissolution"
    },
    { 
        question: "What is 'Manolaya'?",
        answer: "Temporary merging of mind in its cause during deep meditation, giving glimpses of pure consciousness.",
        concept: "Manolaya - Temporary Merging"
    },
    { 
        question: "What is the difference between Manolaya and Manonasha?",
        answer: "Manolaya is temporary absorption, Manonasha is permanent transformation through knowledge.",
        concept: "Manolaya vs Manonasha"
    },
    { 
        question: "What is 'Chitta Shuddhi'?",
        answer: "Purification of mind - the process of making the mind clear and transparent like a polished mirror.",
        concept: "Chitta Shuddhi - Mind Purification"
    },
    { 
        question: "What are the methods for mind purification?",
        answer: "Selfless service, devotion, meditation, study, and practice of ethical disciplines.",
        concept: "Methods for Mind Purification"
    },
    { 
        question: "What is the psychology of meditation?",
        answer: "Withdrawing consciousness from objects to rest in its source, gradually revealing the witness behind all experiences.",
        concept: "Psychology of Meditation"
    },
    { 
        question: "What happens to consciousness in deep meditation?",
        answer: "Consciousness withdraws from external and internal objects and rests in its essential nature.",
        concept: "Consciousness in Deep Meditation"
    },
    { 
        question: "What is 'Samadhi'?",
        answer: "Absorption where the meditator, meditation, and object become one, revealing pure consciousness.",
        concept: "Samadhi - Absorption"
    },
    { 
        question: "What are the types of Samadhi?",
        answer: "Savikalpa (with form and distinction) and Nirvikalpa (formless and non-dual).",
        concept: "Types of Samadhi"
    },
    { 
        question: "What is 'Sahaja Samadhi'?",
        answer: "Natural absorption where Self-realization remains constant during all activities.",
        concept: "Sahaja Samadhi - Natural State"
    },
    { 
        question: "What is the psychology of Self-inquiry?",
        answer: "Turning attention from objects to the subject, tracing the sense of 'I' to its source in pure consciousness.",
        concept: "Psychology of Self-inquiry"
    },
    { 
        question: "How does Self-inquiry work psychologically?",
        answer: "It deconstructs the false identification with body and mind, revealing the ever-present witness consciousness.",
        concept: "Mechanism of Self-inquiry"
    },
    { 
        question: "What is 'Neti Neti' psychology?",
        answer: "The process of negation that removes all superimpositions on the Self, leaving pure awareness.",
        concept: "Neti Neti Psychology"
    },
    { 
        question: "What is the nature of will?",
        answer: "Will is consciousness expressing through Buddhi (intellect) as determination and choice.",
        concept: "Nature of Will"
    },
    { 
        question: "How is will strengthened?",
        answer: "Through practice of discrimination, detachment, and consistent alignment with higher values.",
        concept: "Strengthening Will"
    },
    { 
        question: "What is the psychology of habit?",
        answer: "Habits are automatic behavior patterns created by repeated Samskaras that operate below conscious awareness.",
        concept: "Psychology of Habit"
    },
    { 
        question: "How are habits changed?",
        answer: "By creating new Samskaras through conscious repetition of desired thoughts and actions.",
        concept: "Changing Habits"
    },
    { 
        question: "What is the nature of creativity?",
        answer: "Creativity arises when consciousness flows freely through a purified mind without obstruction.",
        concept: "Nature of Creativity"
    },
    { 
        question: "What is the psychology of intuition?",
        answer: "Intuition is knowledge arising directly from consciousness, unmediated by thought processes.",
        concept: "Psychology of Intuition"
    },
    { 
        question: "What are the obstacles to clear perception?",
        answer: "Prejudices, desires, fears, and past conditioning that color and distort present experience.",
        concept: "Obstacles to Clear Perception"
    },
    { 
        question: "What is 'Pratyaksha'?",
        answer: "Direct perception - knowledge gained through sense organs when mind is clear and unbiased.",
        concept: "Pratyaksha - Direct Perception"
    },
    { 
        question: "What is 'Anumana'?",
        answer: "Inference - knowledge gained through reasoning from perceived facts.",
        concept: "Anumana - Inference"
    },
    { 
        question: "What is 'Shabda'?",
        answer: "Verbal testimony - knowledge gained from reliable sources like scriptures and teachers.",
        concept: "Shabda - Verbal Testimony"
    },
    { 
        question: "What is 'Aparokshanubhuti'?",
        answer: "Direct immediate experience - knowledge gained through Self-realization beyond senses and mind.",
        concept: "Aparokshanubhuti - Direct Experience"
    },
    { 
        question: "What is the psychology of love?",
        answer: "Love is the attraction of consciousness to itself through different forms; all love is ultimately Self-love.",
        concept: "Psychology of Love"
    },
    { 
        question: "What is the nature of fear?",
        answer: "Fear arises from identification with the temporary and fear of loss; it disappears with Self-knowledge.",
        concept: "Nature of Fear"
    },
    { 
        question: "What is the psychology of anger?",
        answer: "Anger arises from frustrated desire or injured ego; it can be transformed through understanding and detachment.",
        concept: "Psychology of Anger"
    },
    { 
        question: "What is the nature of peace?",
        answer: "Peace is the natural state of consciousness experienced when mental modifications subside.",
        concept: "Nature of Peace"
    },
    { 
        question: "What is 'Mouna'?",
        answer: "Silence - not just absence of speech but the stillness of mind that reveals inner peace.",
        concept: "Mouna - Silence"
    },
    { 
        question: "What is the psychology of sleep?",
        answer: "Sleep is the withdrawal of consciousness from external and internal objects, resting in its source.",
        concept: "Psychology of Sleep"
    },
    { 
        question: "What are dreams?",
        answer: "Dreams are mental creations projected by consciousness during the dream state.",
        concept: "Nature of Dreams"
    },
    { 
        question: "What is lucid dreaming?",
        answer: "The state where one is aware of dreaming while dreaming, indicating partial awakening of witness consciousness.",
        concept: "Lucid Dreaming"
    },
    { 
        question: "What is the psychology of near-death experiences?",
        answer: "Experiences of separation from physical body, indicating the reality of consciousness beyond body.",
        concept: "Near-death Experiences"
    },
    { 
        question: "What is 'Jada Samadhi'?",
        answer: "Cataleptic trance - a state resembling deep sleep but without consciousness, different from spiritual Samadhi.",
        concept: "Jada Samadhi - Catalepsy"
    },
    { 
        question: "What are 'Siddhis'?",
        answer: "Psychic powers that arise as byproducts of concentration but are obstacles if pursued.",
        concept: "Siddhis - Psychic Powers"
    },
    { 
        question: "What is the psychology of addiction?",
        answer: "Addiction arises from seeking fulfillment in external objects due to ignorance of inner completeness.",
        concept: "Psychology of Addiction"
    },
    { 
        question: "What is the nature of personality?",
        answer: "Personality is the temporary configuration of Gunas, Vasanas, and Samskaras, not the true Self.",
        concept: "Nature of Personality"
    },
    { 
        question: "What is 'Sthita Prajna'?",
        answer: "The person of steady wisdom - one established in Self-knowledge with stable mind and emotions.",
        concept: "Sthita Prajna - Steady Wisdom"
    },
    { 
        question: "What are the characteristics of Sthita Prajna?",
        answer: "Equanimity, freedom from desires and fears, compassion, and spontaneous right action.",
        concept: "Characteristics of Steady Wisdom"
    },
    { 
        question: "What is the psychology of the liberated?",
        answer: "The liberated being functions through the body-mind instrument while remaining established in pure consciousness.",
        concept: "Psychology of Liberated Being"
    },
    { 
        question: "How does consciousness function after realization?",
        answer: "Consciousness continues to witness all experiences but without identification, like light illuminating objects without being affected.",
        concept: "Consciousness After Realization"
    },
    { 
        question: "What is the ultimate psychological state?",
        answer: "Turiya - the ever-free, ever-pure consciousness that witnesses all states while remaining transcendent.",
        concept: "Ultimate Psychological State"
    },
    { 
        question: "How does Upanishadic psychology differ from modern psychology?",
        answer: "It recognizes consciousness as fundamental, while modern psychology studies the mind without reference to transcendent consciousness.",
        concept: "Comparison with Modern Psychology"
    },
    { 
        question: "What is the practical value of Upanishadic psychology?",
        answer: "It provides the understanding and methods for transcending psychological suffering and realizing one's true nature.",
        concept: "Practical Value"
    },
    { 
        question: "What is the relationship between psychology and spirituality?",
        answer: "Psychology deals with the mind, spirituality with consciousness beyond mind; the former prepares for the latter.",
        concept: "Psychology and Spirituality"
    },
    { 
        question: "What is the final goal of Upanishadic psychology?",
        answer: "Self-realization - the direct knowledge of one's true nature as eternal, blissful consciousness.",
        concept: "Final Goal"
    }
];