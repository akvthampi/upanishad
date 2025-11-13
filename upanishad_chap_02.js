// upanishad_chap_02.js
const chapterMetadata = {
    title: "Chapter 2: Principal Upanishads",
    info: "Major Upanishads and their unique contributions (100+ cards)"
};
const flashcards = [
    { 
        question: "Which are considered the ten principal Upanishads?",
        answer: "The ten principal Upanishads are: Isha, Kena, Katha, Prashna, Mundaka, Mandukya, Taittiriya, Aitareya, Chandogya, and Brihadaranyaka.",
        concept: "Ten Principal Upanishads"
    },
    { 
        question: "To which Veda does the Isha Upanishad belong?",
        answer: "The Isha Upanishad belongs to the Shukla Yajurveda (White Yajurveda).",
        concept: "Isha Upanishad - Vedic Association"
    },
    { 
        question: "What is the central teaching of the Isha Upanishad?",
        answer: "The central teaching is 'Ishavasyam idam sarvam' - everything in the universe is pervaded by the Lord, and one should enjoy through renunciation.",
        concept: "Isha Upanishad - Core Teaching"
    },
    { 
        question: "How many verses does the Isha Upanishad contain?",
        answer: "The Isha Upanishad contains 18 verses, making it one of the shortest principal Upanishads.",
        concept: "Isha Upanishad - Length"
    },
    { 
        question: "What famous prayer for peace concludes the Isha Upanishad?",
        answer: "It concludes with the peace invocation: 'ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते \। पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते \॥ ॐ शान्तिः शान्तिः शान्तिः ॥ ' emphasizing the infinite nature of Brahman.",
        concept: "Isha Upanishad - Peace Prayer"
    },
    { 
        question: "To which Veda does the Kena Upanishad belong?",
        answer: "The Kena Upanishad belongs to the Samaveda.",
        concept: "Kena Upanishad - Vedic Association"
    },
    { 
        question: "What does 'Kena' mean and what is the main theme of this Upanishad?",
        answer: "'Kena' means 'by whom' and the Upanishad explores the nature of the ultimate power behind all faculties and phenomena.",
        concept: "Kena Upanishad - Theme"
    },
    { 
        question: "What famous story appears in the Kena Upanishad?",
        answer: "The story of the gods' encounter with Brahman in the form of Yaksha (mysterious being) who demonstrates the limitations of divine powers.",
        concept: "Kena Upanishad - Yaksha Story"
    },
    { 
        question: "What important distinction does the Kena Upanishad make about knowledge?",
        answer: "It distinguishes between lower knowledge (of rituals and worldly matters) and higher knowledge (of the imperishable Brahman).",
        concept: "Kena Upanishad - Knowledge Types"
    },
    { 
        question: "To which Veda does the Katha Upanishad belong?",
        answer: "The Katha Upanishad belongs to the Krishna Yajurveda (Black Yajurveda).",
        concept: "Katha Upanishad - Vedic Association"
    },
    { 
        question: "What famous dialogue forms the core of the Katha Upanishad?",
        answer: "The dialogue between young Nachiketa and Yama, the lord of death, about the nature of the Self and immortality.",
        concept: "Katha Upanishad - Nachiketa Story"
    },
    { 
        question: "What is the central analogy used in the Katha Upanishad?",
        answer: "The chariot analogy: The body is the chariot, senses are the horses, mind is the reins, intellect is the charioteer, and the Self is the master of the chariot.",
        concept: "Katha Upanishad - Chariot Analogy"
    },
    { 
        question: "What famous verse about the Self appears in the Katha Upanishad?",
        answer: "The declaration that the Self is smaller than the smallest yet greater than the greatest, seated in the hearts of all beings.",
        concept: "Katha Upanishad - Nature of Self"
    },
    { 
        question: "What does the Katha Upanishad say about the two paths?",
        answer: "It describes the two paths: the path of pleasure (preyas) and the path of good (shreyas), with the wise choosing the latter.",
        concept: "Katha Upanishad - Two Paths"
    },
    { 
        question: "To which Veda does the Prashna Upanishad belong?",
        answer: "The Prashna Upanishad belongs to the Atharvaveda.",
        concept: "Prashna Upanishad - Vedic Association"
    },
    { 
        question: "What does 'Prashna' mean and how is this Upanishad structured?",
        answer: "'Prashna' means 'question' and the Upanishad is structured as six students asking six fundamental questions to sage Pippalada.",
        concept: "Prashna Upanishad - Structure"
    },
    { 
        question: "What are the six questions asked in the Prashna Upanishad?",
        answer: "Questions about: 1) Origin of beings, 2) Supreme devas, 3) Prana (life force), 4) Sleep states, 5) Om mantra, 6) Purusha with sixteen parts.",
        concept: "Prashna Upanishad - Six Questions"
    },
    { 
        question: "What does the Prashna Upanishad teach about Prana?",
        answer: "It describes Prana as the fundamental life force that sustains all beings and the cosmos.",
        concept: "Prashna Upanishad - Prana Teaching"
    },
    { 
        question: "To which Veda does the Mundaka Upanishad belong?",
        answer: "The Mundaka Upanishad belongs to the Atharvaveda.",
        concept: "Mundaka Upanishad - Vedic Association"
    },
    { 
        question: "What does 'Mundaka' mean and what is special about this Upanishad?",
        answer: "'Mundaka' means 'shaving' symbolizing cutting away ignorance. It's known for its sharp, direct approach to spiritual knowledge.",
        concept: "Mundaka Upanishad - Meaning"
    },
    { 
        question: "What famous analogy for spiritual knowledge appears in the Mundaka Upanishad?",
        answer: "The analogy of two birds sitting on the same tree - one eating fruits (individual self) and other watching (supreme Self).",
        concept: "Mundaka Upanishad - Two Birds Analogy"
    },
    { 
        question: "How does the Mundaka Upanishad describe the process of acquiring knowledge?",
        answer: "It emphasizes that true knowledge must be learned from a qualified teacher, like fire can only be kindled from another fire.",
        concept: "Mundaka Upanishad - Knowledge Transmission"
    },
    { 
        question: "What does the Mundaka Upanishad say about rituals?",
        answer: "It strongly criticizes attachment to rituals, calling them 'unsteady boats' that cannot lead to liberation.",
        concept: "Mundaka Upanishad - View on Rituals"
    },
    { 
        question: "To which Veda does the Mandukya Upanishad belong?",
        answer: "The Mandukya Upanishad belongs to the Atharvaveda.",
        concept: "Mandukya Upanishad - Vedic Association"
    },
    { 
        question: "How many verses does the Mandukya Upanishad contain and why is it significant?",
        answer: "It contains only 12 verses but is considered the most important Upanishad for Advaita Vedanta, containing the essence of all Upanishads.",
        concept: "Mandukya Upanishad - Significance"
    },
    { 
        question: "What is the main subject of the Mandukya Upanishad?",
        answer: "It exclusively deals with the mystical significance of the syllable Om and the four states of consciousness.",
        concept: "Mandukya Upanishad - Subject"
    },
    { 
        question: "What are the four states of consciousness described in the Mandukya Upanishad?",
        answer: "1) Waking state (Vaishvanara), 2) Dream state (Taijasa), 3) Deep sleep (Prajna), 4) Transcendental state (Turiya).",
        concept: "Mandukya Upanishad - Four States"
    },
    { 
        question: "What does the Mandukya Upanishad teach about Turiya?",
        answer: "Turiya is the fourth state - pure consciousness, non-dual, beyond the other three states, and identical with Om and the Self.",
        concept: "Mandukya Upanishad - Turiya"
    },
    { 
        question: "To which Veda does the Taittiriya Upanishad belong?",
        answer: "The Taittiriya Upanishad belongs to the Krishna Yajurveda.",
        concept: "Taittiriya Upanishad - Vedic Association"
    },
    { 
        question: "What are the three sections of the Taittiriya Upanishad?",
        answer: "1) Siksha Valli (on pronunciation and discipline), 2) Brahmananda Valli (on bliss of Brahman), 3) Bhrigu Valli (Bhrigu's quest).",
        concept: "Taittiriya Upanishad - Structure"
    },
    { 
        question: "What famous teaching about the five koshas appears in the Taittiriya Upanishad?",
        answer: "The doctrine of five sheaths covering the Self: Annamaya (food), Pranamaya (vital), Manomaya (mental), Vijnanamaya (intellectual), Anandamaya (bliss).",
        concept: "Taittiriya Upanishad - Five Koshas"
    },
    { 
        question: "What does the Taittiriya Upanishad teach about Ananda (bliss)?",
        answer: "It describes Brahman as bliss itself and gives the famous analogy of comparative bliss to explain the infinite nature of divine bliss.",
        concept: "Taittiriya Upanishad - Bliss Teaching"
    },
    { 
        question: "What ethical instructions are given in the Taittiriya Upanishad?",
        answer: "The famous convocation address to students: 'Speak truth, practice dharma, don't neglect study and teaching...'",
        concept: "Taittiriya Upanishad - Ethical Instructions"
    },
    { 
        question: "To which Veda does the Aitareya Upanishad belong?",
        answer: "The Aitareya Upanishad belongs to the Rigveda.",
        concept: "Aitareya Upanishad - Vedic Association"
    },
    { 
        question: "What is the main theme of the Aitareya Upanishad?",
        answer: "It deals with the creation of the universe and the emergence of consciousness in the human being.",
        concept: "Aitareya Upanishad - Theme"
    },
    { 
        question: "What unique creation story appears in the Aitareya Upanishad?",
        answer: "The story of Purusha (cosmic person) from whom organs and faculties emerge, and how consciousness enters the human body.",
        concept: "Aitareya Upanishad - Creation Story"
    },
    { 
        question: "What does the Aitareya Upanishad teach about the nature of consciousness?",
        answer: "It identifies consciousness as the true Self that witnesses all experiences while remaining unchanged.",
        concept: "Aitareya Upanishad - Consciousness"
    },
    { 
        question: "To which Veda does the Chandogya Upanishad belong?",
        answer: "The Chandogya Upanishad belongs to the Samaveda.",
        concept: "Chandogya Upanishad - Vedic Association"
    },
    { 
        question: "How many chapters does the Chandogya Upanishad have?",
        answer: "It has 8 chapters, making it one of the largest Upanishads along with Brihadaranyaka.",
        concept: "Chandogya Upanishad - Length"
    },
    { 
        question: "What famous teaching begins the Chandogya Upanishad?",
        answer: "The declaration that the essence of all beings is earth, the essence of earth is water, and so on up to the essence being Brahman.",
        concept: "Chandogya Upanishad - Essence Teaching"
    },
    { 
        question: "What is the 'Tat Tvam Asi' teaching and where does it appear?",
        answer: "'Tat Tvam Asi' (That Thou Art) appears in the Chandogya Upanishad, taught by Uddalaka to his son Shvetaketu.",
        concept: "Chandogya Upanishad - Tat Tvam Asi"
    },
    { 
        question: "How many times is 'Tat Tvam Asi' repeated in the Chandogya Upanishad?",
        answer: "It is repeated nine times, each time with different examples to illustrate the identity of individual self and supreme reality.",
        concept: "Chandogya Upanishad - Repetition"
    },
    { 
        question: "What famous stories appear in the Chandogya Upanishad?",
        answer: "Stories of Satyakama Jabala's truthfulness, Narada's education under Sanatkumara, and Uddalaka's teaching to Shvetaketu.",
        concept: "Chandogya Upanishad - Stories"
    },
    { 
        question: "What does the Chandogya Upanishad teach about space?",
        answer: "It describes space as the origin of all elements and the common basis of all diversity.",
        concept: "Chandogya Upanishad - Space Teaching"
    },
    { 
        question: "To which Veda does the Brihadaranyaka Upanishad belong?",
        answer: "The Brihadaranyaka Upanishad belongs to the Shukla Yajurveda.",
        concept: "Brihadaranyaka Upanishad - Vedic Association"
    },
    { 
        question: "What does 'Brihadaranyaka' mean and why is it significant?",
        answer: "'Brihadaranyaka' means 'great forest treatise'. It is the largest Upanishad and considered the most important philosophically.",
        concept: "Brihadaranyaka Upanishad - Meaning"
    },
    { 
        question: "How many chapters does the Brihadaranyaka Upanishad have?",
        answer: "It has 6 chapters divided into 3 sections of 2 chapters each.",
        concept: "Brihadaranyaka Upanishad - Structure"
    },
    { 
        question: "What famous dialogue about the Self appears in the Brihadaranyaka Upanishad?",
        answer: "The dialogue between Yajnavalkya and his wife Maitreyi about the nature of the Self and immortality.",
        concept: "Brihadaranyaka Upanishad - Maitreyi Dialogue"
    },
    { 
        question: "What is the 'Neti Neti' teaching and where does it appear?",
        answer: "'Neti Neti' (not this, not this) appears in the Brihadaranyaka Upanishad as the method to realize the Self by negation.",
        concept: "Brihadaranyaka Upanishad - Neti Neti"
    },
    { 
        question: "What famous philosophical debates appear in the Brihadaranyaka Upanishad?",
        answer: "The debates between Yajnavalkya and various philosophers including Gargi Vacaknavi, the woman philosopher.",
        concept: "Brihadaranyaka Upanishad - Philosophical Debates"
    },
    { 
        question: "What does the Brihadaranyaka Upanishad teach about desire?",
        answer: "It identifies desire as the root cause of rebirth and attachment to the world.",
        concept: "Brihadaranyaka Upanishad - Desire Teaching"
    },
    { 
        question: "What is the 'Aham Brahmasmi' teaching and where does it appear?",
        answer: "'Aham Brahmasmi' (I am Brahman) appears in the Brihadaranyaka Upanishad, declared by the sage in deep meditation.",
        concept: "Brihadaranyaka Upanishad - Aham Brahmasmi"
    },
    { 
        question: "Which Upanishad is considered the foundation of Advaita Vedanta?",
        answer: "The Mandukya Upanishad, along with Gaudapada's Karika on it, forms the foundation of Advaita Vedanta.",
        concept: "Advaita Foundation"
    },
    { 
        question: "Which Upanishad contains the most detailed analysis of Om?",
        answer: "The Mandukya Upanishad provides the most systematic analysis of Om and its correlation with states of consciousness.",
        concept: "Om Analysis"
    },
    { 
        question: "Which Upanishad is known for its emphasis on ethical living?",
        answer: "The Taittiriya Upanishad contains detailed ethical instructions for students and householders.",
        concept: "Ethical Emphasis"
    },
    { 
        question: "Which Upanishad contains the famous 'two birds' analogy?",
        answer: "The Mundaka Upanishad contains the beautiful analogy of two birds on the same tree.",
        concept: "Two Birds Analogy"
    },
    { 
        question: "Which Upanishad is structured as questions and answers?",
        answer: "The Prashna Upanishad is explicitly structured as six questions with their answers.",
        concept: "Question-Answer Format"
    },
    { 
        question: "Which Upanishad contains the dialogue with Death?",
        answer: "The Katha Upanishad features the profound dialogue between Nachiketa and Yama (Death).",
        concept: "Dialogue with Death"
    },
    { 
        question: "Which Upanishad is the shortest among the principal ones?",
        answer: "The Mandukya Upanishad with 12 verses is the shortest, followed by Isha with 18 verses.",
        concept: "Shortest Upanishad"
    },
    { 
        question: "Which Upanishad is the longest?",
        answer: "The Brihadaranyaka Upanishad is the longest, followed by Chandogya Upanishad.",
        concept: "Longest Upanishad"
    },
    { 
        question: "Which Upanishad belongs to the Rigveda?",
        answer: "The Aitareya Upanishad belongs to the Rigveda.",
        concept: "Rigveda Upanishad"
    },
    { 
        question: "Which Upanishads belong to the Samaveda?",
        answer: "The Kena and Chandogya Upanishads belong to the Samaveda.",
        concept: "Samaveda Upanishads"
    },
    { 
        question: "Which Upanishads belong to the Krishna Yajurveda?",
        answer: "The Katha, Taittiriya, and Shvetashvatara Upanishads belong to the Krishna Yajurveda.",
        concept: "Krishna Yajurveda Upanishads"
    },
    { 
        question: "Which Upanishads belong to the Shukla Yajurveda?",
        answer: "The Isha and Brihadaranyaka Upanishads belong to the Shukla Yajurveda.",
        concept: "Shukla Yajurveda Upanishads"
    },
    { 
        question: "Which Upanishads belong to the Atharvaveda?",
        answer: "The Prashna, Mundaka, and Mandukya Upanishads belong to the Atharvaveda.",
        concept: "Atharvaveda Upanishads"
    },
    { 
        question: "What is the Shvetashvatara Upanishad known for?",
        answer: "It is known for its theistic emphasis and detailed discussion of yoga practices.",
        concept: "Shvetashvatara Upanishad"
    },
    { 
        question: "Which Upanishad emphasizes the personal aspect of God?",
        answer: "The Shvetashvatara Upanishad strongly emphasizes the personal God (Ishvara) while maintaining non-dual philosophy.",
        concept: "Theistic Emphasis"
    },
    { 
        question: "What does 'Shvetashvatara' mean?",
        answer: "It means 'white mule' and is named after the sage Shvetashvatara who taught this Upanishad.",
        concept: "Shvetashvatara Meaning"
    },
    { 
        question: "Which Upanishad contains detailed teachings on yoga?",
        answer: "The Shvetashvatara Upanishad contains one of the earliest systematic expositions of yoga in Upanishadic literature.",
        concept: "Yoga in Upanishads"
    },
    { 
        question: "What is the Kaushitaki Upanishad known for?",
        answer: "It is known for its teachings on Prana (life force) and the journey of the soul after death.",
        concept: "Kaushitaki Upanishad"
    },
    { 
        question: "Which Upanishad discusses the five fires doctrine?",
        answer: "The Brihadaranyaka and Chandogya Upanishads discuss the doctrine of five fires representing cosmic processes.",
        concept: "Five Fires Doctrine"
    },
    { 
        question: "What is the Maitrayaniya Upanishad known for?",
        answer: "It is known for its synthesis of Samkhya and Yoga teachings within the Vedantic framework.",
        concept: "Maitrayaniya Upanishad"
    },
    { 
        question: "Which Upanishad is sometimes included as the 11th principal Upanishad?",
        answer: "The Shvetashvatara Upanishad is sometimes included as the 11th principal Upanishad.",
        concept: "Eleventh Principal Upanishad"
    },
    { 
        question: "What is unique about the Mandukya Upanishad's approach?",
        answer: "It takes a purely psychological and epistemological approach, analyzing consciousness without cosmological speculations.",
        concept: "Mandukya's Unique Approach"
    },
    { 
        question: "Which Upanishad contains the famous 'Asato Ma Sadgamaya' prayer?",
        answer: "The Brihadaranyaka Upanishad contains this prayer: 'From unreal lead me to real, from darkness to light, from death to immortality.'",
        concept: "Famous Prayer"
    },
    { 
        question: "What is the common structure found in most Upanishads?",
        answer: "Most begin with a peace invocation (Shanti Patha) and end with another, framing the philosophical content.",
        concept: "Upanishadic Structure"
    },
    { 
        question: "Which Upanishad is considered the most poetic?",
        answer: "The Katha Upanishad is often considered the most poetic with its beautiful imagery and metaphors.",
        concept: "Most Poetic Upanishad"
    },
    { 
        question: "Which Upanishad is considered the most philosophical?",
        answer: "The Brihadaranyaka Upanishad is considered the most profound philosophically.",
        concept: "Most Philosophical Upanishad"
    },
    { 
        question: "What is the main contribution of the Isha Upanishad?",
        answer: "It teaches the harmony between worldly life and spiritual pursuit - enjoying through renunciation.",
        concept: "Isha's Contribution"
    },
    { 
        question: "What is the main contribution of the Kena Upanishad?",
        answer: "It establishes that Brahman is beyond all faculties yet enables their functioning.",
        concept: "Kena's Contribution"
    },
    { 
        question: "What is the main contribution of the Katha Upanishad?",
        answer: "It provides a systematic psychology of spiritual practice and the nature of the Self.",
        concept: "Katha's Contribution"
    },
    { 
        question: "What is the main contribution of the Prashna Upanishad?",
        answer: "It addresses fundamental questions about existence in a structured question-answer format.",
        concept: "Prashna's Contribution"
    },
    { 
        question: "What is the main contribution of the Mundaka Upanishad?",
        answer: "It sharply distinguishes between higher and lower knowledge and emphasizes direct realization.",
        concept: "Mundaka's Contribution"
    },
    { 
        question: "What is the main contribution of the Mandukya Upanishad?",
        answer: "It provides the most precise analysis of consciousness states and the significance of Om.",
        concept: "Mandukya's Contribution"
    },
    { 
        question: "What is the main contribution of the Taittiriya Upanishad?",
        answer: "It systematizes the concept of koshas and provides practical ethical guidance.",
        concept: "Taittiriya's Contribution"
    },
    { 
        question: "What is the main contribution of the Aitareya Upanishad?",
        answer: "It explores the emergence of consciousness in the cosmic and individual context.",
        concept: "Aitareya's Contribution"
    },
    { 
        question: "What is the main contribution of the Chandogya Upanishad?",
        answer: "It establishes the identity of individual and cosmic reality through multiple teaching methods.",
        concept: "Chandogya's Contribution"
    },
    { 
        question: "What is the main contribution of the Brihadaranyaka Upanishad?",
        answer: "It provides the most comprehensive philosophical foundation for Advaita Vedanta.",
        concept: "Brihadaranyaka's Contribution"
    },
    { 
        question: "Which Upanishad is most frequently quoted by Shankara in his commentaries?",
        answer: "The Brihadaranyaka Upanishad is most frequently quoted by Shankara in his Brahma Sutra commentary.",
        concept: "Shankara's References"
    },
    { 
        question: "What is the chronological order of the principal Upanishads?",
        answer: "Generally: Brihadaranyaka and Chandogya (oldest), then others, with Mandukya and probably Isha among the later ones.",
        concept: "Chronological Order"
    },
    { 
        question: "Which Upanishad contains the doctrine of 'Trayi Vidya'?",
        answer: "The Mundaka Upanishad mentions the 'Trayi Vidya' - the threefold knowledge of the Vedas as lower knowledge.",
        concept: "Trayi Vidya"
    },
    { 
        question: "What is the common theme running through all principal Upanishads?",
        answer: "The identity of Atman (individual self) with Brahman (ultimate reality) is the central theme of all principal Upanishads.",
        concept: "Common Theme"
    },
    { 
        question: "How do the Upanishads differ in their pedagogical approaches?",
        answer: "They use different methods: stories (Katha), dialogues (Brihadaranyaka), questions (Prashna), analogies (Mundaka), and direct analysis (Mandukya).",
        concept: "Pedagogical Diversity"
    },
    { 
        question: "Which Upanishad is considered the 'cream of the Vedas'?",
        answer: "The Katha Upanishad is often called the 'cream of the Vedas' due to its profound yet accessible teachings.",
        concept: "Cream of Vedas"
    },
    { 
        question: "What is the significance of the number 108 in relation to Upanishads?",
        answer: "While 10-13 are principal, 108 Upanishads are traditionally recognized, with the number having symbolic spiritual significance.",
        concept: "108 Upanishads"
    },
    { 
        question: "Which Upanishad bridges Vedic ritualism and Upanishadic philosophy?",
        answer: "The Isha Upanishad serves as a bridge, showing how to spiritualize worldly life rather than reject it.",
        concept: "Bridge Upanishad"
    },
    { 
        question: "What is the unique feature of the Mandukya Upanishad's methodology?",
        answer: "It uses pure epistemological analysis without stories or dialogues, directly examining consciousness.",
        concept: "Mandukya's Methodology"
    },
    { 
        question: "Which Upanishad is most concerned with social ethics?",
        answer: "The Taittiriya Upanishad provides the most detailed instructions for ethical social living.",
        concept: "Social Ethics"
    },
    { 
        question: "What is the 'Mahavakya' from each principal Upanishad?",
        answer: "Prajnanam Brahma (Aitareya), Aham Brahmasmi (Brihadaranyaka), Tat Tvam Asi (Chandogya), Ayam Atma Brahma (Mandukya).",
        concept: "Four Mahavakyas"
    },
    { 
        question: "Which Upanishad is considered the most comprehensive?",
        answer: "The Brihadaranyaka Upanishad is considered the most comprehensive in its coverage of philosophical topics.",
        concept: "Most Comprehensive"
    },
    { 
        question: "What is the contemporary relevance of studying principal Upanishads?",
        answer: "They provide timeless insights into consciousness, reality, and human purpose that remain relevant for modern spiritual seekers.",
        concept: "Contemporary Relevance"
    }
];