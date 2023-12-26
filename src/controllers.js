import { ModeModel } from './model.js';


export const calculate = async ( req, res) => {

    const s = req.body.s;
    const words = req.body.words;
    
    try {
        const output = findSubstring(s, words)
        const mode = new ModeModel({ output });
        await mode.save();

        res.status(200).json({
            success: true,
            message: 'Se creo mode correctamente',
            output
        });
    } catch (error) {
        console.error('Error al guardar el documento:', error.message);
        res.status(500).json({
            success: false,
            message: 'Comuniquese con el administrador'
        });
    }

}


const permutations = (arr) => {
    if (arr.length === 0) return [[]];

    const first = arr[0];
    const rest = arr.slice(1);
    const withoutFirst = permutations(rest);

    const result = [];
    withoutFirst.forEach((perm) => {
        for (let i = 0; i <= perm.length; i++) {
            const newPerm = [...perm.slice(0, i), first, ...perm.slice(i)];
            result.push(newPerm);
        }
    });

    return result;
}

const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

const findSubstring = (s, words) => {
    if (!s || !words.length) {
        return [];
    }

    const wordLen = words[0].length;
    const concatLen = words.length * wordLen;
    const wordPerms = permutations(words);

    const result = [];
    for (let i = 0; i <= s.length - concatLen; i++) {
        const substring = s.slice(i, i + concatLen);
        const substringPerms = permutations(
            Array.from({ length: words.length }, (_, j) => substring.slice(j * wordLen, (j + 1) * wordLen))
        );

        let found = false;
        for (let perm of wordPerms) {
            if (arraysEqual(perm, substringPerms[0])) {
                found = true;
                break;
            }
        }

        if (found) {
            result.push(i);
        }
    }

    return result;
}

