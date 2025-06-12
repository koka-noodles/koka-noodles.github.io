data = {
    "start":"id19",
    "persons": {
        //gen -3
        "id26": { "id": "id26", "name": "George Herbert", "birthyear": 1950, "deathyear": 2199, "own_unions": [], "birthplace":"UK", "deathplace":"Neptune"},
        "id27": { "id": "id27", "name": "Jean C.Lawrence", "birthyear": 1950, "deathyear": 2199, "own_unions": [], "birthplace":"UK", "deathplace":"Neptune"},

        //gen -2
        "id19": { "id": "id19", "name": "G W Russell", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u7"], "birthplace":"UK", "deathplace":"Neptune"},
        "id20": { "id": "id20", "name": "Ann Willy", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u7"], "birthplace":"UK", "deathplace":"Neptune", "url": "https://www.sageappliances.com/en-ie/product/bov860"},
        

        //gen -1
        "id4": { "id": "id4", "name": "Judy Russell", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u2"], "parent_union": "u7", "birthplace":"UK", "deathplace":"Neptune"},
        "id21": { "id": "id21", "name": "Martin Russell", "birthyear": 1950, "deathyear": 2199, "own_unions": [], "parent_union": "u7", "birthplace":"UK", "deathplace":"Neptune"},
        "id22": { "id": "id22", "name": "Susan Fenn", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u8"], "parent_union": "u7", "birthplace":"UK", "deathplace":"Neptune"},
        "id23": { "id": "id23", "name": "Elizabeth Russell", "birthyear": 1950, "deathyear": 2199, "own_unions": [], "parent_union": "u7", "birthplace":"UK", "deathplace":"Neptune"},
        "id24": { "id": "id24", "name": "Nick Fenn", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u8"], "birthplace":"UK", "deathplace":"Neptune"},        
        // "id25": { "id": "id25", "name": "Matin fist wife", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u9"], "birthplace":"UK", "deathplace":"Neptune"},        
        "id5": { "id": "id5", "name": "David Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u2", "u3"], "birthplace":"UK", "deathplace":"Neptune"},    
        "id9": { "id": "id9", "name": "Fiona Wilson", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u3"], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id16": { "id": "id16", "name": "Angela Fletcher", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u6"], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id17": { "id": "id17", "name": "Ian Fletcher", "birthyear": 1950, "deathyear": 2199, "own_unions": ["u6"], "birthplace":"Ireland", "deathplace":"Neptune"},    
        
        //Gen 0
        "id1": { "id": "id1", "name": "person Lucas Wilson", "birthyear": 1976, "deathyear": 2222, "own_unions": ["u1"], "parent_union": "u2", "birthplace":"Wik", "deathplace":"The Moon"},
        "id2": { "id": "id2", "name": "Clare F", "birthyear": 1978, "deathyear": 2222, "own_unions": ["u1"], "parent_union": "u6", "birthplace":"Cork", "deathplace":"The Moon"},
        "id6": { "id": "id6", "name": "Rama Wilson", "birthyear": 1950, "deathyear": 2222, "own_unions": ["u4"], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id7": { "id": "id7", "name": "Jason Wilson", "birthyear": 1969, "deathyear": 2222, "own_unions": [], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id8": { "id": "id8", "name": "Chokole Wilson", "birthyear": 1981, "deathyear": 2222, "own_unions": ["u5"], "birthplace":"Ireland", "deathplace":"Neptune"},   
        "id10": { "id": "id10", "name": "Danny Wilson", "birthyear": 1950, "deathyear": 2222, "own_unions": [], "parent_union": "u3", "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id11": { "id": "id11", "name": "Sarah Wilson", "birthyear": 1950, "deathyear": 2222, "own_unions": ["u4"], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id15": { "id": "id15", "name": "Jason McC", "birthyear": 1950, "deathyear": 2222, "own_unions": ["u5"], "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id18": { "id": "id18", "name": "Jonathan Fletcher", "birthyear": 1950, "deathyear": 2222, "own_unions": [], "parent_union": "u6", "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id25": { "id": "id25", "name": "Julia Fenn", "birthyear": 1950, "deathyear": 2222, "own_unions": [], "parent_union": "u8", "birthplace":"Ireland", "deathplace":"Neptune"},    

        //Gen 1
        "id3": { "id": "id3", "name": "Morrow Fletcher-Wilson", "birthyear": 2018, "deathyear": 2222, "own_unions": [], "parent_union": "u1", "birthplace":"Dublin", "deathplace":"Neptune"},     
        "id12": { "id": "id12", "name": "Thorjborn Wilson", "birthyear": 1950, "deathyear": 2222, "own_unions": [], "parent_union": "u4", "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id13": { "id": "id13", "name": "Robin Wilson", "birthyear": 1950, "deathyear": 2222, "own_unions": [], "parent_union": "u5", "birthplace":"Ireland", "deathplace":"Neptune"},    
        "id14": { "id": "id14", "name": "Orin Wilson", "birthyear": 1950, "deathyear": 2222, "own_unions": [], "parent_union": "u5", "birthplace":"Ireland", "deathplace":"Neptune"},    
        
        // index is at 25
        

    },
    "unions": {

        //gen -3

        // george and Jean 
        "u8": { "id": "u8", "partner": ["id26", "id27"], "children": ["id19"] },
        
        //Gen -2

        //G W Russell and Ann Willy
        "u7": { "id": "u7", "partner": ["id19", "id20"], "children": ["id4"] },
        
        //Gen -1

        //Dave and Judy
        "u2": { "id": "u2", "partner": ["id4", "id5"], "children": ["id1"] },
        //Dave and Fiona
        "u3": { "id": "u3", "partner": ["id9", "id5"], "children": ["id10"] },
        //Ian and Angela
        "u6": { "id": "u6", "partner": ["id16", "id17"], "children": ["id2"] },

        // //Sue and Nick
        "u8": { "id": "u8", "partner": ["id22", "id24"]},
        // //Martin and Marins first wife
        // "u9": { "id": "u9", "partner": ["id21", "id25"]},

        //Gen 0

        //lucas and clare 
        "u1": { "id": "u1", "partner": ["id1", "id2"], "children": ["id3"] },
        //Rama and Sarah
        "u4": { "id": "u4", "partner": ["id6", "id11"], "children": ["id12"] },
        //Coco and Jason
        "u5": { "id": "u5", "partner": ["id8", "id15"], "children": ["id13", "id14"] },

        
    },
    "links": [

        // gen -3

        //george -> george & Jean
        ["id26", "u8"],
        //Jean -> george & Jean
        ["id27", "u8"],

        //gen -2 -> -3

        //george Russell to george & jean 
        ["u8", "id19"],

        //Gen -2
        
        //G W Russell -> G W Russell & Ian union
        ["id19", "u7"],
        //Ann Willy -> G W Russell & Ann Willy
        ["id20", "u7"],

        //Gen -1 -> -2

        //Judy Russell -> G W Russell & Anne union 
        ["u7", "id4"],
        //Martin & Anne union -> G W Russell & Anne union
        ["u7", "id21"],
        //Martin & Anne union -> G W Russell & Anne union
        ["u7", "id22"],
        //Martin & Anne union -> G W Russell & Anne union
        ["u7", "id23"],


        //Gen -1

        //Ian Fletcher -> Angela & Ian union
        ["id17", "u6"],
        //Angela Fletcher -> Angela & Ian union
        ["id16", "u6"],
        //Dave wilson -> Judy & dave union
        ["id5", "u2"],
        //Judy Russell -> dave & judy union
        ["id4", "u2"],
        //Dave wilson -> Dave & Fiona union
        ["id5", "u3"],
        //Fiona wilson -> Dave & Fiona union
        ["id9", "u3"],
        //nick -> nick & sue union 
        ["id24", "u8"],
        //sue -> nick & sue union 
        ["id22", "u8"],

        //Gen -1 -> 0

        //judy & dave union -> to lucas wilson
        ["u2", "id1"],
        //judy & dave union -> to coco wilson
        ["u2", "id8"],
        //judy & dave union -> to Jason wilson
        ["u2", "id7"],
        //judy & dave union -> to Rama wilson
        ["u2", "id6"],
         //Clare fletcher -> Angela & Ian union
         ["u6", "id2"],
         //Danny wilson -> Dave & Fiona union
         ["u3", "id10"],
         //Jonny Fletcher -> Angela & Ian union
         ["u6", "id18"],
         //Julia fenn -> nick & sue union
         ["u8", "id25"],


        //gen 0

        //lucas wilson -> to clare & lucas union
        ["id1", "u1"],
        //Clare Fletcher -> to Lucas & Clare union
        ["id2", "u1"],
        //Rama wilson -> to rama & sarah union
        ["id6", "u4"],
        //Sarah wilson -> to rama & sarah union
        ["id11", "u4"],
        //CoCo wilson -> JasonMC & Coco union 
        ["id8", "u5"],
        //Jason MC -> JasonMC & Coco union 
        ["id15", "u5"],

        //Gen 0 -> -1

        //Morrow wilson -> Lucas & Clare union
        ["u1", "id3"],
        //Thorjborn -> to rama & sarah union
        ["u4", "id12"],
        //Robin wilson -> JasonMC & Coco union 
        ["u5", "id13"],
        //Orin wilson -> JasonMC & Coco union 
        ["u5", "id14"],

        
        
        
        

        

       
        

        

        
        

        
        
    ]
}
