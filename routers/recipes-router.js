const router = require("express").Router();

const Recipes = require("../models/recipes-model.js");
const restricted = require('../auth/authenticate-middleware.js');

// add recipe
router.post("/", restricted, (req, res) => {
    const recipe = req.body;
    console.log(recipe);

    Recipes.addRecipe(recipe)
        .then(saved => {
            res
                .status(201)
                .json({ created_recipe: saved, message: "Recipe added successfully!" });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Could not add recipe" });
        });
});

// get all recipes
router.get("/allRecipes", restricted, (req, res) => {
    Recipes.findRecipe()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Could not get recipes" });
        });
});

// get recipe by id
router.get("/:id", (req, res) => {
    const id = req.params.id;

    Recipes.findRecipeById(id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Could not get recipe" });
        });
});

// edit recipe
router.put("/:id", restricted, (req, res) => {
    const id = req.params.id;
    const body = req.body;

    Recipes.updateRecipe(body, id)
        .then(updatedRecipe => {
            if (updatedRecipe) {
                res.status(200).json({ message: "Recipe updated" });
            } else {
                res.status(404).json({ message: "Recipe not found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Could not update recipe" });
        });
});

// delete recipe
router.delete("/:id", restricted, (req, res) => {
    const id = req.params.id;

    Recipes.deleteRecipe(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ message: "Recipe deleted" });
            } else {
                res.status(404).json({ message: "Recipe not found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Could not delete recipe" });
        });
});

module.exports = router;