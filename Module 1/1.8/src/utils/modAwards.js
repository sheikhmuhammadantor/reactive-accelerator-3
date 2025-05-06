export default function modAwards(awards) {
    const awardsCounds = awards.length;
    const awardsString = awards.join(', ');
    return [awardsCounds, awardsString]
}