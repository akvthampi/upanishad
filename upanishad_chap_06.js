// upanishad_chap_06.js
const chapterMetadata = {
    title: "Chapter 6: Ethical Teachings",
    info: "Dharma, karma, and moral principles (110+ cards)"
};
const flashcards = [
    { 
        question: "What is the fundamental ethical principle in the Upanishads?",
        answer: "The recognition of the same Atman (Self) in all beings, which naturally leads to ethical conduct toward everyone.",
        concept: "Fundamental Ethical Principle"
    },
    { 
        question: "How do the Upanishads define 'Dharma'?",
        answer: "Dharma is that which sustains and upholds both the individual and cosmic order - righteous conduct in accordance with universal truth.",
        concept: "Definition of Dharma"
    },
    { 
        question: "What is the relationship between Dharma and Moksha?",
        answer: "Dharma purifies the mind and creates favorable conditions for spiritual knowledge, which alone leads to Moksha (liberation).",
        concept: "Dharma and Moksha Relationship"
    },
    { 
        question: "What are the 'Four Purusharthas' (human goals)?",
        answer: "Dharma (righteousness), Artha (wealth), Kama (pleasure), and Moksha (liberation) - the four legitimate aims of human life.",
        concept: "Four Purusharthas"
    },
    { 
        question: "How should the four Purusharthas be balanced?",
        answer: "Artha and Kama should be pursued within the framework of Dharma, and all three should be directed toward the ultimate goal of Moksha.",
        concept: "Balancing Life Goals"
    },
    { 
        question: "What is the Upanishadic view on wealth (Artha)?",
        answer: "Wealth is acceptable when earned righteously and used for noble purposes, but becomes binding when pursued for selfish enjoyment.",
        concept: "View on Wealth"
    },
    { 
        question: "What is the proper attitude toward pleasure (Kama)?",
        answer: "Pleasures should be enjoyed in moderation without attachment, recognizing they are temporary and cannot give lasting fulfillment.",
        concept: "Attitude Toward Pleasure"
    },
    { 
        question: "What is the 'Doctrine of Karma'?",
        answer: "The universal law of cause and effect where every action produces corresponding results, shaping one's present and future experiences.",
        concept: "Karma Doctrine"
    },
    { 
        question: "What are the three types of Karma?",
        answer: "Sanchita (accumulated past karma), Prarabdha (destiny for this life), and Agami (future karma being created now).",
        concept: "Three Types of Karma"
    },
    { 
        question: "How does Karma affect ethical decision-making?",
        answer: "Understanding that actions have consequences encourages responsible behavior and consideration of long-term effects.",
        concept: "Karma in Decision-Making"
    },
    { 
        question: "What is 'Nishkama Karma'?",
        answer: "Action performed without attachment to results - doing one's duty as an offering to the divine, without selfish motives.",
        concept: "Nishkama Karma"
    },
    { 
        question: "What are the 'Pancha Maha Yajnas' (five great sacrifices)?",
        answer: "Daily duties toward: 1) Gods (Deva Yajna), 2) Ancestors (Pitri Yajna), 3) Sages (Brahma Yajna), 4) Humans (Manushya Yajna), 5) Animals (Bhuta Yajna).",
        concept: "Five Great Sacrifices"
    },
    { 
        question: "What is 'Ahimsa' and why is it emphasized?",
        answer: "Non-violence in thought, word, and deed; it's fundamental because all beings share the same Atman, so harming others is harming oneself.",
        concept: "Ahimsa - Non-violence"
    },
    { 
        question: "How is Ahimsa practiced in daily life?",
        answer: "Through compassionate thoughts, kind speech, harmless actions, vegetarian diet, and respecting all forms of life.",
        concept: "Practicing Ahimsa"
    },
    { 
        question: "What is 'Satya' (truth) in Upanishadic ethics?",
        answer: "Speaking truth that is beneficial, pleasant, and not harmful - truth in thought, word, and alignment with reality.",
        concept: "Satya - Truth"
    },
    { 
        question: "Are there any limitations to truth-telling?",
        answer: "Truth that causes unnecessary harm should be withheld; the highest truth is recognition of one's identity with Brahman.",
        concept: "Limits of Truth-telling"
    },
    { 
        question: "What is 'Asteya'?",
        answer: "Non-stealing - not taking what rightfully belongs to others, including material possessions, ideas, or credit.",
        concept: "Asteya - Non-stealing"
    },
    { 
        question: "What is 'Brahmacharya' as an ethical principle?",
        answer: "Conservation and proper channeling of vital energy, not merely celibacy but control over all senses and desires.",
        concept: "Brahmacharya - Energy Conservation"
    },
    { 
        question: "What is 'Aparigraha'?",
        answer: "Non-possessiveness - freedom from greed and hoarding, taking only what is necessary and sharing surplus with others.",
        concept: "Aparigraha - Non-possessiveness"
    },
    { 
        question: "What are the 'Yamas' (restraints)?",
        answer: "The five ethical restraints: Ahimsa, Satya, Asteya, Brahmacharya, and Aparigraha.",
        concept: "Yamas - Ethical Restraints"
    },
    { 
        question: "What are the 'Niyamas' (observances)?",
        answer: "Shaucha (purity), Santosha (contentment), Tapas (austerity), Svadhyaya (self-study), Ishvara Pranidhana (surrender).",
        concept: "Niyamas - Observances"
    },
    { 
        question: "What is 'Shaucha' (purity)?",
        answer: "Cleanliness of body, mind, and environment - external purity through bathing, internal through pure thoughts and emotions.",
        concept: "Shaucha - Purity"
    },
    { 
        question: "What is 'Santosha'?",
        answer: "Contentment - being satisfied with what comes naturally without undue effort, while continuing righteous action.",
        concept: "Santosha - Contentment"
    },
    { 
        question: "What is 'Tapas' as ethical discipline?",
        answer: "Austerity and self-discipline - voluntarily accepting discomfort to strengthen willpower and purify mind.",
        concept: "Tapas - Austerity"
    },
    { 
        question: "What is 'Svadhyaya'?",
        answer: "Self-study - regular study of scriptures and reflection on one's thoughts and actions in light of spiritual teachings.",
        concept: "Svadhyaya - Self-study"
    },
    { 
        question: "What is 'Ishvara Pranidhana'?",
        answer: "Surrender to the divine - offering all actions and their results to God, reducing ego and developing humility.",
        concept: "Ishvara Pranidhana - Surrender"
    },
    { 
        question: "What is the ethical significance of the Guru-disciple relationship?",
        answer: "Based on mutual respect, trust, and commitment - the Guru guides ethically, the disciple follows with faith and obedience.",
        concept: "Guru-Disciple Ethics"
    },
    { 
        question: "What are the duties of a student (Brahmachari)?",
        answer: "Study, service to Guru, purity, celibacy, simplicity, and developing good character through discipline.",
        concept: "Student Duties"
    },
    { 
        question: "What are the duties of a householder (Grihastha)?",
        answer: "Righteous earning, family support, hospitality, charity, performance of rituals, and spiritual practice.",
        concept: "Householder Duties"
    },
    { 
        question: "What are the ethical responsibilities toward family?",
        answer: "Providing for dependents, educating children, maintaining family harmony, and preserving family traditions.",
        concept: "Family Responsibilities"
    },
    { 
        question: "What is 'Dana' (charity) and its rules?",
        answer: "Giving with right attitude to deserving recipients at proper time and place, without expectation of return.",
        concept: "Dana - Charity"
    },
    { 
        question: "What are the different types of Dana?",
        answer: "Anna Dana (food), Vastra Dana (clothing), Vidya Dana (knowledge), Abhaya Dana (protection), and Dharma Dana (righteous support).",
        concept: "Types of Charity"
    },
    { 
        question: "What is the ethical basis for vegetarianism?",
        answer: "Ahimsa - recognizing that animals also have consciousness and avoiding causing them unnecessary suffering.",
        concept: "Basis of Vegetarianism"
    },
    { 
        question: "What is 'Seva' (selfless service)?",
        answer: "Service performed without expectation of reward, seeing the divine in those served, and serving as worship.",
        concept: "Seva - Selfless Service"
    },
    { 
        question: "How should wealth be used ethically?",
        answer: "One should divide wealth into four parts: for Dharma, for savings, for enjoyment, and for charity.",
        concept: "Ethical Use of Wealth"
    },
    { 
        question: "What is the Upanishadic view on environmental ethics?",
        answer: "Nature is sacred as manifestation of Brahman; humans should live in harmony with nature, not exploit it.",
        concept: "Environmental Ethics"
    },
    { 
        question: "What are the ethical duties toward society?",
        answer: "Contributing to social welfare, supporting righteous governance, promoting education, and maintaining social harmony.",
        concept: "Social Duties"
    },
    { 
        question: "What is 'Loka Sangraha'?",
        answer: "Welfare of the world - acting in ways that benefit society and contribute to cosmic order.",
        concept: "Loka Sangraha - World Welfare"
    },
    { 
        question: "How should one deal with ethical dilemmas?",
        answer: "By consulting scriptures, seeking guidance from wise persons, and following one's purified conscience.",
        concept: "Resolving Ethical Dilemmas"
    },
    { 
        question: "What is the ethical significance of truthfulness in business?",
        answer: "Honest dealings create trust and long-term success, while deception ultimately harms both parties.",
        concept: "Business Ethics"
    },
    { 
        question: "What are the ethical guidelines for speech?",
        answer: "Speech should be true, pleasant, beneficial, measured, and non-harmful - avoiding gossip, criticism, and harsh words.",
        concept: "Ethical Speech"
    },
    { 
        question: "What is 'Maitri' (friendliness)?",
        answer: "Cultivating unconditional friendliness toward all beings, without discrimination or expectation.",
        concept: "Maitri - Friendliness"
    },
    { 
        question: "What is 'Karuna' (compassion)?",
        answer: "Active compassion for suffering beings, coupled with efforts to alleviate their suffering.",
        concept: "Karuna - Compassion"
    },
    { 
        question: "What is 'Mudita' (sympathetic joy)?",
        answer: "Rejoicing in others' happiness and success without envy, comparison, or selfish motives.",
        concept: "Mudita - Sympathetic Joy"
    },
    { 
        question: "What is 'Upeksha' (equanimity)?",
        answer: "Maintaining mental balance and impartiality toward pleasure and pain, success and failure, praise and blame.",
        concept: "Upeksha - Equanimity"
    },
    { 
        question: "What are the 'Four Brahma Viharas'?",
        answer: "The four sublime attitudes: Maitri, Karuna, Mudita, and Upeksha - to be cultivated toward all beings.",
        concept: "Four Sublime Attitudes"
    },
    { 
        question: "How does one practice the Brahma Viharas?",
        answer: "By systematically extending these attitudes first to oneself, then to loved ones, neutrals, difficult persons, and finally all beings.",
        concept: "Practicing Brahma Viharas"
    },
    { 
        question: "What is the ethical significance of forgiveness?",
        answer: "Forgiveness frees both parties from the karmic cycle of injury and retaliation, promoting inner peace.",
        concept: "Significance of Forgiveness"
    },
    { 
        question: "How should one handle anger ethically?",
        answer: "By understanding its root causes, practicing patience, and transforming anger into constructive action.",
        concept: "Handling Anger"
    },
    { 
        question: "What is the Upanishadic view on justice?",
        answer: "Justice should be impartial, restorative rather than punitive, and consider the intention behind actions.",
        concept: "View on Justice"
    },
    { 
        question: "What are the ethical responsibilities of rulers?",
        answer: "Protection of subjects, administration of justice, promotion of Dharma, and welfare of all beings.",
        concept: "Ruler's Responsibilities"
    },
    { 
        question: "What is 'Raj Dharma'?",
        answer: "The ethical code for rulers - righteousness in governance, prioritizing people's welfare over personal interest.",
        concept: "Raj Dharma - Royal Duty"
    },
    { 
        question: "What are the ethical guidelines for war?",
        answer: "War should be last resort, fought for righteous cause, with protection of non-combatants, and without cruelty.",
        concept: "Ethics of War"
    },
    { 
        question: "What is the Upanishadic view on punishment?",
        answer: "Punishment should be proportionate, reformative, and aimed at restoring Dharma, not revenge.",
        concept: "View on Punishment"
    },
    { 
        question: "What are the ethical duties toward guests?",
        answer: "Hospitality (Atithi Devo Bhava) - treating guests as divine, offering food, shelter, and respect.",
        concept: "Duties to Guests"
    },
    { 
        question: "What is the ethical significance of gratitude?",
        answer: "Recognizing and appreciating the contributions of others, nature, and divine grace in one's life.",
        concept: "Significance of Gratitude"
    },
    { 
        question: "How should one practice humility?",
        answer: "By recognizing one's limitations, acknowledging others' contributions, and avoiding arrogance.",
        concept: "Practicing Humility"
    },
    { 
        question: "What is the ethical basis for simplicity?",
        answer: "Simplicity reduces attachments, conserves resources, and creates mental clarity for spiritual practice.",
        concept: "Basis of Simplicity"
    },
    { 
        question: "What are the ethical guidelines for eating?",
        answer: "Eating sattvic food in moderation, with gratitude, without wasting, and recognizing food as divine gift.",
        concept: "Eating Ethics"
    },
    { 
        question: "What is the Upanishadic view on marriage?",
        answer: "Marriage is a spiritual partnership for mutual growth, procreation, and fulfillment of Dharma.",
        concept: "View on Marriage"
    },
    { 
        question: "What are the ethical duties between spouses?",
        answer: "Mutual respect, fidelity, support in Dharma, and cooperation in spiritual practice.",
        concept: "Spousal Duties"
    },
    { 
        question: "What are the ethical responsibilities toward parents?",
        answer: "Respect, care in old age, continuing family traditions, and making them proud through righteous conduct.",
        concept: "Duties to Parents"
    },
    { 
        question: "What are the ethical duties toward teachers?",
        answer: "Respect, service, faithful learning, and living according to the teachings received.",
        concept: "Duties to Teachers"
    },
    { 
        question: "What is the ethical significance of promises?",
        answer: "Keeping promises builds trust and integrity; promises should be made carefully and kept faithfully.",
        concept: "Significance of Promises"
    },
    { 
        question: "How should one handle confidential information?",
        answer: "With discretion and protection, unless disclosure prevents greater harm.",
        concept: "Confidentiality Ethics"
    },
    { 
        question: "What is the Upanishadic view on work?",
        answer: "All work is sacred when performed with right attitude; work should be done excellently as service to divine.",
        concept: "View on Work"
    },
    { 
        question: "What are the ethical guidelines for entertainment?",
        answer: "Entertainment should be uplifting, not harmful, and in moderation without addiction.",
        concept: "Entertainment Ethics"
    },
    { 
        question: "What is the ethical approach to technology?",
        answer: "Technology should be used for human welfare and spiritual growth, not for exploitation or harm.",
        concept: "Technology Ethics"
    },
    { 
        question: "How should one practice ethical consumption?",
        answer: "Choosing products that cause minimal harm, supporting ethical producers, and avoiding waste.",
        concept: "Ethical Consumption"
    },
    { 
        question: "What is the Upanishadic view on animal welfare?",
        answer: "Animals deserve compassion and protection as conscious beings sharing the same life force.",
        concept: "Animal Welfare"
    },
    { 
        question: "What are the ethical duties toward future generations?",
        answer: "Preserving resources, transmitting knowledge, and creating a better world for those who come after.",
        concept: "Duties to Future Generations"
    },
    { 
        question: "What is the ethical significance of cultural preservation?",
        answer: "Preserving cultural heritage maintains continuity of wisdom and provides guidance for future generations.",
        concept: "Cultural Preservation"
    },
    { 
        question: "How should one practice tolerance?",
        answer: "Respecting different viewpoints while maintaining one's principles, and avoiding forced conversions.",
        concept: "Practicing Tolerance"
    },
    { 
        question: "What is the ethical approach to differences?",
        answer: "Recognizing unity in diversity - different paths suit different temperaments, but truth is one.",
        concept: "Approach to Differences"
    },
    { 
        question: "What are the ethical guidelines for spiritual teachers?",
        answer: "Teaching without expectation, adapting to student capacity, living the teachings, and avoiding exploitation.",
        concept: "Ethics for Teachers"
    },
    { 
        question: "What is the ethical significance of rituals?",
        answer: "Rituals cultivate discipline, focus, and reverence when performed with understanding of their symbolic meaning.",
        concept: "Significance of Rituals"
    },
    { 
        question: "How should one practice ethical speech in digital age?",
        answer: "Applying same principles online - truthfulness, non-harm, benefit, and responsibility for digital footprint.",
        concept: "Digital Ethics"
    },
    { 
        question: "What is the Upanishadic view on social media?",
        answer: "Can be used for spreading wisdom and connecting seekers, but should avoid gossip, misinformation, and addiction.",
        concept: "View on Social Media"
    },
    { 
        question: "What are the ethical considerations in end-of-life care?",
        answer: "Respecting patient autonomy, providing comfort, maintaining dignity, and supporting spiritual preparation.",
        concept: "End-of-Life Ethics"
    },
    { 
        question: "What is the ethical approach to healthcare?",
        answer: "Healing as service, compassion for patients, and maintaining the sanctity of life.",
        concept: "Healthcare Ethics"
    },
    { 
        question: "What are the ethical guidelines for scientific research?",
        answer: "Research should benefit humanity, respect life, and be conducted with integrity and responsibility.",
        concept: "Research Ethics"
    },
    { 
        question: "What is the Upanishadic view on genetic engineering?",
        answer: "Acceptable for healing purposes but problematic when used for enhancement or playing God.",
        concept: "View on Genetic Engineering"
    },
    { 
        question: "What are the ethical considerations in artificial intelligence?",
        answer: "AI should serve human welfare, not replace human values, and be developed with ethical safeguards.",
        concept: "AI Ethics"
    },
    { 
        question: "How should one practice ethics in leadership?",
        answer: "Leading by example, prioritizing collective welfare, transparency, and humility in power.",
        concept: "Leadership Ethics"
    },
    { 
        question: "What is the ethical approach to conflict resolution?",
        answer: "Non-violent communication, seeking win-win solutions, and preserving relationships.",
        concept: "Conflict Resolution Ethics"
    },
    { 
        question: "What are the ethical duties in friendship?",
        answer: "Loyalty, honesty, support in difficulty, and mutual spiritual encouragement.",
        concept: "Friendship Ethics"
    },
    { 
        question: "What is the Upanishadic view on competition?",
        answer: "Healthy competition for self-improvement is good, but harmful competition driven by envy should be avoided.",
        concept: "View on Competition"
    },
    { 
        question: "How should one practice ethics in times of crisis?",
        answer: "Maintaining Dharma even under pressure, helping others, and trusting in cosmic justice.",
        concept: "Crisis Ethics"
    },
    { 
        question: "What is the ethical significance of silence?",
        answer: "Silence conserves energy, prevents harmful speech, and creates space for inner reflection.",
        concept: "Significance of Silence"
    },
    { 
        question: "What are the ethical guidelines for art?",
        answer: "Art should uplift consciousness, celebrate beauty, and convey truth, not degrade or corrupt.",
        concept: "Art Ethics"
    },
    { 
        question: "What is the Upanishadic view on sports?",
        answer: "Sports should promote health, discipline, and camaraderie, not violence or excessive competition.",
        concept: "View on Sports"
    },
    { 
        question: "How should one practice ethics in education?",
        answer: "Imparting knowledge with love, developing character along with intellect, and respecting student individuality.",
        concept: "Education Ethics"
    },
    { 
        question: "What is the ethical approach to nature conservation?",
        answer: "Protecting nature as sacred trust, living sustainably, and recognizing interdependence of all life.",
        concept: "Nature Conservation Ethics"
    },
    { 
        question: "What are the ethical duties toward disabled persons?",
        answer: "Respect, inclusion, support, and recognizing the divine in all regardless of physical condition.",
        concept: "Duties to Disabled"
    },
    { 
        question: "What is the Upanishadic view on economic inequality?",
        answer: "Wealth should be distributed fairly; extreme inequality indicates social Dharma failure.",
        concept: "View on Economic Inequality"
    },
    { 
        question: "How should one practice ethics in business?",
        answer: "Fair pricing, quality products, honest advertising, and ethical treatment of employees and competitors.",
        concept: "Business Ethics Details"
    },
    { 
        question: "What is the ethical significance of cleanliness?",
        answer: "External cleanliness reflects internal purity and shows respect for oneself, others, and environment.",
        concept: "Significance of Cleanliness"
    },
    { 
        question: "What are the ethical guidelines for travel?",
        answer: "Respecting local customs, minimizing environmental impact, and being grateful for hospitality.",
        concept: "Travel Ethics"
    },
    { 
        question: "What is the Upanishadic view on fashion?",
        answer: "Clothing should be modest, comfortable, and appropriate, not for vanity or excessive display.",
        concept: "View on Fashion"
    },
    { 
        question: "How should one practice ethics in relationships?",
        answer: "With respect, honesty, responsibility, and commitment to mutual growth.",
        concept: "Relationship Ethics"
    },
    { 
        question: "What is the ultimate ethical teaching of the Upanishads?",
        answer: "See yourself in all beings and all beings in yourself; then you cannot harm anyone, for in harming others you harm yourself.",
        concept: "Ultimate Ethical Teaching"
    },
    { 
        question: "How does Self-realization transform ethics?",
        answer: "Ethical conduct becomes natural and spontaneous when one recognizes the same Self in all; no external rules are needed.",
        concept: "Ethics After Realization"
    },
    { 
        question: "What is the state of 'Dharma Megha Samadhi'?",
        answer: "The cloud of virtue - where ethical perfection becomes natural and one showers blessings on all beings spontaneously.",
        concept: "Dharma Megha Samadhi"
    }
];