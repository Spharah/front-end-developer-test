function toRna(dna) {
    var output = '';
    for (var i = 0; i < dna.length; i++) {
        var current = dna[i];
        if (current == 'G'){
            output += 'C'
        } else if (current == 'C') {
            output += 'G';
        } else if (current == 'T'){
            output += 'A'
        } else if (current == 'A'){
            output += 'U'
        } else {
            output = current;
        }
    }
    return output;
}
