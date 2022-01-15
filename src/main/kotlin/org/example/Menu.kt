package org.example

import java.io.File
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

data class MenuItem(val id: Int, val name: String, val price: Float)


fun buildMenu(): List<MenuItem> {
    val menuData = File("src/main/kotlin/org/example", "menu.json").readText()
    val listMenuType = object : TypeToken<List<MenuItem>>() {}.type
    val menuItems: List<MenuItem> = Gson().fromJson(menuData, listMenuType)
    return menuItems
}
