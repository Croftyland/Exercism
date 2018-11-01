export const toRna = (dna) => {
    //const rna = dna.replace(/./g, nucleotide => DNA_TO_RNA[nucleotide]);
    const rna = dna
        .replace('A', 'U')
        .replace('C', 'G')
        .replace('G', 'C')
        .replace('T', 'A');
    if (rna.length !== dna.length) {
        // invalid characters in the strand
        throw new Error('Invalid input DNA.');
    } else {
        return rna;
    }
};