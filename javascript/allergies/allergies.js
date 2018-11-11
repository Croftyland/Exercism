const possibleAllergies = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats',
];

class Allergies {
    constructor(allergenIndex) {
        this.allergenIndex = allergenIndex;
    }

    list() {
        return possibleAllergies.filter((allergy, i) => this.allergenIndex & Math.pow(2, i));
    }

    allergicTo(food) {
        return this.list().some(allergy => allergy === food);
    }
}

export default Allergies;


// Reference data:
const allergyScores = new Map([
    [1,   'eggs'],
    [2,   'peanuts'],
    [4,   'shellfish'],
    [8,   'strawberries'],
    [16,  'tomatoes'],
    [32,  'chocolate'],
    [64,  'pollen'],
    [128, 'cats']
])

// The actual check for possible allergies:
function allergies(score) {
    // Just test if each score ANDs to a positive:
    return [...allergyScores.keys()].filter(v => v & score)
    // Map scores to allergens:
        .map(v => allergyScores.get(v))
}

// Interface:
class Allergies {
    constructor(score) {
        // If a person has a score, they have allergies.
        // Build the list in the constructor:
        this.allergies = allergies(score)
    }

    list() {
        return this.allergies
    }

    allergicTo(allergen) {
        return this.allergies.includes(allergen)
    }
}

export default Allergies