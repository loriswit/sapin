import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

fun main(args: Array<String>)
{
    val input = document.createElement("input") as HTMLInputElement
    input.type = "range"
    input.min = "2"
    input.max = "50"
    input.value = "10"
    input.addEventListener("input", { draw(input.value.toInt()) })
    
    val height = document.createElement("h1")
    height.id = "height"
    
    val canvas = document.createElement("pre")
    canvas.id = "canvas"
    
    document.body?.appendChild(height)
    document.body?.appendChild(input)
    document.body?.appendChild(canvas)
    
    draw(input.value.toInt())
}

fun draw(height: Int)
{
    val tree = StringBuilder()
    for(i in 0 until height)
        tree.append(" ".repeat(height - i - 1) + "*".repeat(i * 2 + 1) + "\n")
    tree.append(" ".repeat(height - 1) + "#")
    
    document.getElementById("height")?.innerHTML = "n = $height"
    document.getElementById("canvas")?.innerHTML = tree.toString()
}
