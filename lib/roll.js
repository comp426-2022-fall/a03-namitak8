export default function roll(sides, dice, rolls) {
    const results = [];
    for (let i = 0; i < rolls; i++) {
        results.push(Math.floor(Math.random() * 6) + 1);
    } 
    return {"sides": sides, "dice": dice, "rolls": rolls, "results": results};
}
