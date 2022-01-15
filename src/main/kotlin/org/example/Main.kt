package org.example

import javafx.application.Application
import javafx.scene.Scene
import javafx.scene.layout.StackPane
import javafx.stage.Stage

class RestaurantApp : Application() {
    override fun start(stage: Stage) {
        val restaurantApp = MainController()
        stage.title = "Restaurant App"
        stage.scene = Scene(StackPane(), 400.0, 400.0)
        stage.show()
    }
}

fun main(args: Array<String>) {
    Application.launch(RestaurantApp::class.java)
}

