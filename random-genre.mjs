import {
    CountryAdjectives
} from './countries.mjs'
import {
    Nouns
} from './nouns.mjs'
import {
    Adjectives
} from './adjectives.mjs'

const pre = [
    CountryAdjectives,
    [
        'Alternative',
        'Avant-garde',
        'Black',
        'Christian',
        'Crust',
        'Death',
        'Doom',
        'Extreme',
        'Folk',
        'Glam',
        'Gothic',
        'Industrial',
        'Kawaii',
        'Neoclassical',
        'Post',
        'Progressive',
        'Speed',
        'Stoner',
        'Symphonic',
        'Thrash',
    ],
]
const mid = [
    Adjectives,
]
const post = [
    ['metal', 'core'],
]

function rand(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
}

function randomFromList(list) {
    return list[rand(0, list.length)]
}

function manyFromLists(lists, min, max) {
    const count = rand(min, max + 1)
    const results = []

    for (let i = 0; i < count; i++) {
        results.push(randomFromList(randomFromList(lists)))
    }
    return results
}

export function randomGenre() {
    return (
        manyFromLists(pre, 1, 3).join(' ') + ' ' +
        manyFromLists(mid, 0, 1).join(' ') + ' ' +
        randomFromList(Nouns) + ' ' +
        manyFromLists(post, 1, 1).join(' ')
    ).replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1))
}