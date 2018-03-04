package com.github.ptrteixeira.cookbook.data

import com.github.ptrteixeira.cookbook.base.BaseComponent
import dagger.Component
import org.jdbi.v3.core.Jdbi

@Component(
        modules = arrayOf(DataModule::class),
        dependencies = arrayOf(BaseComponent::class))
internal interface DataComponent {
    fun recipeData(): RecipeData
    fun jdbi(): Jdbi
}