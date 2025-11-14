// upanishad_chap_01.js
const chapterMetadata = {
    title: "Chapter 1: Introduction to Upanishads",
    info: "Origins, meaning, and significance of the Upanishads"
};
const flashcards = [
    { 
        question: "What does the term 'Upanishad' literally mean?",
        answer: "The term 'Upanishad' literally means 'sitting down near' or 'sitting close to', referring to students sitting near their teacher to receive spiritual knowledge.",
        concept: "Etymology of Upanishad"
    },
    { 
        question: "What is the root meaning of the Sanskrit word 'Upanishad'?",
        answer: "The word comes from the roots 'upa' (near), 'ni' (down), and 'shad' (to sit), literally meaning 'sitting down near' a spiritual teacher.",
        concept: "Word Roots"
    },
    { 
        question: "What historical period saw the composition of the principal Upanishads?",
        answer: "The principal Upanishads were composed between approximately 800-200 BCE, during a period of intense philosophical inquiry in ancient India.",
        concept: "Historical Context"
    },
    { 
        question: "How many Upanishads are generally considered principal or major Upanishads?",
        answer: "There are generally considered to be 10-13 principal Upanishads, though the total number of Upanishadic texts exceeds 200.",
        concept: "Number of Upanishads"
    },
    { 
        question: "What is the relationship between the Vedas and the Upanishads?",
        answer: "The Upanishads form the concluding portions of the Vedas and represent the philosophical essence of Vedic knowledge, hence they are called 'Vedanta' (end of Vedas).",
        concept: "Vedas and Upanishads"
    },
    { 
        question: "What are the three main categories of Upanishadic texts?",
        answer: "The three main categories are: 1) Principal Upanishads (10-13 texts), 2) Minor Upanishads (over 100 texts), and 3) Sectarian Upanishads (associated with specific traditions).",
        concept: "Categories of Upanishads"
    },
    { 
        question: "What was the primary method of knowledge transmission in Upanishadic times?",
        answer: "Knowledge was primarily transmitted orally through the guru-shishya (teacher-student) tradition, with emphasis on direct personal instruction and dialogue.",
        concept: "Transmission Method"
    },
    { 
        question: "What is the significance of the Upanishads in Hindu philosophy?",
        answer: "The Upanishads form the foundational texts of Hindu philosophy, establishing core concepts like Brahman, Atman, Maya, and Moksha that influenced all subsequent schools of Indian thought.",
        concept: "Philosophical Significance"
    },
    { 
        question: "How do the Upanishads differ from earlier Vedic texts in their approach?",
        answer: "While earlier Vedic texts focus primarily on rituals and sacrifices, the Upanishads shift emphasis to philosophical inquiry, meditation, and direct spiritual realization.",
        concept: "Evolution from Vedas"
    },
    { 
        question: "What are some common literary forms found in the Upanishads?",
        answer: "The Upanishads employ dialogues between teachers and students, parables, analogies, and poetic verses to convey profound philosophical truths.",
        concept: "Literary Style"
    },
    { 
        question: "Who were the typical participants in Upanishadic dialogues?",
        answer: "Dialogues typically involved sages (rishis), kings, householders, and students, showing that spiritual knowledge was accessible to people from all walks of life.",
        concept: "Participants in Dialogues"
    },
    { 
        question: "What is the central purpose of the Upanishads according to traditional understanding?",
        answer: "The central purpose is to lead seekers from ignorance to knowledge of ultimate reality, from ritualistic religion to spiritual wisdom, and from bondage to liberation.",
        concept: "Purpose of Upanishads"
    },
    { 
        question: "How did the Upanishads influence later philosophical systems in India?",
        answer: "The Upanishads profoundly influenced all major philosophical systems including Vedanta, Yoga, and even Buddhism and Jainism, providing foundational concepts for Indian spirituality.",
        concept: "Influence on Indian Philosophy"
    },
    { 
        question: "What role do the Upanishads play in contemporary Hindu practice?",
        answer: "They remain central to Hindu spiritual practice, with key passages recited in rituals, studied for philosophical understanding, and serving as inspiration for meditation.",
        concept: "Contemporary Relevance"
    },
    { 
        question: "What are some key characteristics of Upanishadic teaching methodology?",
        answer: "Key characteristics include: progressive revelation of truth, use of analogies and metaphors, emphasis on personal experience, and adaptation to the student's capacity.",
        concept: "Teaching Methodology"
    },
    { 
        question: "How were the Upanishads preserved through centuries before being written down?",
        answer: "They were preserved through meticulous oral transmission with elaborate memorization techniques, precise pronunciation rules, and teacher-student lineages ensuring accuracy.",
        concept: "Oral Preservation"
    },
    { 
        question: "What is the significance of the forest setting in many Upanishadic teachings?",
        answer: "The forest setting symbolizes retreat from worldly distractions, closeness to nature as a manifestation of divine reality, and an environment conducive to contemplation.",
        concept: "Symbolism of Setting"
    },
    { 
        question: "How do the Upanishads approach the concept of authority in spiritual matters?",
        answer: "While respecting tradition, the Upanishads emphasize personal verification of truth through direct experience rather than blind acceptance of authority.",
        concept: "Approach to Authority"
    },
    { 
        question: "What is the relationship between the Upanishads and the concept of Dharma?",
        answer: "The Upanishads explore Dharma not just as social duty but as cosmic order and the essential nature of reality, connecting individual conduct with universal principles.",
        concept: "Upanishads and Dharma"
    },
    { 
        question: "How did foreign scholars first encounter and translate the Upanishads?",
        answer: "European scholars like Anquetil Duperron translated Persian versions into Latin in the early 19th century, introducing Upanishadic thought to the Western world.",
        concept: "Western Discovery"
    },
    { 
        question: "What modern movements have been particularly influenced by Upanishadic thought?",
        answer: "The Transcendentalist movement, Theosophy, New Age spirituality, and various neo-Vedanta movements have drawn heavily from Upanishadic philosophy.",
        concept: "Modern Influences"
    },
    { 
        question: "What is the significance of the 'Mahavakyas' (Great Sayings) from the Upanishads?",
        answer: "The Mahavakyas are profound statements that encapsulate the essence of Upanishadic wisdom, such as 'Tat Tvam Asi' (That Thou Art) expressing identity of individual and ultimate reality.",
        concept: "Mahavakyas"
    },
    { 
        question: "How do the Upanishads address the relationship between the individual and society?",
        answer: "They present a holistic view where spiritual realization enhances one's capacity for righteous action in society, rather than advocating complete withdrawal.",
        concept: "Individual and Society"
    },
    { 
        question: "What role do women play in the Upanishadic narratives?",
        answer: "Though limited, there are significant female teachers like Gargi and Maitreyi who engage in philosophical debates, showing that women could attain spiritual knowledge.",
        concept: "Women in Upanishads"
    },
    { 
        question: "How do the Upanishads conceptualize the process of learning and knowing?",
        answer: "They distinguish between lower knowledge (of worldly matters) and higher knowledge (of ultimate reality), emphasizing that true knowing transforms the knower.",
        concept: "Epistemology"
    },
    { 
        question: "What is the enduring appeal of the Upanishads in the modern world?",
        answer: "Their appeal lies in addressing universal human concerns about existence, consciousness, and purpose with profound insights that transcend time and culture.",
        concept: "Enduring Appeal"
    },
    { 
        question: "Which are the four Vedas to which the principal Upanishads are attached?",
        answer: "The principal Upanishads are attached to the Rigveda, Yajurveda, Samaveda, and Atharvaveda, with each Veda having its associated Upanishads.",
        concept: "Vedic Classification"
    },
    { 
        question: "What is the meaning of 'Vedanta' and how does it relate to the Upanishads?",
        answer: "Vedanta means 'end of the Vedas' and refers specifically to the Upanishads as the concluding philosophical portions of the Vedic literature.",
        concept: "Vedanta Definition"
    },
    { 
        question: "How many Upanishads are traditionally considered 'major' according to most scholars?",
        answer: "Most scholars recognize 10-13 as major Upanishads, though some traditions count 108 as significant for ritual purposes.",
        concept: "Major Upanishads Count"
    },
    { 
        question: "What was the social context in which the Upanishads emerged?",
        answer: "They emerged during a period of urbanization, philosophical questioning, and challenges to orthodox Vedic ritualism in ancient India.",
        concept: "Social Context"
    },
    { 
        question: "How do the Upanishads view the relationship between teacher and student?",
        answer: "They view it as sacred, with the teacher serving as a spiritual guide who helps remove the student's ignorance through personal instruction.",
        concept: "Guru-Shishya Relationship"
    },
    { 
        question: "What is the significance of the dialogue format in Upanishadic literature?",
        answer: "The dialogue format makes philosophical concepts accessible, shows the process of inquiry, and demonstrates the importance of questioning in spiritual growth.",
        concept: "Dialogue Format"
    },
    { 
        question: "How do the Upanishads address the concept of death and afterlife?",
        answer: "They present death as a transition rather than an end, with detailed descriptions of the soul's journey and its relationship to rebirth.",
        concept: "Views on Death"
    },
    { 
        question: "What is the Upanishadic view on the purpose of human life?",
        answer: "The ultimate purpose is to realize one's true nature as Atman (the eternal Self) and attain liberation (Moksha) from the cycle of birth and death.",
        concept: "Purpose of Human Life"
    },
    { 
        question: "How do the Upanishads characterize the nature of ultimate reality?",
        answer: "They characterize ultimate reality as Brahman - infinite, eternal, consciousness, bliss, beyond all attributes yet immanent in everything.",
        concept: "Nature of Ultimate Reality"
    },
    { 
        question: "What is the Upanishadic concept of 'Atman'?",
        answer: "Atman refers to the true Self - eternal, unchanging consciousness that is identical with Brahman, the ultimate reality.",
        concept: "Concept of Atman"
    },
    { 
        question: "How do the Upanishads describe the relationship between Atman and Brahman?",
        answer: "They declare the fundamental identity between Atman (individual self) and Brahman (universal reality), expressed in Mahavakyas like 'Aham Brahmasmi' (I am Brahman).",
        concept: "Atman-Brahman Identity"
    },
    { 
        question: "What is the concept of 'Maya' in the Upanishads?",
        answer: "Maya refers to the cosmic illusion that makes the one reality appear as the manifold world of names and forms, veiling the true nature of reality.",
        concept: "Concept of Maya"
    },
    { 
        question: "How do the Upanishads define 'Moksha' or liberation?",
        answer: "Moksha is liberation from the cycle of rebirth (samsara) through realization of one's true nature as Atman-Brahman, beyond all limitations.",
        concept: "Definition of Moksha"
    },
    { 
        question: "What is the Upanishadic view on karma?",
        answer: "Karma is the law of cause and effect governing rebirth, but the Upanishads emphasize going beyond karma through spiritual knowledge.",
        concept: "Karma Theory"
    },
    { 
        question: "How do the Upanishads describe the process of cosmic creation?",
        answer: "They describe creation as the manifestation of the One reality into multiplicity through various cosmic principles while maintaining the essential unity.",
        concept: "Cosmic Creation"
    },
    { 
        question: "What is the significance of the 'Om' (Aum) mantra in the Upanishads?",
        answer: "Om is celebrated as the primordial sound, the symbol of Brahman, and the essence of all Vedas and spiritual practices.",
        concept: "Significance of Om"
    },
    { 
        question: "How do the Upanishads approach the worship of deities?",
        answer: "While acknowledging deities, they see them as manifestations of the one Brahman and emphasize meditation on the formless absolute.",
        concept: "Approach to Deity Worship"
    },
    { 
        question: "What is the Upanishadic concept of 'Prana' (life force)?",
        answer: "Prana is the vital energy that sustains all life and consciousness, connecting the individual to cosmic energy.",
        concept: "Concept of Prana"
    },
    { 
        question: "How do the Upanishads describe the states of consciousness?",
        answer: "They describe waking, dreaming, deep sleep, and the fourth state (Turiya) - pure consciousness beyond the other three.",
        concept: "States of Consciousness"
    },
    { 
        question: "What is the 'Neti Neti' (not this, not this) approach in Upanishads?",
        answer: "It is a method of negation to realize the Self by eliminating all that is not the Self - all objects, thoughts, and limitations.",
        concept: "Neti Neti Method"
    },
    { 
        question: "How do the Upanishads view the relationship between microcosm and macrocosm?",
        answer: "They see the individual (microcosm) as containing the entire universe (macrocosm) - 'As above, so below'.",
        concept: "Microcosm-Macrocosm"
    },
    { 
        question: "What is the Upanishadic teaching on the nature of the mind?",
        answer: "The mind is seen as an instrument that can either bind one to illusion or lead to liberation, depending on how it is used.",
        concept: "Nature of Mind"
    },
    { 
        question: "How do the Upanishads describe the process of meditation?",
        answer: "They describe meditation as withdrawing the senses, calming the mind, and focusing on the supreme reality to realize one's true nature.",
        concept: "Meditation Process"
    },
    { 
        question: "What is the concept of 'Ishvara' in the Upanishads?",
        answer: "Ishvara is the personal aspect of Brahman - the cosmic controller and lord of the universe with attributes.",
        concept: "Concept of Ishvara"
    },
    { 
        question: "How do the Upanishads address the problem of suffering?",
        answer: "They identify ignorance of one's true nature as the root cause of suffering and knowledge as the only permanent solution.",
        concept: "Problem of Suffering"
    },
    { 
        question: "What is the Upanishadic view on the value of worldly pleasures?",
        answer: "Worldly pleasures are seen as temporary and ultimately unsatisfying compared to the bliss of Self-realization.",
        concept: "Worldly Pleasures"
    },
    { 
        question: "How do the Upanishads characterize the nature of the world?",
        answer: "The world is characterized as relatively real, ever-changing, and dependent on consciousness for its existence.",
        concept: "Nature of the World"
    },
    { 
        question: "What is the concept of 'Koshas' (sheaths) in the Upanishads?",
        answer: "The five koshas are layers covering the true Self: physical, vital, mental, intellectual, and bliss sheaths.",
        concept: "Five Sheaths"
    },
    { 
        question: "How do the Upanishads describe the relationship between speech and reality?",
        answer: "They explore how language and names point to reality but cannot fully capture the ultimate truth beyond words.",
        concept: "Language and Reality"
    },
    { 
        question: "What is the Upanishadic teaching on the nature of time?",
        answer: "Time is seen as a relative concept within manifestation, while the ultimate reality is timeless and eternal.",
        concept: "Nature of Time"
    },
    { 
        question: "How do the Upanishads view the role of rituals and sacrifices?",
        answer: "While acknowledging their value for worldly benefits, they emphasize that rituals cannot lead to ultimate liberation, which requires knowledge.",
        concept: "Role of Rituals"
    },
    { 
        question: "What is the concept of 'Satchitananda' in the Upanishads?",
        answer: "Satchitananda describes the essential nature of Brahman as Existence (Sat), Consciousness (Chit), and Bliss (Ananda).",
        concept: "Satchitananda"
    },
    { 
        question: "How do the Upanishads describe the process of rebirth?",
        answer: "They describe how the soul carries impressions (samskaras) from one life to another, driven by desires and karma.",
        concept: "Rebirth Process"
    },
    { 
        question: "What is the Upanishadic view on the nature of desire?",
        answer: "Desires are seen as binding forces that perpetuate the cycle of rebirth, while desirelessness leads to liberation.",
        concept: "Nature of Desire"
    },
    { 
        question: "How do the Upanishads characterize the ideal spiritual seeker?",
        answer: "The ideal seeker has discrimination, detachment, self-control, and intense longing for liberation.",
        concept: "Ideal Spiritual Seeker"
    },
    { 
        question: "What is the significance of the term 'Upanishad' as 'secret teaching'?",
        answer: "They were called 'secret' because they were taught only to qualified students who were spiritually prepared, not to the general public.",
        concept: "Secret Teaching"
    },
    { 
        question: "How do the Upanishads address the diversity of religious practices?",
        answer: "They acknowledge different paths as valid for different temperaments but emphasize the unity of the ultimate goal.",
        concept: "Religious Diversity"
    },
    { 
        question: "What is the Upanishadic concept of 'Antaryamin' (inner controller)?",
        answer: "Antaryamin is the indwelling divine presence that controls all beings and processes from within.",
        concept: "Inner Controller"
    },
    { 
        question: "How do the Upanishads describe the relationship between knowledge and action?",
        answer: "They emphasize the importance of both, with knowledge being supreme for liberation while action maintains cosmic order.",
        concept: "Knowledge and Action"
    },
    { 
        question: "What is the significance of the number '108' in Upanishadic tradition?",
        answer: "While 108 Upanishads are traditionally listed, this number has symbolic significance representing cosmic completeness.",
        concept: "Symbolism of 108"
    },
    { 
        question: "How do the Upanishads view the relationship between the individual and cosmic principles?",
        answer: "They see the individual as containing and reflecting all cosmic principles from the physical elements to pure consciousness.",
        concept: "Individual and Cosmic"
    },
    { 
        question: "What is the Upanishadic teaching on the nature of the senses?",
        answer: "The senses are instruments for experiencing the world but can be obstacles to Self-realization if not controlled.",
        concept: "Nature of Senses"
    },
    { 
        question: "How do the Upanishads describe the process of awakening?",
        answer: "Awakening is described as sudden recognition of one's true nature, often triggered by the teacher's words after proper preparation.",
        concept: "Process of Awakening"
    },
    { 
        question: "What is the concept of 'Vasanas' (mental tendencies) in the Upanishads?",
        answer: "Vasanas are subtle impressions from past experiences that shape one's character and drive rebirth.",
        concept: "Mental Tendencies"
    },
    { 
        question: "How do the Upanishads address the question of free will versus determinism?",
        answer: "They acknowledge the influence of past karma but emphasize the freedom to pursue spiritual knowledge and change one's destiny.",
        concept: "Free Will and Determinism"
    },
    { 
        question: "What is the Upanishadic view on the value of scriptural study?",
        answer: "Scriptural study is valuable for guidance but ultimately one must realize the truth directly, beyond words and concepts.",
        concept: "Value of Scriptures"
    },
    { 
        question: "How do the Upanishads characterize the state of liberation?",
        answer: "Liberation is characterized by eternal peace, freedom from all limitations, and abidance in one's true nature.",
        concept: "State of Liberation"
    },
    { 
        question: "What is the significance of the term 'Brahma-vidya' in the Upanishads?",
        answer: "Brahma-vidya means 'knowledge of Brahman' and refers to the supreme science of the ultimate reality taught in the Upanishads.",
        concept: "Brahma-vidya"
    },
    { 
        question: "How do the Upanishads describe the relationship between the finite and infinite?",
        answer: "They declare that the finite individual is essentially the infinite reality, with apparent limitations being due to ignorance.",
        concept: "Finite and Infinite"
    },
    { 
        question: "What is the Upanishadic teaching on the nature of space?",
        answer: "Space is seen as a manifestation of consciousness, with the heart-space often symbolizing the location of the Self.",
        concept: "Nature of Space"
    },
    { 
        question: "How do the Upanishads view the role of the intellect in spiritual practice?",
        answer: "The intellect is essential for discrimination between real and unreal but must be transcended for direct realization.",
        concept: "Role of Intellect"
    },
    { 
        question: "What is the concept of 'Prapancha' (world-appearance) in the Upanishads?",
        answer: "Prapancha refers to the manifold world that appears due to Maya while having no ultimate existence separate from Brahman.",
        concept: "World-Appearance"
    },
    { 
        question: "How do the Upanishads describe the process of dissolution?",
        answer: "They describe how the manifested universe dissolves back into its unmanifest cause, Brahman, at the end of each cosmic cycle.",
        concept: "Cosmic Dissolution"
    },
    { 
        question: "What is the Upanishadic view on the relationship between cause and effect?",
        answer: "They teach that the effect pre-exists in the cause, and the universe is a transformation of Brahman rather than a separate creation.",
        concept: "Cause and Effect"
    },
    { 
        question: "How do the Upanishads characterize the nature of bliss?",
        answer: "Bliss is not an emotion but the essential nature of the Self, experienced in degrees but fully realized only in liberation.",
        concept: "Nature of Bliss"
    },
    { 
        question: "What is the significance of the 'Hridaya' (heart) in Upanishadic teachings?",
        answer: "The heart represents the center of consciousness where the Self is realized, not just the physical organ.",
        concept: "Significance of Heart"
    },
    { 
        question: "How do the Upanishads address the diversity of philosophical viewpoints?",
        answer: "They present different viewpoints as partial truths leading to the complete understanding of non-dual reality.",
        concept: "Philosophical Diversity"
    },
    { 
        question: "What is the Upanishadic concept of 'Akasha' (space/ether)?",
        answer: "Akasha is the first and subtlest element from which all other elements emerge, representing infinite expansion.",
        concept: "Concept of Akasha"
    },
    { 
        question: "How do the Upanishads describe the relationship between waking and dream states?",
        answer: "They compare the waking state to a dream, with both being mental constructions, though of different orders of reality.",
        concept: "Waking and Dream"
    },
    { 
        question: "What is the Upanishadic teaching on the nature of memory?",
        answer: "Memory is seen as a mental faculty that preserves experiences but can also perpetuate ignorance if not properly understood.",
        concept: "Nature of Memory"
    },
    { 
        question: "How do the Upanishads view the practice of austerities?",
        answer: "Austerities are valued for self-purification but must be accompanied by knowledge to lead to liberation.",
        concept: "Practice of Austerities"
    },
    { 
        question: "What is the concept of 'Vijñana' (higher knowledge) in the Upanishads?",
        answer: "Vijñana refers to direct intuitive knowledge of reality, beyond intellectual understanding.",
        concept: "Higher Knowledge"
    },
    { 
        question: "How do the Upanishads describe the process of perception?",
        answer: "They describe perception as consciousness functioning through the senses and mind to cognize objects.",
        concept: "Process of Perception"
    },
    { 
        question: "What is the Upanishadic view on the nature of relationships?",
        answer: "Relationships are seen as opportunities for spiritual growth when approached with right understanding and detachment.",
        concept: "Nature of Relationships"
    },
    { 
        question: "How do the Upanishads characterize the state of the knower of Brahman?",
        answer: "The knower of Brahman sees the Self in all and all in the Self, free from duality and established in peace.",
        concept: "Knower of Brahman"
    },
    { 
        question: "What is the significance of the term 'Upasana' (meditation) in the Upanishads?",
        answer: "Upasana means 'sitting near' the divine through meditation, leading to intimate knowledge of reality.",
        concept: "Meditation Practice"
    },
    { 
        question: "How do the Upanishads address the question of evil and suffering?",
        answer: "They attribute evil and suffering to ignorance and karma, with knowledge being the ultimate solution.",
        concept: "Problem of Evil"
    },
    { 
        question: "What is the Upanishadic teaching on the nature of the body?",
        answer: "The body is seen as a temporary vehicle for the soul, to be maintained but not identified with.",
        concept: "Nature of Body"
    },
    { 
        question: "How do the Upanishads describe the relationship between name and form?",
        answer: "Name and form (nama-rupa) are the dual aspects through which the formless reality appears as the world.",
        concept: "Name and Form"
    },
    { 
        question: "What is the concept of 'Puryashtaka' (subtle body) in the Upanishads?",
        answer: "Puryashtaka refers to the subtle body consisting of mind, intellect, ego, and subtle elements that transmigrates.",
        concept: "Subtle Body"
    },
    { 
        question: "How do the Upanishads view the pursuit of wealth and power?",
        answer: "Wealth and power are acceptable when used for righteous purposes but are obstacles if sought for selfish ends.",
        concept: "Wealth and Power"
    },
    { 
        question: "What is the Upanishadic teaching on the nature of speech and sound?",
        answer: "Speech and sound are seen as manifestations of cosmic energy, with sacred sounds having transformative power.",
        concept: "Speech and Sound"
    },
    { 
        question: "How do the Upanishads describe the process of cosmic evolution?",
        answer: "They describe evolution as the sequential manifestation of elements from the subtle to the gross.",
        concept: "Cosmic Evolution"
    },
    { 
        question: "What is the significance of the term 'Tattva' (principle) in the Upanishads?",
        answer: "Tattva refers to the fundamental principles of reality that constitute both the cosmos and the individual.",
        concept: "Cosmic Principles"
    },
    { 
        question: "How do the Upanishads address the diversity of spiritual paths?",
        answer: "They acknowledge different paths for different temperaments but emphasize that all ultimately lead to the same truth.",
        concept: "Spiritual Paths"
    },
    { 
        question: "What is the Upanishadic view on the nature of the witness consciousness?",
        answer: "The witness is pure consciousness that observes all experiences without being affected by them.",
        concept: "Witness Consciousness"
    },
    { 
        question: "How do the Upanishads characterize the relationship between the individual and nature?",
        answer: "They see nature as the manifestation of divine energy and the individual as its conscious expression.",
        concept: "Individual and Nature"
    },
    { 
        question: "What is the Upanishadic teaching on the importance of ethical conduct?",
        answer: "Ethical conduct is essential for purifying the mind and making it fit for spiritual knowledge.",
        concept: "Ethical Conduct"
    },
    { 
        question: "How do the Upanishads describe the nature of the supreme reality?",
        answer: "The supreme reality is described as non-dual, self-luminous, all-pervading, and the source of everything.",
        concept: "Supreme Reality"
    },
    { 
        question: "What is the significance of the Upanishads in the development of Indian spirituality?",
        answer: "The Upanishads represent the philosophical foundation of Indian spirituality, influencing all subsequent religious and philosophical traditions.",
        concept: "Historical Significance"
    }
];