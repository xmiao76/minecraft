let h = 0
let i = 0
player.onChat("pyramid", function (x, y, z) {
    h = 10
    h += -1
    i = h
    for (let index = 0; index < i; index++) {
        shapes.line(
        SANDSTONE,
        world(x - h, y, z - h),
        world(x + h - 1, y, z - h)
        )
        shapes.line(
        SANDSTONE,
        world(x + h, y, z - h),
        world(x + h, y, z + h - 1)
        )
        shapes.line(
        SANDSTONE,
        world(x + h, y, z + h),
        world(x - h + 1, y, z + h)
        )
        shapes.line(
        SANDSTONE,
        world(x - h, y, z + h),
        world(x - h, y, z - h + 1)
        )
        y += 1
        h += 0 - 1
    }
    blocks.place(SANDSTONE, world(x, y + h, z))
})
