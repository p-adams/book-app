package org.example

import java.io.File
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

data class MenuItem(val id: Int, val name: String, val description: String, val price: Float)

typealias MenuList = List<MenuItem>

fun buildMenu(): MenuList {
    println("building menu...")
    val listMenuType = object : TypeToken<MenuList>() {}.type
    return Gson().fromJson(
        File("src/main/kotlin/org/example", "menu.json").readText(),
        listMenuType
    )
}
