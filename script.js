const qoutes = [
  'The greatest remedy for anger is delay.',
  "It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult.",
  'Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present."',
  "Like our stomachs, our minds are hurt more often by overeating than by hunger.”",
  "Remember how long you've been putting this off... There is a limit to the time assigned you, and if you don't use it to free yourself it will be gone and will never return.",
  'If you are ever tempted to look for outside approval, realize that you have compromised your integrity. If you need a witness, be your own.',
  'If you are careless and lazy now and keep putting things off and always deferring the day after which you will attend to yourself, you will not notice that you are making no progress but you will live and die as someone quite ordinary.',
  'Man conquers the world by conquering himself.',
  'When someone is properly grounded in life, they shouldn\'t have to look outside themselves for approval.',
  "Difficulties strengthen the mind as labor does the body.",
  'Stop drifting…Sprint to the finish. Write off your hopes, and if your well-being matters to you, be your own savior while you can.',
  "If you accomplish something good with hard work, the labor passes quickly, but the good endures; if you do something shameful in pursuit of pleasure, the pleasure passes quickly, but the shame endures.",
  'Remember that to change your mind and to accept correction are free acts.',
  'You are scared of dying—and, tell me, is the kind of life you lead really any different than being dead?',
  'There\'s nothing more insufferable than people who boast about their own humility.',
  'External things are not the problem. It\'s your assessment of them. Which you can erase right now.',
  'It\'s impossible for a man to learn what he thinks he already knows.',
  'Don\'t just say that you have read books. Show that through them you have learned to think better.',
  'It\'s not things that upset us but our judgments about things.',
  'Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions, not outside.',
  "Remind yourself what you've been through and what you've had the strength to endure.",
];

const author = [
    '-Seneca',
    "-Seneca",
    '-Marcus Aurelius',
    "-Petrarch",
    "-Marcus Aurelius",
    '-Epictetus',
    '-Epictetus',
    '-Zeno',
    '-Epictetus',
    "-Seneca",
    '-Marcus Aurelius',
    "-Musonius Rufus",
    '-Marcus Aurelius',
    '-Seneca',
    '-Marcus Aurelius',
    '-Marcus Aurelius',
    '-Epictetus',
    '-Epictetus',
    '-Epictetus',
    '-Marcus Aurelius',
    "-Marcus Aurelius",
  ];

function newQoute(){
    let randomNumber = Math.floor(Math.random() * (qoutes.length));
    document.getElementById('qouteDisplay').innerHTML = qoutes[randomNumber];
    document.getElementById('authorDisplay').innerHTML = author[randomNumber];
}
