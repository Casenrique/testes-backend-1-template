// interface Fixaxao {

// }

export const fixacao = (word: string): string[] => {
    const letters = []
    for(let i = 0; i <= word.length; i++) {
        letters.push(word[i])
    } 
    return letters
}

export const fixacao2 = (word: string): string[] => {
    const letters = word.split('')

    return letters
}