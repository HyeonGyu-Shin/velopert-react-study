function solution(survey, choices) {
    const MBTI = {};
    const types = ['RT', 'CF', 'JM', 'AN'];

    types.forEach((type) => type.split('').forEach((char) => (MBTI[char] = 0)));

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join('');
}

const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];
console.log(solution(survey, choices));
