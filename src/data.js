import LandingPage from './pages/LandingPage'
import ChoicePage from './pages/ChoicePage'
import ProblemPage from './pages/ProblemPage'
import ActionPage from './pages/ActionPage'
import DoninionPage from './pages/DoninionPage'


const landingPage = {
    content: <LandingPage />,
    navigateTo: '/choice'
}

const choicePage = {
    content: <ChoicePage />,
    navigateTo: '/problem'

}

const problemPage = {
    content: <ProblemPage />,
    navigateTo: '/cats'
}

const actionPage = {
    content: <ActionPage />,
    navigateTo: '/dominion'
}

const dominionPage = {
    content: <DoninionPage />,
    navigateTo: '/'
}

const cat = {
    name: "Cats",
    emoji: '🐈',
    gif: "",
    mainText: "Cats have captured our hearts with their mysterious personalities and quirky behavior. From the flick of their tails to the arch of their backs, these feline creatures communicate a complex range of emotions, verbally and non-verbally to both their human companions and their fellow furry friends.",
    url: 'https://corsproxy.io/?' + encodeURIComponent('https://api.thecatapi.com/v1/images/search'),
    labUrl: "https://res.cloudinary.com/dlqzrsajl/image/upload/v1701303668/IxWl7_kfjnnh.png",
    blueText: "Cats have captured our hearts with their mysterious personalities and quirky behavior. From the flick of their tails to the arch of their backs, these feline creatures communicate a complex range of emotions, verbally and non-verbally to both their human companions and their fellow furry friends. So, what exactly are their behaviors trying to tell us?",
    redText: "More than 19,000 cats are abused in U.S. laboratories every year—in addition to the tens of thousands who are killed and sold to schools for cruel and crude classroom dissections. These cats are just as deserving of fulfilling lives and loving homes as the feline companions who purr on our laps.",
    navigateTo: '/dogs'
}


const dog = {
    name: "Dogs",
    emoji: '🐕',
    gif: "",
    mainText: "Today, 73.9 million dogs are owned in the United States alone.1 These extremely popular pets have enjoyed a long relationship with humans. In fact, the modern-day dog is descended from the first animal species that humans domesticated. However, there is still some debate as to whether that species was the dog or the wolf. So you may ask yourself how did dogs become domesticated, and what exactly does domestication mean?",
    url: 'https://dog.ceo/api/breeds/image/random',
    labUrl: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701308447/PETA-Puppy-Mill-Investigation-9_p7ybqn.jpg',
    blueText: "Dogs are the most popular pet on the planet! A third of ALL households around the world have a dog.These playful, friendly, loyal animals make great companions, but they can also be fierce and tough protectors, or intelligent helpers.",
    redText: "There’s no excuse for bringing more puppies into the world. On any given day in the U.S., an estimated 70 million homeless dogs and cats are struggling to survive. Of the millions of animals who enter shelters each year, about half must be euthanized for humane reasons or because no suitable homes exist for them. Every time a dog is bred, homeless dogs lose the opportunity to have a good life.",
    navigateTo: '/foxes',
}

const fox = {
    name: "Foxes",
    emoji: '🦊',
    gif: "",
    mainText: "A fox is believed to be a very intelligent and clever animal. 37 species are referred to as foxes, but only 12 species actually belong to the Vulpes genus of ‘true foxes’. Every fox belongs to the canine family, and they are ranked as the smallest of all canines. However, they have some characteristics different from other canines",
    url: 'https://randomfox.ca/floof/',
    labUrl: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701362670/Quebec-Fur-Farm-2022-Fox-2_mhwjd7.jpg',
    blueText: "These animals are very social and live flexible lives. They are found all over the world — in North America, Europe, Asia and North Africa — and call a wide range of terrains their home. They also eat a greatly varied diet.",
    redText: "It can take between 10 to 24 foxes or 36 to 65 minks to produce a single fur coat. On fur farms, millions of wild animals like minks, foxes, rabbits, chinchillas, raccoon and dogs are bred into terrible conditions. Destined to spend their whole lives in cramped wire cages, they are then killed using brutal methods. It’s standard in the fur industry to kill foxes by anal electrocution... All in the name of fashion.",
    navigateTo: '/ducks',

}

const duck = {
    name: "Ducks",
    emoji: '🦆',
    gif: "",
    mainText: "Ducks are outgoing, social animals who feel most at ease when they're in a larger group of other ducks. Ducks can live up to 20 years, depending on the species and if well cared for. Ducks, in particular, have been domesticated to be exploited for their feathers, eggs and meat.",
    url: 'https://corsproxy.io/?' + encodeURIComponent('https://random-d.uk/api/random'),
    labUrl: "https://res.cloudinary.com/dlqzrsajl/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1701303769/animal-equality-ban-foie-gras_cjfptz.jpg",
    blueText: "Ducks are highly intelligent and emotional creatures. They can understand commands, play with toys, play games, give kisses, and beg for snuggles like other birds if you get to know them.",
    redText: "Foie gras, French for 'fat liver' is the liver of a duck or a goose that has been specially fattened by forced feeding. Upon hatching, the ducks are separated into males and females. The females are killed right away, because the structure of their liver makes them unsuitable for the forced feeding process. The males are cruelly debeaked in order to avoid too many losses due to fighting. A duck's liver naturally weighs around 50 grams.However, to qualify as foie gras, the industry's own regulations require ducks' livers to weigh an absolute minimum of 300 grams. The vast amounts of feed pumped down the ducks' throats causes enormous internal pressure, and the pipe sometimes punctures the esophagus, causing many to die from choking on the blood that fills their lungs. Some birds literally burst or choke to death on their own vomit. Other ducks die a slow, painful, and premature death by suffocation from inhalation of regurgitated feed.",
    navigateTo: '/action',
}



export { landingPage, problemPage, choicePage, cat, dog, fox, duck, actionPage, dominionPage }
