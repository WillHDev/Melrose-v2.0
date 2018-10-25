

Template.NewRecipe.events({
    'submit .new-recipe'(event) {
      // Prevent default browser form submit
      event.preventDefault();
   
      // Get value from form element
      const target = event.target;
      const name = target.name.value;
      const description = target.description.value;
   console.log(name, target.name);
      // Insert a task into the collection
      Recipes.insert({
        name,
      desc: description,

      });
   
      // Clear form
      target.description.value = '';
      target.name.value = '';
    },
  });

  // {{> quickForm collection="Recipes" id="insertRecipeForm" type="insert" class="new-recipe-form"}}