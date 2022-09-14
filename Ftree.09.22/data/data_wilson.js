data = {
    "start":"id1",
    "persons": {
        "id1": { "id": "id1", "name": "Lucas Wilson", "birthyear": 1976, "deathyear": 2099, "own_unions": ["u1"], "parent_union": "u2", "birthplace":"Wik", "deathplace":"The Moon"},
        "id2": { "id": "id2", "name": "Clare F", "birthyear": 1978, "deathyear": 2099, "own_unions": ["u1"], "birthplace":"Cork", "deathplace":"The Moon"},
        "id3": { "id": "id3", "name": "Morrow Fletcher-Wilson", "birthyear": 2018, "deathyear": 2199, "own_unions": [], "parent_union": "u1", "birthplace":"Dublin", "deathplace":"Neptune"},
        "id4": { "id": "id4", "name": "Judy Russell", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u2"], "birthplace":"UK", "deathplace":"Neptune"},
        "id5": { "id": "id5", "name": "David Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u2", "u3"], "birthplace":"UK", "deathplace":"Neptune"},    
        "id6": { "id": "id6", "name": "Rama Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u4"], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id7": { "id": "id7", "name": "Jason Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": [""], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id8": { "id": "id8", "name": "Chokole Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": [""], "birthplace":"Ireland", "deathplace":"Neptune"},   
        "id9": { "id": "id9", "name": "Fiona Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u3"], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id10": { "id": "id10", "name": "Danny Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": [], "parent_union": "u3", "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id11": { "id": "id11", "name": "Sarah Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u4"], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id12": { "id": "id12", "name": "Thorjborn Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": [], "parent_union": "u4", "birthplace":"Ireland", "deathplace":"Neptune"},    

    },
    "unions": {
        //lucas and clare 
        "u1": { "id": "u1", "partner": ["id1", "id2"], "children": ["id3"] },
        //Dave and Judy
        "u2": { "id": "u2", "partner": ["id4", "id5"], "children": ["id1"] },
        //Dave and Fiona
        "u3": { "id": "u3", "partner": ["id9", "id5"], "children": ["id10"] },
        //Rama and Sarah
        "u4": { "id": "u4", "partner": ["id6", "id11"], "children": ["id12"] },
        
        
    },
    "links": [
        //lucas wilson -> to clare Fletcher
        ["id1", "u1"],
        //Clare Fletcher -> to Lucas Wilson
        ["id2", "u1"],
        //Morrow wilson -> Lucas & Clare 
        ["u1", "id3"],
        
        //Dave wilson -> Judy & dave 
        ["id5", "u2"],
        //Judy Russell -> dave & judy 
        ["id4", "u2"],

        //Dave wilson -> Fiona wilson
        ["id5", "u3"],
        //Fiona wilson -> Dave wilson
        ["id9", "u3"],
        //Danny wilson -> Dave & Fiona 
        ["u3", "id10"],

        //judy & dave -> to lucas wilson
        ["u2", "id1"],
        //judy & dave -> to coco wilson
        ["u2", "id8"],
        //judy & dave -> to Jason wilson
        ["u2", "id7"],
        //judy & dave -> to Rama wilson
        ["u2", "id6"],

        //Rama wilson -> to Sarah wilson
        ["id6", "u4"],
        //Sarah wilson -> to rama wilson
        ["id11", "u4"],
        //Thorjborn -> to rama & sarah
        ["u4", "id12"],
    ]
}