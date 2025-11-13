// upanishad_chap_04.js
const chapterMetadata = {
    title: "Chapter 4: Philosophical Framework",
    info: "Core teachings and worldviews (110+ cards)"
};
const flashcards = [
    { 
        question: "What is the fundamental philosophical position of the Upanishads?",
        answer: "Non-dualism (Advaita) - the doctrine that ultimate reality is one without a second, and the individual self is identical with this reality.",
        concept: "Fundamental Position - Non-dualism"
    },
    { 
        question: "How do the Upanishads establish the non-dual nature of reality?",
        answer: "Through direct declarations (Mahavakyas), logical reasoning, analogies, and analysis of experience showing that multiplicity is apparent, not real.",
        concept: "Establishing Non-duality"
    },
    { 
        question: "What are the four main methods used in Upanishadic philosophy?",
        answer: "1) Shruti (scriptural testimony), 2) Yukti (logical reasoning), 3) Anubhava (direct experience), 4) Drshtanta (analogies and examples).",
        concept: "Philosophical Methods"
    },
    { 
        question: "How do the Upanishads approach epistemological questions?",
        answer: "They distinguish between lower knowledge (empirical sciences) and higher knowledge (metaphysical truth), emphasizing that only the latter leads to liberation.",
        concept: "Epistemological Approach"
    },
    { 
        question: "What is the Upanishadic theory of knowledge (Pramana)?",
        answer: "They accept multiple means of knowledge: Pratyaksha (perception), Anumana (inference), Shabda (verbal testimony), with Shabda being supreme for spiritual matters.",
        concept: "Theory of Knowledge"
    },
    { 
        question: "How do the Upanishads resolve the subject-object dichotomy?",
        answer: "By showing that both subject and object are appearances in pure consciousness, which is the ultimate reality beyond all dichotomies.",
        concept: "Resolution of Subject-Object"
    },
    { 
        question: "What is the philosophical significance of the 'Mahavakyas'?",
        answer: "They are not mere statements but direct pointers to non-dual reality that can trigger immediate recognition of one's true nature when properly understood.",
        concept: "Significance of Mahavakyas"
    },
    { 
        question: "How do the Upanishads address the problem of evil?",
        answer: "Evil is not ultimately real but appears due to ignorance; it disappears with knowledge of the Self, just as darkness vanishes with light.",
        concept: "Problem of Evil"
    },
    { 
        question: "What is the Upanishadic solution to the problem of suffering?",
        answer: "Suffering arises from misidentification with the body-mind; it ceases when one realizes one's true nature as eternal, blissful consciousness.",
        concept: "Solution to Suffering"
    },
    { 
        question: "How do the Upanishads explain the appearance of diversity?",
        answer: "Diversity appears due to Maya - the power of Brahman that makes the one reality appear as many, like one sun appearing as many in different waters.",
        concept: "Appearance of Diversity"
    },
    { 
        question: "What is the philosophical basis for the doctrine of Maya?",
        answer: "Maya is neither real nor unreal nor both - it is inexplicable (anirvachaniya), serving to explain the appearance of world without compromising non-duality.",
        concept: "Basis of Maya Doctrine"
    },
    { 
        question: "How do the Upanishads reconcile unity and diversity?",
        answer: "Unity is the absolute truth, diversity is relative truth - both are valid at different levels of understanding, like waves and ocean.",
        concept: "Reconciling Unity and Diversity"
    },
    { 
        question: "What is the Upanishadic view on free will and determinism?",
        answer: "At the empirical level, free will operates within the framework of karma; at the absolute level, there is neither, only pure consciousness.",
        concept: "Free Will and Determinism"
    },
    { 
        question: "How do the Upanishads approach the mind-body problem?",
        answer: "Both mind and body are appearances in consciousness; consciousness is the fundamental reality that manifests as both.",
        concept: "Mind-Body Problem"
    },
    { 
        question: "What is the Upanishadic theory of perception?",
        answer: "Consciousness reflected in the mind (Chidabhasa) contacts objects through sense organs - the ultimate perceiver is pure consciousness.",
        concept: "Theory of Perception"
    },
    { 
        question: "How do the Upanishads explain memory and recognition?",
        answer: "Through the concept of Samskaras - mental impressions stored in the subtle body that enable recall and recognition across different states.",
        concept: "Memory and Recognition"
    },
    { 
        question: "What is the philosophical basis for the doctrine of rebirth?",
        answer: "The continuity of Samskaras and unfulfilled desires necessitates repeated births until complete Self-knowledge is attained.",
        concept: "Basis of Rebirth Doctrine"
    },
    { 
        question: "How do the Upanishads establish the eternality of the Self?",
        answer: "Through analysis of the three states of consciousness, showing that the Self exists and witnesses all states without being affected by them.",
        concept: "Eternality of Self"
    },
    { 
        question: "What is the Upanishadic argument for the existence of Brahman?",
        answer: "Brahman is self-evident consciousness; all proofs presuppose it, and it is known in every act of knowing as the ultimate knower.",
        concept: "Argument for Brahman"
    },
    { 
        question: "How do the Upanishads refute materialism?",
        answer: "By showing that consciousness cannot be reduced to matter since matter is known only through consciousness, which is therefore more fundamental.",
        concept: "Refutation of Materialism"
    },
    { 
        question: "What is the Upanishadic response to skepticism?",
        answer: "The existence of the doubter cannot be doubted; the very act of doubting presupposes consciousness, which is therefore self-established.",
        concept: "Response to Skepticism"
    },
    { 
        question: "How do the Upanishads address the problem of other minds?",
        answer: "All minds are reflections of the same consciousness; the plurality of minds is apparent, not real.",
        concept: "Problem of Other Minds"
    },
    { 
        question: "What is the Upanishadic view on the nature of time?",
        answer: "Time is relative and exists only in the empirical realm; from the absolute standpoint, there is only the eternal now.",
        concept: "Nature of Time"
    },
    { 
        question: "How do the Upanishads explain causality?",
        answer: "Through Satkaryavada - the effect pre-exists in the cause, and Vivartavada - apparent transformation without real change.",
        concept: "Theory of Causality"
    },
    { 
        question: "What is the philosophical significance of the 'Neti Neti' approach?",
        answer: "It is a negative dialectic that removes all superimpositions on the Self, leading to direct recognition of what remains - pure consciousness.",
        concept: "Significance of Neti Neti"
    },
    { 
        question: "How do the Upanishads establish the self-luminosity of consciousness?",
        answer: "Consciousness does not require another consciousness to reveal it; it is self-revealing, like light that reveals itself while revealing objects.",
        concept: "Self-luminosity of Consciousness"
    },
    { 
        question: "What is the Upanishadic position on the relationship between God and world?",
        answer: "God (Ishvara) is both the material and efficient cause of the world; the world is real from empirical standpoint but unreal from absolute standpoint.",
        concept: "God-World Relationship"
    },
    { 
        question: "How do the Upanishads resolve the problem of divine omniscience and human freedom?",
        answer: "From the absolute standpoint, there is neither God nor individual; from empirical standpoint, God's omniscience and human freedom coexist through Maya.",
        concept: "Omniscience and Freedom"
    },
    { 
        question: "What is the Upanishadic view on the purpose of philosophy?",
        answer: "Not mere intellectual understanding but direct realization of one's true nature that results in liberation from suffering.",
        concept: "Purpose of Philosophy"
    },
    { 
        question: "How do the Upanishads approach the problem of language and reality?",
        answer: "Language can point to reality but cannot capture it; ultimate reality is beyond words and concepts, to be realized in direct experience.",
        concept: "Language and Reality"
    },
    { 
        question: "What is the philosophical basis for meditation in the Upanishads?",
        answer: "Meditation withdraws consciousness from external objects to rest in its source, facilitating direct recognition of one's true nature.",
        concept: "Basis of Meditation"
    },
    { 
        question: "How do the Upanishads explain the experience of bliss?",
        answer: "Bliss is not an emotion but the essential nature of the Self, experienced in degrees when mental modifications are stilled.",
        concept: "Experience of Bliss"
    },
    { 
        question: "What is the Upanishadic understanding of death?",
        answer: "Death is the separation of subtle body from gross body; the Self neither dies nor is born, being eternal consciousness.",
        concept: "Understanding of Death"
    },
    { 
        question: "How do the Upanishads establish the existence of subtle body?",
        answer: "Through analysis of dream and deep sleep states, and the continuity of memory and personality across different births.",
        concept: "Existence of Subtle Body"
    },
    { 
        question: "What is the philosophical basis for ethical living in the Upanishads?",
        answer: "Ethics purify the mind and make it fit for Self-knowledge; they are necessary for spiritual progress but insufficient for liberation.",
        concept: "Basis of Ethics"
    },
    { 
        question: "How do the Upanishads reconcile predestination with moral responsibility?",
        answer: "While Prarabdha karma determines circumstances, one has freedom to choose responses; past karma shapes present, present karma shapes future.",
        concept: "Predestination and Responsibility"
    },
    { 
        question: "What is the Upanishadic view on the relationship between knowledge and action?",
        answer: "Action can lead to knowledge by purifying the mind, but knowledge alone liberates; actions continue automatically for the knower but don't bind.",
        concept: "Knowledge and Action"
    },
    { 
        question: "How do the Upanishads explain the diversity of spiritual paths?",
        answer: "Different paths suit different temperaments; all ultimately lead to the same truth, like different rivers flowing to the same ocean.",
        concept: "Diversity of Spiritual Paths"
    },
    { 
        question: "What is the philosophical basis for guru-disciple relationship?",
        answer: "Just as a mirror cannot see itself, the mind cannot know itself; a guru who has realized the Self can remove the disciple's ignorance.",
        concept: "Basis of Guru-Disciple Relationship"
    },
    { 
        question: "How do the Upanishads establish the validity of spiritual experience?",
        answer: "Spiritual experience is self-validating; like the experience of happiness, it needs no external validation and transforms the experiencer.",
        concept: "Validity of Spiritual Experience"
    },
    { 
        question: "What is the Upanishadic response to the charge of solipsism?",
        answer: "Non-dualism is not solipsism; it acknowledges empirical reality while recognizing its dependent nature on consciousness.",
        concept: "Response to Solipsism Charge"
    },
    { 
        question: "How do the Upanishads explain the experience of individuality?",
        answer: "Individuality arises from identification with body-mind due to ignorance; it disappears with Self-knowledge, like the sense of being a dream character vanishes on waking.",
        concept: "Experience of Individuality"
    },
    { 
        question: "What is the Upanishadic view on the nature of will?",
        answer: "Individual will is the power of consciousness limited by the mind; cosmic will is the same power operating through Maya as Ishvara.",
        concept: "Nature of Will"
    },
    { 
        question: "How do the Upanishads explain the concept of divine grace?",
        answer: "Grace is the natural response of the Self when the seeker's mind becomes pure and receptive; it is not arbitrary but follows spiritual laws.",
        concept: "Concept of Divine Grace"
    },
    { 
        question: "What is the philosophical basis for the practice of self-surrender?",
        answer: "Since the individual self is illusory, surrendering it to the supreme Self is actually recognizing what always is - there is only the supreme Self.",
        concept: "Basis of Self-surrender"
    },
    { 
        question: "How do the Upanishads address the problem of infinite regress in epistemology?",
        answer: "Consciousness is self-established and requires no proof; all proofs and knowing presuppose it, thus avoiding infinite regress.",
        concept: "Infinite Regress Problem"
    },
    { 
        question: "What is the Upanishadic view on the relationship between science and spirituality?",
        answer: "Science studies the manifest world, spirituality studies the consciousness that manifests as world; both are valid but operate at different levels.",
        concept: "Science and Spirituality"
    },
    { 
        question: "How do the Upanishads explain the origin of the universe?",
        answer: "The universe emerges from Brahman through Maya, like waves from ocean or dreams from consciousness, without affecting Brahman's integrity.",
        concept: "Origin of Universe"
    },
    { 
        question: "What is the philosophical significance of the Om mantra?",
        answer: "Om represents the totality of existence - past, present, future, and what transcends time; meditating on it leads to realization of Brahman.",
        concept: "Significance of Om"
    },
    { 
        question: "How do the Upanishads establish the existence of transcendental consciousness?",
        answer: "Through analysis of deep sleep where no objects exist yet consciousness remains, witnessed by the recollection 'I slept well'.",
        concept: "Existence of Transcendental Consciousness"
    },
    { 
        question: "What is the Upanishadic argument against nihilism?",
        answer: "The reality of consciousness is self-evident; even to deny it, one must be conscious, thus establishing its undeniable existence.",
        concept: "Argument Against Nihilism"
    },
    { 
        question: "How do the Upanishads explain the experience of love?",
        answer: "Love is the attraction of the Self to itself through different forms; all love is ultimately love for the Self manifesting as various objects.",
        concept: "Experience of Love"
    },
    { 
        question: "What is the Upanishadic view on the nature of beauty?",
        answer: "Beauty is the reflection of the bliss aspect of Brahman in objects that harmonize with the mind's structure.",
        concept: "Nature of Beauty"
    },
    { 
        question: "How do the Upanishads address the problem of religious diversity?",
        answer: "Different religions are different paths to the same truth, suited to different temperaments and stages of evolution.",
        concept: "Religious Diversity"
    },
    { 
        question: "What is the philosophical basis for compassion in the Upanishads?",
        answer: "Seeing the same Self in all beings naturally results in compassion, as one recognizes that harming another is harming oneself.",
        concept: "Basis of Compassion"
    },
    { 
        question: "How do the Upanishads explain the concept of divine play (Lila)?",
        answer: "The creation and dissolution of universe is the spontaneous expression of Brahman's bliss, without any purpose or need.",
        concept: "Concept of Lila"
    },
    { 
        question: "What is the Upanishadic view on the relationship between fate and effort?",
        answer: "Fate (Prarabdha) provides the field, effort (Purushartha) determines the harvest within that field; both operate at empirical level.",
        concept: "Fate and Effort"
    },
    { 
        question: "How do the Upanishads establish the existence of subtle realms?",
        answer: "Through the testimony of seers, logical necessity to explain certain experiences, and the doctrine of continuity in cosmic manifestation.",
        concept: "Existence of Subtle Realms"
    },
    { 
        question: "What is the philosophical basis for the practice of discrimination?",
        answer: "Discrimination between real and unreal, eternal and temporary, Self and non-Self, is essential for spiritual progress.",
        concept: "Basis of Discrimination"
    },
    { 
        question: "How do the Upanishads explain the experience of mystical union?",
        answer: "Mystical union is the recognition of ever-present identity with Brahman, not a merger of two separate entities.",
        concept: "Experience of Mystical Union"
    },
    { 
        question: "What is the Upanishadic view on the nature of intuition?",
        answer: "Intuition is knowledge arising when the mind becomes transparent to consciousness, unmediated by thought processes.",
        concept: "Nature of Intuition"
    },
    { 
        question: "How do the Upanishads address the problem of theodicy?",
        answer: "From the absolute standpoint, there is no evil; from empirical standpoint, evil serves pedagogical purpose in soul's evolution.",
        concept: "Problem of Theodicy"
    },
    { 
        question: "What is the philosophical basis for vegetarianism in Upanishadic thought?",
        answer: "Ahimsa (non-violence) follows from seeing the same Self in all beings; it purifies the mind and prepares it for higher knowledge.",
        concept: "Basis of Vegetarianism"
    },
    { 
        question: "How do the Upanishads explain the concept of divine incarnation?",
        answer: "Divine incarnation is the descent of consciousness into human form to uplift humanity, appearing as separate while remaining one with Brahman.",
        concept: "Concept of Divine Incarnation"
    },
    { 
        question: "What is the Upanishadic view on the relationship between faith and reason?",
        answer: "Faith in the teacher and teachings prepares the mind for reasoning, which then leads to direct experience, completing the triad.",
        concept: "Faith and Reason"
    },
    { 
        question: "How do the Upanishads establish the continuity of consciousness across states?",
        answer: "Through the witness that remembers all states and recognizes their succession, establishing its transcendence over all states.",
        concept: "Continuity of Consciousness"
    },
    { 
        question: "What is the philosophical significance of the heart in Upanishadic thought?",
        answer: "The heart represents the center of consciousness where the individual and cosmic meet; realizing the space within the heart leads to Brahman-realization.",
        concept: "Significance of Heart"
    },
    { 
        question: "How do the Upanishads explain the experience of synchronicity?",
        answer: "As manifestations of the underlying unity where all events are interconnected expressions of the one consciousness.",
        concept: "Experience of Synchronicity"
    },
    { 
        question: "What is the Upanishadic view on the nature of creativity?",
        answer: "Creativity is the expression of Brahman's infinite potential through individual minds when they align with cosmic intelligence.",
        concept: "Nature of Creativity"
    },
    { 
        question: "How do the Upanishads address the mind-matter interaction problem?",
        answer: "Both mind and matter are manifestations of consciousness; their interaction occurs within consciousness, which is the common substratum.",
        concept: "Mind-Matter Interaction"
    },
    { 
        question: "What is the philosophical basis for the concept of spiritual evolution?",
        answer: "Progressive refinement of consciousness through successive births, from identification with matter to recognition as pure consciousness.",
        concept: "Basis of Spiritual Evolution"
    },
    { 
        question: "How do the Upanishads explain near-death experiences?",
        answer: "As temporary separations of subtle body from gross body, giving glimpses of subtle realms before returning to physical existence.",
        concept: "Near-death Experiences"
    },
    { 
        question: "What is the Upanishadic view on the nature of miracles?",
        answer: "Miracles are manifestations of natural laws operating at subtle levels, accessible to those who have mastered their minds.",
        concept: "Nature of Miracles"
    },
    { 
        question: "How do the Upanishads establish the existence of cosmic mind?",
        answer: "Through the order and intelligence evident in cosmic functioning, indicating an underlying cosmic intelligence (Hiranyagarbha).",
        concept: "Existence of Cosmic Mind"
    },
    { 
        question: "What is the philosophical basis for environmental ethics in Upanishads?",
        answer: "Since everything is manifestation of the same Brahman, harming nature is harming oneself; all life deserves respect and protection.",
        concept: "Basis of Environmental Ethics"
    },
    { 
        question: "How do the Upanishads explain the experience of déjà vu?",
        answer: "As memories from previous births surfacing in consciousness when similar circumstances activate corresponding Samskaras.",
        concept: "Experience of Déjà Vu"
    },
    { 
        question: "What is the Upanishadic view on the relationship between psychology and spirituality?",
        answer: "Psychology deals with the mind, spirituality with consciousness beyond mind; the former prepares for the latter by creating mental health.",
        concept: "Psychology and Spirituality"
    },
    { 
        question: "How do the Upanishads address the hard problem of consciousness?",
        answer: "By showing that consciousness is fundamental and matter is its manifestation, thus eliminating the hard problem which arises from materialist assumptions.",
        concept: "Hard Problem of Consciousness"
    },
    { 
        question: "What is the philosophical basis for the practice of mindfulness?",
        answer: "Mindfulness withdraws attention from objects to the subject, facilitating recognition of the witnessing consciousness behind all experiences.",
        concept: "Basis of Mindfulness"
    },
    { 
        question: "How do the Upanishads explain the experience of timelessness in deep meditation?",
        answer: "As contact with the eternal consciousness beyond time, where the mind temporarily ceases its time-creating activity.",
        concept: "Experience of Timelessness"
    },
    { 
        question: "What is the Upanishadic view on artificial intelligence?",
        answer: "AI can simulate intelligence but cannot possess consciousness, which is the fundamental reality, not a product of complex computation.",
        concept: "View on Artificial Intelligence"
    },
    { 
        question: "How do the Upanishads establish the existence of collective consciousness?",
        answer: "Through the interconnectedness of all minds as reflections of the same cosmic consciousness, evident in collective experiences and archetypes.",
        concept: "Existence of Collective Consciousness"
    },
    { 
        question: "What is the philosophical basis for interfaith dialogue?",
        answer: "Recognition that all genuine spiritual paths lead to the same truth, though expressed differently according to time, place, and culture.",
        concept: "Basis of Interfaith Dialogue"
    },
    { 
        question: "How do the Upanishads explain the experience of profound peace?",
        answer: "As the natural state of consciousness experienced when mental modifications subside, revealing its inherent peaceful nature.",
        concept: "Experience of Profound Peace"
    },
    { 
        question: "What is the Upanishadic view on the nature of mathematical truth?",
        answer: "Mathematical truths are eternal relationships in consciousness, discovered rather than invented by the human mind.",
        concept: "Nature of Mathematical Truth"
    },
    { 
        question: "How do the Upanishads address the measurement problem in quantum physics?",
        answer: "By suggesting that consciousness is fundamental and matter becomes determinate only when measured by consciousness.",
        concept: "Measurement Problem"
    },
    { 
        question: "What is the philosophical basis for the concept of avatar?",
        answer: "The descent of pure consciousness into human form to restore dharma and guide humanity, appearing as individual while remaining universal.",
        concept: "Basis of Avatar Concept"
    },
    { 
        question: "How do the Upanishads explain the experience of cosmic consciousness?",
        answer: "As the recognition that one's individual consciousness is identical with the consciousness pervading and constituting the entire universe.",
        concept: "Experience of Cosmic Consciousness"
    },
    { 
        question: "What is the Upanishadic view on the relationship between genetics and consciousness?",
        answer: "Genetics determines the physical vehicle and mental tendencies, but consciousness itself is independent and uses these for its expression.",
        concept: "Genetics and Consciousness"
    },
    { 
        question: "How do the Upanishads establish the possibility of omniscience?",
        answer: "Since consciousness is all-pervading, when the mind becomes completely transparent to it, all knowledge becomes available.",
        concept: "Possibility of Omniscience"
    },
    { 
        question: "What is the philosophical basis for the practice of self-inquiry?",
        answer: "Turning attention from the objects of knowledge to the knower itself, leading to discovery of the true Self beyond all objects.",
        concept: "Basis of Self-inquiry"
    },
    { 
        question: "How do the Upanishads explain the experience of unconditional love?",
        answer: "As the natural expression of the Self when it recognizes itself in all beings, beyond all conditions and expectations.",
        concept: "Experience of Unconditional Love"
    },
    { 
        question: "What is the Upanishadic view on the nature of dark matter and energy?",
        answer: "As manifestations of the unmanifest aspect of Brahman, representing the vast potentiality from which the manifest universe emerges.",
        concept: "Nature of Dark Matter and Energy"
    },
    { 
        question: "How do the Upanishads address the fine-tuning problem in cosmology?",
        answer: "The universe appears fine-tuned because it is the manifestation of cosmic intelligence, not random accident.",
        concept: "Fine-tuning Problem"
    },
    { 
        question: "What is the philosophical basis for the concept of multiverse?",
        answer: "As different manifestations within the one consciousness, like different dreams appearing in the same dreamer.",
        concept: "Basis of Multiverse Concept"
    },
    { 
        question: "How do the Upanishads explain the experience of precognition?",
        answer: "As access to the timeless consciousness where past, present and future exist simultaneously as potentialities.",
        concept: "Experience of Precognition"
    },
    { 
        question: "What is the Upanishadic view on the relationship between consciousness and information?",
        answer: "Information is the content of consciousness; consciousness is the ground in which information appears and has meaning.",
        concept: "Consciousness and Information"
    },
    { 
        question: "How do the Upanishads establish the primacy of consciousness over matter?",
        answer: "Matter is known only through consciousness, while consciousness is self-known; the known depends on the knower, not vice versa.",
        concept: "Primacy of Consciousness"
    },
    { 
        question: "What is the ultimate philosophical conclusion of the Upanishads?",
        answer: "Brahman alone is real, the world is appearance, the individual self is Brahman, and realizing this is liberation.",
        concept: "Ultimate Philosophical Conclusion"
    }
];