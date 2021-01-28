# Whitehack Character Generator

A JavaScript class for randomly generating characters for Whitehack 2nd Edition.

## Installation
```
npm i whitehack-char-gen
```

## Usage

### Import
After installing with `npm`, import the character class with `import Character from 'whitehack-char-gen';`.

### Examples
Create a new character
```
myChar = new Character(1, 'Deft');
```

Level up an existing character
```
myChar.increaseLevel();
```

Manually update an attribute
```
myChar.attributes.intelligence.score = 13;
```

Choose new groups
```
myChar.generateGroups();
```

Choose new slots
```
myChar.generateSlots();
```

### Configuration
Configuration options can be passed as an optional object argument into the Character class to change how characters are generated.
```
myChar = new Character(1, 'Deft', config);
```

For example, you can override the available languages by passing an array to the languages property of the config argument:
```
myChar = new Character(1, 'Deft', {
    languages: [
        'Dwarvish',
        'Elvish',
        'Orcish',
    ]
});
```

Available configuration options are as follows:

#### nonDefaultSpeciesChance
Percent chance [0, 1] of generating a character with a species other than the default.

#### hybridSpeciesChance
Percent chance [0, 1] of generating a character with species group attached only to a single attribute, rather than two, *if* they are of a non-default species. This represents characters who are hybrids of the default species and a non-default species, e.g. half-elves.

#### defaultSpecies
Object of the form `{ name: 'Species Name', language: 'Species Language' }`, representing the standard species of your setting. The default is `{ name: 'Human', language: 'Common' }`.

#### otherSpecies
Array of objects of the same form as defaultSpecies.

#### languages
Array of strings representing languages available for characters to learn. This should have at least 2 unique entries, excluding any overlap with species-specific languages, to account for high-intelligence characters.

#### affiliations
Array of strings representing available affiliation groups. Should have at least 10 unique entries.

#### attunements
Array of objects with properties `name`, `category`, and `isItem`. Deft slots are randomly selected from this array, excluding elements of a `category` that has already been selected. If an element has `isItem = true`, it will be added to the Deft's inventory. Should have entries from at least 8 unique categories. However, see config option `preventDuplicateAttunementCategories` for an alternative.

#### preventDuplicateAttunementCategories
Boolean, by default `true`. When `true`, prevents attunements from the same category being assigned. When `false`, attunements from the same category *can* be assigned, so `attunements` need only have 8 unique entries, not 8 unique categories.

#### abilities
Array of strings representing available Strong abilities. Should have at least 4 unique entries.

#### miracles
Array of strings representing available Wise miracles. Should have at least 12 unique entries.

#### vocations
Array of strings representing available vocations.

#### defaultInventory
Array of strings representing the items that every character has.

#### names
Object with three properties: `prefixes`, `primaries`, and `suffixes`, each of which is an array of strings. Generated names can be of one of the following forms:
- `primary`
- `prefix + ' ' + primary`
- `primary + ' ' + suffix`

#### descriptors
Array of objects with properties `category` and `value`. These are used to add quirks to the character, such as `{ category: 'personality', value: 'Quick to forgive'}`. By default, 3 descriptors are generated for each character, and they are of unique categories, so this should have entries of at least 3 unique categories. However, see config option `preventDuplicateDescriptorCategories` for an alternative.

#### preventDuplicateAttunementCategories
Boolean, by default `true`. When `true`, prevents descriptors from the same category being assigned. When `false`, descriptors from the same category *can* be assigned, so `descriptors` need only have 3 unique entries, not 3 unique categories.

#### descriptorsCount
Integer, by default `3`. Number of descriptors to generate.

## License
Whitehack 2nd Edition is copyright 2015 Christian Merhstam. Its mechanisms are Open Game Content.