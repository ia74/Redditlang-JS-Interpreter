const invalid = {
    'roizor': {
        opinions: [ 
            'Twitter is better with Elon' 
        ],
        weight: [ 
            0.64
        ] // Validity, 0 is bad, 1 is best
    },
    'mohsenemx': {
        opinions: [ 
            'Fuck linux, windows is better' 
        ],
        weight: [ 
            0.7 
        ]
    },
    'moosedude': {
        opinions: [ 
            'freedom of choice is just an illusion', 
            'the earth is flat', 
            'cheese is a right wing fantasy creation to control the left' 
        ],
        weight: [
            
        ]
    }
}

Object.keys(invalid).forEach(user => {
    let userOpinions = invalid[user];
    console.log(user, 'thinks', userOpinions)
})