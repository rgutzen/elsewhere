/**
 * Elsewhere — Prompt Database
 *
 * Three modes:
 *   stranger — prompts for initiating with someone you don't know
 *   friend   — prompts for going deeper with someone who matters
 *   self     — prompts for private reflection
 *
 * Each prompt: { id, text, context }
 */

module.exports = {

  // ─── STRANGER ──────────────────────────────────────────────────────────────
  stranger: [
    {
      id: 's-01',
      text: "Ask the person next to you what they're most excited about right now.",
      context: "Works at a café, queue, waiting room — anywhere humans gather."
    },
    {
      id: 's-02',
      text: "Compliment one specific detail you genuinely notice about someone near you.",
      context: "Observation + honesty = the rarest combination."
    },
    {
      id: 's-03',
      text: "Ask the barista or server what the most interesting thing that happened today was.",
      context: "People rarely get asked. They almost always have an answer."
    },
    {
      id: 's-04',
      text: "Ask a stranger what they're reading, watching, or listening to right now.",
      context: "Media is a window into someone's interior world."
    },
    {
      id: 's-05',
      text: "Ask someone nearby what they'd do if they had a completely free afternoon today.",
      context: "The answer tells you everything about who someone actually is."
    },
    {
      id: 's-06',
      text: "Tell someone near you one thing you find beautiful about the place you're both in.",
      context: "Vulnerability, not performance."
    },
    {
      id: 's-07',
      text: "Ask a stranger if they've been here before — and if so, what they come back for.",
      context: "People carry small loyalties. This question finds them."
    },
    {
      id: 's-08',
      text: "Ask the person next to you: 'What's been on your mind lately?'",
      context: "Absurdly direct. Startlingly welcome."
    },
    {
      id: 's-09',
      text: "Find someone who looks like they know something you don't and ask them to teach you something in two minutes.",
      context: "Everyone is an expert in something. This question proves it."
    },
    {
      id: 's-10',
      text: "Ask someone what the best decision they made this year was.",
      context: "It invites pride, story, and specificity all at once."
    },
    {
      id: 's-11',
      text: "Tell the person next to you something you just noticed that made you smile.",
      context: "Share a small world with a stranger."
    },
    {
      id: 's-12',
      text: "Ask someone: 'What's something you've changed your mind about recently?'",
      context: "Intellectual honesty is rare and immediately interesting."
    },
    {
      id: 's-13',
      text: "Ask someone waiting near you where they'd rather be right now.",
      context: "Then really listen to the geography of their longing."
    },
    {
      id: 's-14',
      text: "Ask: 'What do you think this place was like ten years ago?'",
      context: "Invites imagination. Levels the playing field instantly."
    },
    {
      id: 's-15',
      text: "Find out the name of someone you see regularly but have never spoken to. Use it next time.",
      context: "The quietest form of acknowledgment is also the deepest."
    },
    {
      id: 's-16',
      text: "Ask someone: 'What's something most people don't know about you that you wish they did?'",
      context: "They've been waiting for someone to ask."
    },
    {
      id: 's-17',
      text: "Ask a stranger what advice they'd give their 20-year-old self.",
      context: "Age is irrelevant. Everyone has an answer that costs them something to give."
    },
    {
      id: 's-18',
      text: "Ask the person next to you what they're hoping for.",
      context: "Not goals. Not plans. Hopes. There's a difference."
    },
  ],

  // ─── FRIEND ────────────────────────────────────────────────────────────────
  friend: [
    {
      id: 'f-01',
      text: "What's something you've been meaning to tell me but haven't found the right moment?",
      context: "The question that creates the moment."
    },
    {
      id: 'f-02',
      text: "Is there something in your life right now that you're not letting yourself be proud of?",
      context: "Give them permission to claim it."
    },
    {
      id: 'f-03',
      text: "What's a version of your life you walked away from — and do you still think about it?",
      context: "The roads not taken live in us longer than we admit."
    },
    {
      id: 'f-04',
      text: "When was the last time you felt truly seen by someone — and who was it?",
      context: "This one takes courage to ask and answer."
    },
    {
      id: 'f-05',
      text: "What's something you believed five years ago that you've quietly given up on?",
      context: "Not an attack — an invitation to grieve something together."
    },
    {
      id: 'f-06',
      text: "What do I do that makes you feel like I'm really listening to you?",
      context: "Asking this is a gift. The answer makes you better."
    },
    {
      id: 'f-07',
      text: "What's a question you have about your own life that you can't answer yet?",
      context: "Not about you — about them sitting with their own uncertainty."
    },
    {
      id: 'f-08',
      text: "Is there a version of your current situation that you'd be excited about?",
      context: "This reframes the stuck feeling into possibility."
    },
    {
      id: 'f-09',
      text: "What feels undervalued in your life right now — by others, or just by you?",
      context: "People carry quiet griefs about the things nobody notices."
    },
    {
      id: 'f-10',
      text: "What do you think I misunderstand about you?",
      context: "Brave to ask. The answer closes distance."
    },
    {
      id: 'f-11',
      text: "When did you last do something that scared you — and what happened?",
      context: "This isn't about adrenaline. It's about expanding."
    },
    {
      id: 'f-12',
      text: "What's something you've been carrying alone that you haven't told anyone?",
      context: "Say it gently. Then make space and don't fill the silence."
    },
    {
      id: 'f-13',
      text: "What's a relationship in your life — with a person, a place, a habit — that you're grieving quietly?",
      context: "Most grief doesn't announce itself."
    },
    {
      id: 'f-14',
      text: "What do you wish I asked you more often?",
      context: "One of the most loving questions you can offer."
    },
    {
      id: 'f-15',
      text: "What does rest actually feel like for you — and when did you last have it?",
      context: "Most people are tired in ways that sleep doesn't fix."
    },
    {
      id: 'f-16',
      text: "What are you most afraid of losing right now?",
      context: "Fear points directly at what we love."
    },
    {
      id: 'f-17',
      text: "What's a tension in your life that you're living with rather than resolving?",
      context: "Not everything needs solving. Sometimes it needs naming."
    },
    {
      id: 'f-18',
      text: "What does a good day look like for you these days?",
      context: "The answer changes constantly. Most people are never asked to update it."
    },
  ],

  // ─── SELF ──────────────────────────────────────────────────────────────────
  self: [
    {
      id: 'x-01',
      text: "What are you pretending not to notice in your life right now?",
      context: "Sit with this one. Don't let yourself rush to an answer."
    },
    {
      id: 'x-02',
      text: "If you had no audience — no one watching, no one judging — how would today look different?",
      context: "The gap between those two lives is worth examining."
    },
    {
      id: 'x-03',
      text: "What feeling have you been calling by a different name?",
      context: "Loneliness becomes 'being tired'. Fear becomes 'being busy'."
    },
    {
      id: 'x-04',
      text: "What would you do more of if you stopped worrying about whether you were good at it?",
      context: "What you loved before you learned to judge yourself."
    },
    {
      id: 'x-05',
      text: "Who have you been meaning to forgive — and what has keeping the grievance cost you?",
      context: "You don't have to tell them. Start by telling yourself."
    },
    {
      id: 'x-06',
      text: "What part of yourself are you performing right now, and who are you performing it for?",
      context: "The mask is usually protecting something tender."
    },
    {
      id: 'x-07',
      text: "What would you do differently if you knew no one would remember it?",
      context: "Legacy is a beautiful prison."
    },
    {
      id: 'x-08',
      text: "What do you keep asking for help with, but already know how to solve?",
      context: "Sometimes we want permission more than guidance."
    },
    {
      id: 'x-09',
      text: "When did you last feel completely like yourself — and what were the conditions?",
      context: "Map the environment of your own authenticity."
    },
    {
      id: 'x-10',
      text: "What's a belief about yourself that you haven't examined in years?",
      context: "The oldest ones are usually the least accurate."
    },
    {
      id: 'x-11',
      text: "What are you choosing not to want because it feels too risky to want it?",
      context: "Desire is one of the bravest things."
    },
    {
      id: 'x-12',
      text: "What would you stop doing tomorrow if you fully trusted yourself?",
      context: "The things you're still doing out of fear."
    },
    {
      id: 'x-13',
      text: "What are you most ashamed of — and is the shame still useful?",
      context: "Shame that no longer teaches is just weight."
    },
    {
      id: 'x-14',
      text: "What do you want more of that you're not asking for?",
      context: "Not material things. The texture of your days."
    },
    {
      id: 'x-15',
      text: "What would change if you started acting as if you already deserved what you want?",
      context: "Worthiness is a belief, not a reward."
    },
    {
      id: 'x-16',
      text: "Which of your habits is the most honest version of who you are right now?",
      context: "What you do daily is what you actually believe."
    },
    {
      id: 'x-17',
      text: "What has this year already taught you that you haven't admitted yet?",
      context: "The lesson is there. You're just still arguing with it."
    },
    {
      id: 'x-18',
      text: "What are you ready to stop pretending is fine?",
      context: "One honest sentence. That's all this needs."
    },
  ],

};
