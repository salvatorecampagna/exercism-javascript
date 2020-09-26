export const translate = (rna) => {
  var map = new Map();
  map['AUG'] = 'Methionine';
  map['UUU'] = 'Phenylalanine';
  map['UUC'] = 'Phenylalanine';
  map['UUA'] = 'Leucine';
  map['UUG'] = 'Leucine';
  map['UCU'] = 'Serine';
  map['UCC'] = 'Serine';
  map['UCA'] = 'Serine';
  map['UCG'] = 'Serine';
  map['UAU'] = 'Tyrosine';
  map['UAC'] = 'Tyrosine';
  map['UGU'] = 'Cysteine';
  map['UGC'] = 'Cysteine';
  map['UGG'] = 'Tryptophan';
  map['UAA'] = 'STOP';
  map['UAG'] = 'STOP';
  map['UGA'] = 'STOP';

  var codons = [];
  for (var i = 0; (typeof rna !== 'undefined') && i < rna.length; i+=3) {
    codons.push(''.concat(rna[i], rna[i+1], rna[i+2]));
  }
  
  var proteins = []
  for (var i = 0; (typeof codons !== 'undefined') && i < codons.length; i++) {
    const protein = map[codons[i]];
    if (typeof protein === 'undefined') {
      throw new Error('Invalid codon');
    }
    if (protein === 'STOP') {
      break;
    }
    proteins.push(protein);
  }
  
  return proteins;
};
