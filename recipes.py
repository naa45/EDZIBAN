recipes = {}
recipe_file = "recipe.txt"
recipemthods = "recipemethods.txt"

description = []
final_descriptions = []
def check_for_recipes(ing):
    global description
    with open(recipe_file, 'r') as f:
        for line in f:
            words = line.split(",")
            if words:
                recipes[words[0]] = words[1:]

    accepted_recipies = 0
    for recipe, ingredients in recipes.items():
        count = 0
        for ingredient in ingredients:
            if ingredient in ing:
                count += 1
            # else:
            #     break
        if (count >= len(ingredients)/2):
            accepted_recipies += 1
            val1 = 'You have the ingredients to make: {}'.format(recipe)
            #print('You have the ingredients to make: {}'.format(recipe))
            with open(recipemthods,'r') as m:
                for lines in m:
                    words2= lines.split(",")
                    if words2[0] == recipe:
                        mmmethods= words2[1:]
                        
                        #val2 = mmmethods
                        #print("These are the methods:")
                        description.append(val1)
                        for i in mmmethods:
                            x= i.rstrip()
                            description.append(x)
                        
                        #description.append(val2)
                        final_descriptions.append(description)
                        description = []
                        # for i,m in enumerate(mmmethods):
                        #     print(i+1,m)
    if (accepted_recipies == 0):
        print("insufficient ingredients")
    else:
        return final_descriptions

#print(check_for_recipes(['tomatoes','onions','garlic','pepper','goat','fish']))
#print(check_for_recipes(['bread','butter','cheese']))

'''
[
    ["you can do this","bread","butter","pepper"],
    ["you can do this","bread","butter","pepper"],
    ["you can do this","bread","butter","pepper"]
]
'''